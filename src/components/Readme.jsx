import { useUser } from '../App';
import "./../styles/Readme.css";

const Readme = () => {
  const { user } = useUser();

  return (
    <div className="readme-container">
      <div className="readme-file-name">{user.name}/README.md</div>
      <div className="readme-content">
        <p className="readme-paragraph">
          안녕하세요. 함께 자라고 싶은 개발자 <u>김민지</u>입니다. 👋
        </p>

        <p className="readme-paragraph">
          2학기 공통 프로젝트에서 <u>트랙 우관 / 프론트엔드</u>를 희망합니다. 하지만 백엔드도 기회가 된다면 배우고 싶습니다.
          
          💻 이번 프로젝트를 통해 <u>프론트엔드에 대해 깊게 생각해보고, 성공적인 프로젝트를 만들고 싶습니다</u>. 🎯
        </p>

        <p className="readme-paragraph">
          프론트엔드 개발을 할 때는 사용자 관점에서 고민하는 편이며, 접근이 편리한 서비스를 만드는데 관심이 많습니다.
        </p>

        <p className="readme-paragraph">
          이번 자기 소개를 통해 팀 빌딩 뿐만 아니라 <u>프론트엔드를 희망하는 분들과도 교류</u>하고 싶습니다. 
          친해지신 분과 <u>함께 고민하고 소통할 수 있는 팀</u>을 원하며, 저 역시 함께 긍금해하고 도와줄 수 있는 팀원이 되고 싶습니다. 🤝
        </p>

        <p className="readme-paragraph">
          팀 내에서는 주로 원활한 의사 소통을 위해 <u>노션을통한 회의 내용 기록 및 팀 서포트 역할</u>을 해왔습니다. 📝
        </p>

        <p className="readme-paragraph">
          열정적인 분들과 함께 성장하고 싶습니다! 남은 학기 잘 부탁드려요! ✨
        </p>
      </div>
    </div>
  )
}

export default Readme;