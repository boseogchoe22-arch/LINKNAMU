"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, title, url }: LinkItem) {
  // 페이지를 벗어나도 요청이 전송되도록 sendBeacon 사용
  const recordClick = () => {
    const body = JSON.stringify({ linkId: id });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/clicks",
        new Blob([body], { type: "application/json" }),
      );
    } else {
      fetch("/api/clicks", { method: "POST", body, keepalive: true });
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="block w-full rounded-xl border border-zinc-200 bg-white px-5 py-3 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md active:translate-y-0 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-emerald-500"
    >
      {title}
    </a>
  );
}
