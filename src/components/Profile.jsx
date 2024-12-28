import ProfileImage from "./ProfileImage";
import githubIcon from '../assets/github-logo.png';
import velogIcon from '../assets/velog-logo.png';
import { useUser } from '../App';
import './../styles/Profile.css';

const Profile = () => {
  const { user } = useUser();
  const socialLinks = [
    {
      id: 'github',
      url: 'https://github.com/minjeeki',
      icon: githubIcon,
      label: 'GitHub'
    },
    {
      id: 'velog',
      url: 'https://velog.io/@minjeeki/posts',
      icon: velogIcon,
      label: 'Velog'
    }
  ];

  return (
    <section>
      <div className="profile-img-section">
        <ProfileImage size="lg" showEmotionIcon={true} />
      </div>
      <div>
        <h3>{user.name}</h3>
        <div>함께 성장하고 싶은 개발자</div>
      </div>
      <div>
        <h4>Position</h4>
        <div>Front-end Developer</div>
      </div>
      <div>
        <h4>Skills</h4>
        <div>JavaScript, Python, Django, Vue, React ...</div>
      </div>
      <div>
        <h4>More About me</h4>
        <div className="social-links">
          {socialLinks.map(({ id, url, icon, label }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={label}
            >
              <img 
                src={icon} 
                alt={`${label} 링크`} 
                className="social-icon"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Profile;