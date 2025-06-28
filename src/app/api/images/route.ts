// app/api/images/route.ts
import { NextRequest, NextResponse } from 'next/server';

/** Google Drive v3 /files 回傳的單一檔案 */
interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
}

/** Google Drive v3 /files 回傳的 JSON 物件 */
interface DriveListResponse {
  files: DriveFile[];
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const folderId =
      searchParams.get('folderId') ?? process.env.NEXT_PUBLIC_DRIVE_FOLDER_ID;
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!folderId || !apiKey) {
      return NextResponse.json(
        { error: 'Missing folderId or API key' },
        { status: 400 },
      );
    }

    /* 列出檔案 */
    const listUrl =
      'https://www.googleapis.com/drive/v3/files' +
      `?q='${folderId}'+in+parents` +
      `&key=${apiKey}` +
      '&supportsAllDrives=true' +
      '&includeItemsFromAllDrives=true' +
      '&fields=files(id,name,mimeType)';

    const listRes = await fetch(listUrl);

    if (!listRes.ok) {
      const errText = await listRes.text();
      return NextResponse.json({ error: errText }, { status: listRes.status });
    }

    const { files }: DriveListResponse = (await listRes.json()) as DriveListResponse;

    const images = files
      .filter((f) => f.mimeType.startsWith('image/'))
      .map(
        (f) =>
          `https://www.googleapis.com/drive/v3/files/${f.id}?alt=media&key=${apiKey}`,
      );

    return NextResponse.json({ images });
  } catch (e: unknown) {
    const message =
      e instanceof Error ? e.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
