import profileImg from '../assets/profile-img.jpg';
import htmlIcon from '../assets/skills/html.png';
import cssIcon from '../assets/skills/css.png';
import javascriptIcon from '../assets/skills/javascript.png';
import reactIcon from '../assets/skills/react.png';
import vueIcon from '../assets/skills/vue.png';
import pythonIcon from '../assets/skills/python.png';
import djangoIcon from '../assets/skills/django.png';
import cLangIcon from '../assets/skills/c_language.png';

import { linkIcons } from "./linkIcons.js";

export const profileData = {
  name: "김민지",
  photo: profileImg,
  email: "hbmj1017@naver.com",
  birth: "1996.10.17",
  position: "Frontend Developer",
  slogan: "함께 성장하는 개발자",
  keywords: [
    "열정적인", "소통을 잘하는", "책임감 있는", "분석적인", "사용자 경험을 중시하는", "목표 지향적인", "협업 지향적인",
    "정리를 잘하는", "기록을 잘하는"
  ],
  introduce : [
    "👋안녕하세요👋",
    `사용자와의 상호작용에서 즐거움을 느끼는 개발자 김민지입니다.`,
    "🎯사용자 관점에서 고민하며, 사용자 경험을 개선하는 것🎯에 관심이 많습니다.",
    "💻새로운 지식을 습득하면 어떻게 활용할지 고민하며 즐거워하고요💻",
    "팀 프로젝트에서는 🤝소통과 협업🤝을 중요시하며, 개발 과정에서 발생하는 문제를 해결하기 위해 적극적으로 참여합니다.",
    "또한 📝정리와 기록📝을 중요하게 생각하며, 이를 통해 지식을 체계적으로 정리하고 성장하는 데 도움을 얻고 있습니다.",
    "팀에서는 노션을 통한 프로젝트 기록 관리 및 원활한 의사 소통을 위한 서포터 역할을 해왔습니다.",
    "평소에는 영화 보는 것을 좋아하고, 반려견과 함께 여가 시간을 보내곤 합니다.",
    "사람들의 삶에 도움이 되는 데이터를 효과적이고 쉽게 전달해줄 수 있는 서비스를 개발하는 개발자가 되고 싶습니다.",
    "✨잘 부탁드립니다✨"
  ],
  language_qualification: [
    {
      name: "TOEIC 775점",
      date: "2024.08.25",
      organization: "한국 TOEIC 위원회",
      is_main: true,
    },
    {
      name: "OPIC IM3",
      date: "2024.09.14",
      organization: "ACTFL",
      is_main: true,
    },
  ],
  qualification: [
    {
      name: "PCCE Lv3 파이썬",
      date: "2023.02.19",
      organization: "주식회사 그렙",
      is_main: true,
    },
    {
      name: "SQLD",
      date: "2024.09.20",
      organization: "한국데이터산업진흥원",
      is_main: true,
    },
    {
      name: "삼성 SW 역량 테스트 A+",
      date: "2024.11.18",
      organization: "삼성전자",
      is_main: true,
    },
    {
      name: "리눅스 마스터 2급 1차",
      date: "2차 준비중",
      organization: "한국정보통신진흥협회",
      is_main: true
    },
    {
      name: "네트워크 관리사 2급 필기",
      date: "실기 준비중",
      organization: "한국정보통신자격협회",
      is_main: true
    }
  ],
  awards: [
    {
      name: "삼성청년 SW아카테미 (SSAFY) 12기 1학기 성적우수",
      date: "2024.11.28",
      organization: "삼성전자",
      is_main: true
    }
  ],
  skills: [
    {
      name: "html",
      icon: htmlIcon,
      level: "중상",
      descption: "시맨틱 태그를 사용해서 웹 접근성을 고려한 마크업 작업을 할 수 있습니다.",
      is_main: false,
    },
    {
      name: "css",
      icon: cssIcon,
      level: "중상",
      descption: "flexbox와 grid를 적절하게 사용할 수 있으며, 반응형 웹 디자인을 구현할 수 있습니다.",
      is_main: false,
    },
    {
      name: "javascript",
      icon: javascriptIcon,
      level: "중상",
      descption: "ES6+ 문법을 사용하여 코드를 작성할 수 있으며, 비동기 처리와 에러 핸들링을 할 수 있습니다.",
      is_main: true,
    },
    {
      name: "react",
      icon: reactIcon,
      level: "중",
      descption: "Context API를 통해 전역 상태 관리를 할 수 있으며, 함수형 컴포넌트와 Hooks를 사용하여 컴포넌트를 작성할 수 있습니다.",
      is_main: true,
    },
    {
      name: "vue",
      icon: vueIcon,
      level: "중",
      descption: "Vue를 이용한 웹 서비스를 개발해본 경험이 있으며, 컴포넌트 기반 개발과 Vuex를 통한 상태 관리를 할 수 있습니다.",
      is_main: true,
    },
    {
      name: "python",
      icon: pythonIcon,
      level: "중상",
      descption: "RESTful API를 설계하고, Django를 사용하여 백엔드 서버를 구축할 수 있습니다.",
      is_main: true,

    },
    {
      name: "django",
      icon: djangoIcon,
      level: "중",
      descption: "Django를 이용한 웹 서비스를 개발해본 경험이 있으며, 데이터베이스 설계와 ORM을 활용한 데이터 관리를 할 수 있습니다.",
      is_main: true,
    },
    {
      name: "C언어",
      icon: cLangIcon,
      level: "중",
      descption: "C 표준 라이브러리를 직접 구현해본 경험이 있으며, 포인터와 동적 메모리 할당을 활용한 프로그래밍을 할 수 있습니다.",
      is_main: true,
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
      title: "세종대학교 생명시스템학부 바이오산업자원공학전공",
      type: "education",
      descption: "생물학, 식물 병리학, 육종학, 생화학 등을 학습",
      date: "2015.03 - 2020.08",
    },
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
  ]
};