// components/Project.jsx
import { useState } from 'react';
import './../styles/Project.css';

const Project = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, skills, description, role, images, githubUrl, deployUrl, notionUrl } = project;

  return (
    <article 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 상단 기본 정보 */}
      <div className="main-info">
        <h3 className="project-name">{name}</h3>
        <div className="skill-stack">
          {skills.map((skill, index) => (
            <span key={index} className="skill-item">{skill}</span>
          ))}
        </div>
      </div>

      {/* 하단 상세 정보 - hover에 따라 다른 내용 표시 */}
      <div className="desc-info">
        {!isHovered ? (
          <>
            <p className="project-description">{description}</p>
            <div className="project-images">
              {images.slice(0, 1).map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${name} 프로젝트 이미지`}
                  className="project-preview"
                />
              ))}
            </div>
          </>
        ) : (
          <div className="hover-content">
            <div className="role-info">
              <h4>담당 역할</h4>
              <ul>
                {role.split(',').map((item, index) => (
                  <li key={index}>{item.trim()}</li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="link-item">
                  <img src="/assets/icons/github-icon.png" alt="GitHub" />
                </a>
              )}
              {deployUrl && (
                <a href={deployUrl} target="_blank" rel="noopener noreferrer" className="link-item">
                  <img src="/assets/icons/deploy-icon.png" alt="배포 링크" />
                </a>
              )}
              {notionUrl && (
                <a href={notionUrl} target="_blank" rel="noopener noreferrer" className="link-item">
                  <img src="/assets/icons/notion-icon.png" alt="Notion" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default Project;