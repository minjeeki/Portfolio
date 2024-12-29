import { useState } from 'react';
import '../styles/MainActivities.css';

const MainActivities = ({ activities }) => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 3;

  const getStartDate = (dateStr) => {
    if (dateStr.includes(' - ')) {
      return dateStr.split(' - ')[0];
    }
    return dateStr;
  };

  // 모든 활동을 날짜순으로 정렬
  const sortedActivities = [...activities].sort((a, b) => {
    const dateA = getStartDate(a.date);
    const dateB = getStartDate(b.date);
    return dateB.localeCompare(dateA);
  });

  // 표시할 활동 선택
  const displayedActivities = showAll ? sortedActivities : sortedActivities.slice(0, INITIAL_DISPLAY_COUNT);

  // 선택된 활동들을 년도별로 그룹화
  const groupByYear = displayedActivities.reduce((acc, activity) => {
    const year = getStartDate(activity.date).split('.')[0];
    if (!acc[year]) acc[year] = [];
    acc[year].push(activity);
    return acc;
  }, {});

  return (
    <div className="activities-section">
      <h2 className="activities-title">Activities</h2>
      
      <div className="timeline-container">
        {Object.entries(groupByYear).reverse().map(([year, yearActivities]) => (
          <div key={year} className="year-section">
            <div className="year-marker">
              <span className="year">{year}</span>
            </div>
            
            <div className="activities-list">
              {yearActivities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-date">{activity.date}</div>
                  <div className="activity-content">
                    <h3 className="activity-title">{activity.title}</h3>
                    {activity.descption && (
                      <p className="activity-description">{activity.descption}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activities.length > INITIAL_DISPLAY_COUNT && (
        <button 
          className="show-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? '접기' : '더보기'}
        </button>
      )}
    </div>
  );
};

export default MainActivities;