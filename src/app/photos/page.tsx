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
          <Link href="/resources" className="hover:text-[#4D4D5C]">
            RESOURCES
          </Link>
          <Link href="/photos" className="text-[#4D4D5C]">
            PHOTOS
          </Link>
        </nav>
      </header>

      {/* 主內容區 */}
      <main>
        <p>...</p>
      </main>
    </div>
  );
}
