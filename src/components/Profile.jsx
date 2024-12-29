import ProfileImage from "./ProfileImage";
import { useUser } from '../App';
import './../styles/Profile.css';

const Profile = () => {
  const { user } = useUser();

  return (
    <section className="profile-section">
      <div className="profile-img-section">
        <ProfileImage size="lg" showEmotionIcon={true} />
      </div>

      <div className="profile-content">
        <div className="profile-info">
          <h3 className="profile-name">{user.name}</h3>
          <div className="profile-motto">함께 성장하고 싶은 개발자</div>
        </div>

        <div className="profile-divider"></div>

        <div className="profile-position">
          <h4>Position</h4>
          <div className="position-text">{user.position}</div>
        </div>

        <div className="profile-divider"></div>

        <div className="profile-skills">
          <h4>Skills</h4>
          <div className="skills-list">
            {user.skills && user.skills.map((skill) => (
              <div key={skill.name} className="skill-badge">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="skill-icon"
                  title={skill.name}
                />
              </div>
            ))}
            <div className="skill-more" title="다음은?">...</div>
          </div>
        </div>

        <div className="profile-divider"></div>

        <div className="profile-links">
          <h4>More about me</h4>
          <div className="social-links">
            {user.links && user.links.map((link) => (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img 
                  src={link.icon}
                  alt={link.type}
                  className="social-icon"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;