import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile } from "@/data/profile";

// wireframe.png 레이아웃: 화면 틀 안에 큰 원형 프로필 → 이름·소개 → 세로 링크 카드 3개
export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-100 sm:items-center sm:py-10 dark:bg-zinc-950">
      <main className="flex w-full flex-col items-center bg-white px-6 pt-16 pb-10 sm:max-w-sm sm:rounded-3xl sm:border sm:border-zinc-200 sm:shadow-xl dark:bg-zinc-900 dark:sm:border-zinc-800">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatar={profile.avatar}
        />
        <div className="mt-10 w-full max-w-60">
          <LinkList links={profile.links} />
        </div>
        <footer className="mt-16 text-xs text-zinc-400">링크나무 🌳</footer>
      </main>
    </div>
  );
}
