import { linkIcons } from "./linkIcons.js"
import { projectImages } from "./projectImages.js";

export const projectsData = {
  // 포함 정보
  // name, description, techStack, devPeriod, contributions, images, links, isMainProject
  // teamSize, role의 경우 teamProjects에만 있는 속성값
  teamProjects: [
    {
      name: "KIKI_MOVIE",
      description: "영화 추천 및 리뷰 커뮤니티 서비스",
      techStack: ["Django", "Vue"],
      teamSize: 2,
      devPeriod: "2024.11.18 - 2024.11.30",
      role: "풀스택 개발 담당",
      contributions: [
        "회원가입, 로그인 기능 및 영화 상세 & 리뷰 상세 기능 풀스택 구현",
        "룰렛 영화 추천 기능 내 키워드 기반 유해 콘텐츠 필터링 기능 구현",
        "Teachable Machine을 활용한 닮은꼴 배우의 필모 추천 기능 풀스택 구현"
      ],
      images: projectImages.KIKI_MOVIE,
      links: [
        {
          type: "github",
          url: "https://github.com/heeeeeeeeeee1/KIKI_MOVIE",
          icon: linkIcons.github
        },
        {
          type: "figma",
          url: "https://www.figma.com/design/JZWRe5OsG32LvTSMkZh3ZQ/%EC%9A%B0%EB%8B%B9%ED%83%95%ED%83%95-%EB%B0%94%ED%82%A4%EB%B0%8D%ED%82%A4%EA%B0%80-%EC%98%81%ED%99%94-%EC%B6%94%EC%B2%9C%ED%95%A8?node-id=10-11&t=rTSpmYsjmowubuln-0",
          icon: linkIcons.figma
        }
      ],
      isMainProject: true
    }
  ],
  toyProjects: [
    {
      name: "자기소개_포트폴리오",
      description: "SSAFY 2학기 팀빌딩을 위한 자기소개 사이트",
      techStack: ["React"],
      devPeriod: "2024.12.24 - 2024.12.30",
      contributions: [
        "프로젝트 기획 및 피그마를 활용한 목업 디자인",
        "React를 활용한 자기소개 포트폴리오 구현",
        "Context를 활용한 개인 정보 및 프로젝트 정보 관리",
      ],
      images: projectImages.PORTFOLIO,
      links: [
        {
          type: "deploy",
          url: "https://minjee-portfolio.vercel.app/",
          icon: linkIcons.deploy
        },
        {
          type: "github",
          url: "https://github.com/minjeeki/Portfolio",
          icon: linkIcons.github
        },
        {
          type: "figma",
          url: "https://www.figma.com/design/LQY7mN1ugKhOFPcDPsbQKZ/Portfolio_github_st?node-id=1-6&t=RmRhSMXrFvFTiUQn-0",
          icon: linkIcons.figma
        }
      ],
      isMainProject: true
    },
    {
      name: "EMOTION_DIARY",
      description: "React 기반 서버리스 서비스 구현 및 배포",
      techStack: ["React"],
      devPeriod: "2024.12.16 - 2024.12.18",
      contributions: [
        "'한입 크기로 잘라 먹는 리액트' 강의 기반 감정 일기장 구현",
        "react-calendar 라이브러리를 활용한 감정 훑어보기 컴포넌트 추가 구현",
        "메인 페이지 이동 시시 splash screen 추가 구현",
      ],
      images: projectImages.EMOTION_DIARY,
      links: [
        {
          type: "github",
          url: "https://github.com/minjeeki/emotionDiary",
          icon: linkIcons.github
        },
        {
          type: "deploy",
          url: "https://emotion-diary-blush-two.vercel.app",
          icon: linkIcons.deploy
        },
      ],
      isMainProject: true
    },
    {
      name: "오픈소스_Continue_기여",
      description: "react, typescript 기반의 AI Code Assistant 프로젝트 내 자동완성 단축키 관련 PR 기여",
      techStack: ["Git", "Github"],
      devPeriod: "2024.10.14 - 2024.10.19",
      contributions: [
        "Continue Visual Studio Code 확장 프로그램 내 자동완성 토글 단축키 설명 추가",
        "Continue 공식 문서 'customize/deep-dives/autocomplete' 페이지 내 vs code 자동완성 토글 단축키 설명 추가",
      ],
      images: projectImages.CONTINUE,
      links: [
        {
          type: "github pull request 1",
          url: "https://github.com/continuedev/continue/pull/2568",
          icon: linkIcons.deploy
        },
        {
          type: "github pull request 2",
          url: "https://github.com/continuedev/continue/pull/2571",
          icon: linkIcons.github
        },
        {
          type: "continue docs",
          url: "https://docs.continue.dev/customize/deep-dives/autocomplete#how-to-turn-off-autocomplete",
          icon: "https://docs.continue.dev/img/logo.png",
        }
      ],
      isMainProject: false
    },
    {
      name: "Crazy_archive",
      description: "Vanilla JS를 활용한 Todo 리스트 구현 및 배포 (노마드코더 챌린지 우수작품 선정)",
      techStack: ["HTML", "CSS", "JavaScript"],
      devPeriod: "2023.06.01 - 2023.06.03",
      contributions: [
        "Figma를 활용한 서비스 디자인",
        "Weather API를 활용한 현 위치 기반 날씨 정보 제공 기능 구현",
        "웹 스토리지를 활용한 Todo 리스트 구현",
      ],
      images: projectImages.CRAZY_ARCHIVE,
      links: [
        {
          type: "github",
          url: "https://github.com/nninzy/crazy_archive/",
          icon: linkIcons.github
        },
        {
          type: "deploy",
          url: "https://nninzy.github.io/crazy_archive/",
          icon: linkIcons.deploy
        },
        {
          type: "figma",
          url: "https://www.figma.com/design/xzjZAhSe5vITcYCrn0fWsf/Crazy-Archive?node-id=0-1&p=f&t=Q7dB3icuI06HXdqi-0",
          icon: linkIcons.figma
        }
      ],
      isMainProject: true
    },
    {
      name: "당근마켓_클론코딩",
      description: "당근마켓 사이트 내 퍼블리싱 작업을 분석하며 구현 및 토의",
      techStack: ["HTML", "CSS", "JavaScript"],
      devPeriod: "2023.03.12 - 2023.05.23",
      contributions: [
        "프론트엔드 스터디를 통한 스터디원들과의 사이트 내 구성 요소 분석",
        "reset.css와 css variable을 활용한 스타일 통일화 및 유지보수 용이성 향상",
        "메인, 카테고리, 제품 상세 등 주요 페이지 구현"
      ],
      images: projectImages.DAANGN,
      links: [
        {
          type: "github",
          url: "https://github.com/nninzy/daangn-clone/",
          icon: linkIcons.github
        },
        {
          type: "deploy",
          url: "https://nninzy.github.io/daangn-clone/",
          icon: linkIcons.deploy
        }
      ],
      isMainProject: true
    },
  ]
};