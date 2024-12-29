import profileImg from '../assets/profile-img.jpg';
import htmlIcon from '../assets/skills/html.png';
import cssIcon from '../assets/skills/css.png';
import javascriptIcon from '../assets/skills/javascript.png';
import reactIcon from '../assets/skills/react.png';
import vueIcon from '../assets/skills/vue.png';
import pythonIcon from '../assets/skills/python.png';
import djangoIcon from '../assets/skills/django.png';
import { linkIcons } from "./linkIcons.js";

export const profileData = {
  name: "김민지",
  photo: profileImg,
  position: "Frontend Developer",
  skills: [
    {
      name: "html",
      icon: htmlIcon
    },
    {
      name: "css",
      icon: cssIcon
    },
    {
      name: "javascript",
      icon: javascriptIcon
    },
    {
      name: "react",
      icon: reactIcon
    },
    {
      name: "vue",
      icon: vueIcon
    },
    {
      name: "python",
      icon: pythonIcon

    },
    {
      name: "django",
      icon: djangoIcon
    },
  ],
  links: [
    {
      type: "github",
      url: "https://github.com/minjeeki",
      icon: linkIcons.github
    },
    {
      type: "velog",
      url: "https://velog.io/@minjeeki/posts",
      icon: linkIcons.velog
    },
  ],
  activities : [
    {
      title: "42seoul 10기",
      type: "education",
      descption: "C언어, UNIX 기반 학습",
      date: "2023.07 - 2024.06"
    },
    {
      title: "삼성 청년 SW 아카데미 12기",
      type: "education",
      descption: "웹 개발 관련 학습",
      date: "2024.07 - 2025.05",
    },
    {
      title: "SQLD",
      type: "qualification",
      descption: "SQL 개발자 자격증 취득",
      date: "2024.09.20"
    },
    {
      title: "2024 오픈소스 컨트리뷰션 아카데미 (체험형)",
      type: "education",
      descption: "오픈소스 기여 관련 멘토링 및 네트워킹, Code LLM 학습",
      date: "2024.09.09 - 2024.10.25",
    },
    {
      title: "오픈소스 'Continue' Pull Request 2건 기여",
      type: "contribution",
      descption: "AI Code Assistant 'Continue' 자동완성 단축키 관련 기여",
      date: "2024.10.19",
    },
    {
      title: "삼성 SW 역량 테스트 A+ 등급 취득",
      type: "qualification",
      descption: "알고리즘 역량을 평가하는 SW 역량 테스트에서 A+ 등급 취득",
      date: "2024.11.18",
    },
    {
      title: "삼성 청년 SW 아카데미 12기 1학기 성적 우수(2등) 수상",
      type: "qualification",
      descption: "삼성 청년 SW 아카데미 12기 1학기 성적 우수(2등) 수상",
      date: "2024.11.28"
    },
    {
      title: "SSAFY 2학기 프로젝트를 함께 할 팀원 기다리는 중",
      type: "education",
      description: "",
      date: "2025.01"
    }
  ]
};