"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* 上方橫幅 */}
      <header
        className="
          flex items-center justify-between
          py-8 px-8
          bg-[var(--banner-bg)] text-[var(--banner-text)]
        "
      >
        <h1 className="text-3xl font-bold">NTHU CS Website</h1>
        <nav className="flex gap-6">
          <Link href="/" className="text-[var(--banner-text)] hover:text-[#4D4D5C]">
            HOME
          </Link>
          <Link href="/resources" className="text-[var(--banner-text)] hover:text-[#4D4D5C]">
            RESOURCES
          </Link>
          <Link href="/photos" className="text-[var(--banner-text)] hover:text-[#4D4D5C]">
            PHOTOS
          </Link>
        </nav>
      </header>

      {/* 主內容區 */}
      <main className="content">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <p>本系前身「計算機管理決策研究所」成立於民國66年，初始僅招收碩士班研究生，72年增設博士班，77年改名為「資訊科學研究所」，79 年成立「資訊科學系」，招收大學部學生。84年起所、系合併稱「資訊科學系」設大學部、碩士班及博士班。86學年起更名「資訊工程學系」。增設大學部第二班改隸「電機資訊學院」，92學年度增設大學部第三班，100學年度起大學部入學新生分為電子資訊組及資訊工程組。目前每年招收約12名博士生，155名碩士生及127名大學生。 91年成立「資訊系統與應用研究所」，96學年度起每年招收4位博士生及35名碩士生，108年成立「資訊安全研究所」，每年招收12名碩士生。</p>
        </div>
      </main>
    </div>
  );
}
