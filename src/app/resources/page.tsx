"use client";
import React from "react";
import Link from "next/link";


export default function Home() {


  return (
    <div>
      {/* 上方橫幅 */}
      <header>
        <h1>NTHU CS Website</h1>
        {/* 導航選單 */}
        <nav className="flex">
          <Link href="/" className="hover:text-[#4D4D5C]">
            HOME
          </Link>
          <Link href="/resources" className="text-[#4D4D5C]">
            RESOURCES
          </Link>
          <Link href="/photos" className="hover:text-[#4D4D5C]">
            PHOTOS
          </Link>
        </nav>
      </header>

      {/* 主內容區 */}
      <main className="content">
        {/* 例外：把這行標題整個置中，字級放大 */}
        <div className="text-center mb-4">
          <Link href="https://drive.google.com/drive/folders/1zoRayCwbnTJIZ_WJSXRyR0Z5-BThec8X" className="text-2xl hover:text-[#98AFC7]">
            考古題
          </Link>
        </div>
      </main>

    </div>
  );
}
