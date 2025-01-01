import { useUser } from '../App';
import "./../styles/Readme.css";

const Readme = () => {
  const { user } = useUser();

  return (
    <div className="readme-container">
      <div className="readme-file-name">{user.name}/README.md</div>
      <div className="readme-content">
        {user.introduce && user.introduce.map((sentence) => (
          <div key={sentence} className="readme-sentence">{sentence}</div>
        ))}
      </div>
    </div>
  )
}

export default Readme;