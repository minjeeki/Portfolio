import { useState, useEffect } from "react";
import "../styles/ProfileImage.css";
import { useUser } from '../App';

const emotions = [
  { id: 'fighting', emoji: '💪', label: 'ENFJ ~ ESTJ' },
  { id: 'supporter', emoji: '🤝', label: '팀 내 서포터 주로 담당' },
  { id: 'record', emoji: '📑', label: '기록을 잘해요' },
  { id: 'study', emoji: '👯‍♀️', label: 'UX에 관심이 많아요' },
  { id: 'idea', emoji: '👊', label: '새로운 건 늘 짜릿하죠' },
  { id: 'growth', emoji: '🌱', label: '성장하고 싶어요' },
];

const ProfileImage = ({size = 'sm', showEmotionIcon = false, className = ''}) => {
  const { user } = useUser();
  const [showEmotionPicker, setShowEmotionPicker] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState(() => {
    const savedEmotion = localStorage.getItem('selectedEmotion');
    return savedEmotion ? JSON.parse(savedEmotion) : emotions[0];
  });

  useEffect(() => {
    localStorage.setItem('selectedEmotion', JSON.stringify(selectedEmotion));
  }, [selectedEmotion]);

  const handleEmotionClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    setShowEmotionPicker(!showEmotionPicker);
  };

  const handleEmotionSelect = (emotion) => {
    setSelectedEmotion(emotion);
    setShowEmotionPicker(false);
  };
  
  // 피커 외부 클릭 시 닫기
  const handleClickOutside = (e) => {
    setShowEmotionPicker(false);
  };
  
  return (
    <div className={`profile-image-wrapper ${size} ${className}`}>
      <div className="profile-image">
        <img 
          src={user.photo}
          alt="Profile" 
          className="profile-img"
        />
      </div>
      
      {showEmotionIcon && (
        <div className="emotion-container">
          <button 
            className="emotion-icon"
            onClick={handleEmotionClick}
            aria-label="감정 선택하기"
          >
            <div className="emotion-circle">
              <span className="emotion-emoji">{selectedEmotion.emoji}</span>
            </div>
          </button>

          {showEmotionPicker && (
            <>
              <div className="emotion-overlay" onClick={handleClickOutside} />
              <div className="emotion-picker">
                {emotions.map((emotion) => (
                  <button
                    key={emotion.id}
                    className={`emotion-option ${selectedEmotion.id === emotion.id ? 'selected' : ''}`}
                    onClick={() => handleEmotionSelect(emotion)}
                    title={emotion.label}
                  >
                    <span className="emotion-emoji">{emotion.emoji}</span>
                    <span className="emotion-label">{emotion.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileImage;