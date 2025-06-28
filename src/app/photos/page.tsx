// app/page.tsx  or pages/index.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';

// 純 ID，或直接用 env var：process.env.NEXT_PUBLIC_DRIVE_FOLDER_ID
const DRIVE_FOLDER_ID = process.env.NEXT_PUBLIC_DRIVE_FOLDER_ID;

export default function Home() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/images?folderId=${DRIVE_FOLDER_ID}`)
      .then((res) => {
        if (!res.ok) throw new Error("無法取得圖片列表");
        return res.json();
      })
      .then((data: { images: string[] }) => {
        setImageUrls(data.images);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <header>
        <h1>NTHU CS Website</h1>
        {/* 導航選單 */}
        <nav className="flex">
          <Link href="/" className="hover:text-[#4D4D5C]">
            HOME
          </Link>
          <Link href="/resources" className="hover:text-[#4D4D5C]">
            RESOURCES
          </Link>
          <Link href="/photos" className="text-[#4D4D5C]">
            PHOTOS
          </Link>
        </nav>
      </header>

      <main className="content">
        {loading && <p>載入中...</p>}
        {error && <p className="text-red-500">錯誤：{error}</p>}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {imageUrls.map((url) => (
              <div
                key={url}
                className="flex items-center justify-center overflow-hidden rounded shadow"
              >
                <Image src={url} alt="Drive Photo" width={0} height={0} sizes="100vw" style={{ width: '50%', height: 'auto' }} />
              </div>
            ))}
          </div>

        )}
      </main>
    </div>
  );
}
