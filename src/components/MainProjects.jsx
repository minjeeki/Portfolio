import { useMemo } from 'react';
import MainProject from './MainProject';
import "../styles/MainProjects.css"

const MainProjects = ({ projects }) => {
  // teamProjects와 toyProjects를 합치고 isMainProject가 true인 것만 필터링
  const mainProjects = useMemo(() => {
    const allProjects = [...projects.teamProjects, ...projects.toyProjects];
    return allProjects.filter(project => project.isMainProject);
  }, [projects]);

  // 랜덤하게 4개 선택
  const selectedProjects = useMemo(() => {
    const shuffled = [...mainProjects].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [mainProjects]);

  return (
    <div className="main-projects-section">
      <h2 className="main-projects-title">Popular Projects</h2>
      <div className="main-projects-grid">
        {selectedProjects.map((project, index) => (
          <MainProject key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MainProjects;