// data/projects.js
export const projectsData = {
  teamProjects: [
    // 키키무비
    {
      id: 1,
      name: "KIKI MOVIES",
      category: "team",
      skills: ["Django", "Vue"],
      description: "영화 추천 및 커뮤니티 웹 서비스",
      role: "프론트엔드 개발 및 UI/UX 디자인",
      images: [
        "/assets/projects/kiki1.png",
        "/assets/projects/kiki2.png",
        "/assets/projects/kiki3.gif"
      ],
      githubUrl: "https://github.com/...",
      deployUrl: "https://...",
      notionUrl: "https://notion.so/..."
    },
  ],
  toyProjects: [
    // 포트폴리오
    {
      id: 1,
      name: "포트폴리오",
      category: "toy",
      skills: ["React"],
      description: "개인 포트폴리오 웹사이트",
      role: "개인 프로젝트",
      images: [
        "/assets/projects/portfolio1.png",
        "/assets/projects/portfolio2.png",
        "/assets/projects/portfolio3.gif"
      ],
      githubUrl: "https://github.com/...",
      deployUrl: "https://...",
    },
    // 감정 일기장
    // 당근마켓 클론코딩
    // 크레이지 아카이브 (바닐라JS 투두)
    // 카카오톡 클론코딩
  ]
};