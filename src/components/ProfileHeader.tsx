import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  avatar: string;
};

export default function ProfileHeader({ name, bio, avatar }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={avatar}
        alt={`${name} 프로필 사진`}
        width={176}
        height={176}
        priority
        className="h-40 w-40 rounded-full object-cover ring-4 ring-emerald-100 shadow-md sm:h-44 sm:w-44 dark:ring-emerald-900"
      />
      <h1 className="mt-4 text-xl font-bold sm:text-2xl">{name}</h1>
      <p className="mt-1 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
        {bio}
      </p>
    </header>
  );
}
