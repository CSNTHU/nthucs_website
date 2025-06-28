// app/api/images/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const folderId = searchParams.get('folderId')
            || process.env.NEXT_PUBLIC_DRIVE_FOLDER_ID!;
        const apiKey = process.env.GOOGLE_API_KEY!;

        if (!folderId || !apiKey) {
            return NextResponse.json(
                { error: 'Missing folderId or API key' },
                { status: 400 }
            );
        }

        // 列出檔案 ID
        const listUrl =
            `https://www.googleapis.com/drive/v3/files` +
            `?q='${folderId}'+in+parents` +
            `&key=${apiKey}` +
            `&supportsAllDrives=true` +
            `&includeItemsFromAllDrives=true` +
            `&fields=files(id,name,mimeType)`;

        const listRes = await fetch(listUrl);
        if (!listRes.ok) {
            const err = await listRes.text();
            return NextResponse.json({ error: err }, { status: listRes.status });
        }
        const { files } = await listRes.json() as { files: any[] };

        // 針對每個檔案產生 alt=media 端點 URL
        const images = files
            .filter(f => f.mimeType.startsWith('image/'))
            .map(f =>
                `https://www.googleapis.com/drive/v3/files/${f.id}` +
                `?alt=media&key=${apiKey}`
            );

        return NextResponse.json({ images });
    } catch (e: any) {
        return NextResponse.json(
            { error: e.message || 'Unknown error' },
            { status: 500 }
        );
    }
}
