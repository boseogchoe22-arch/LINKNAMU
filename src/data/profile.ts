export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatar: string;
  links: LinkItem[];
};

// 보여 주기용 더미 데이터. 실제 내용은 나중에 이 파일만 수정하면 된다.
export const profile: Profile = {
  name: "최보석",
  bio: "광학 설계자 → CLAUDE 사용자",
  avatar: "/avatar.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://velog.io" },
  ],
};
