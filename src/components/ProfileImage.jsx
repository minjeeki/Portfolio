// ProfileImage.jsx
import "../styles/ProfileImage.css";
import { useUser } from '../App';

const ProfileImage = ({size = 'sm', showEmotionIcon = false, className = ''}) => {
  const { user } = useUser();
  
  return (
    <div className={`profile-image-wrapper ${size} ${className}`}>
      <div className="profile-image">
        <img 
          src={user.profileImage}
          alt="Profile" 
          className="profile-img"
        />
      </div>
      
      {showEmotionIcon && (
        <div className="emotion-icon">
          <div className="emotion-circle">
            {/* emotion 아이콘 또는 이미지 */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;