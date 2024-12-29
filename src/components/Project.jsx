import { useState } from "react";
import "./../styles/Project.css";

const Project = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, devPeriod, description, techStack, contributions, images, links } =
    project;

  return (
    <article
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-base">
        <div className="header-info">
          <h3 className="project-name">{name}</h3>
          <span className="project-period">{devPeriod}</span>
        </div>

        <p className="project-description">{description}</p>

        <div className="project-images">
          {images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${name} 프로젝트 이미지`}
              className="project-preview"
            />
          ))}
        </div>

        <div className="skill-stack">
          {techStack.map((skill, index) => (
            <span key={index} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {isHovered && (
        <div className="hover-overlay">
          <div className="hover-content">
            <div className="header-info">
              <h3 className="project-name">{name}</h3>
              <span className="project-period">{devPeriod}</span>
            </div>

            <p className="project-description">{description}</p>

            <div className="contributions-section">
              <h4>주요 기여</h4>
              <ul className="contributions-list">
                {contributions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tech-links-row">
              <div className="skill-stack">
                {techStack.map((skill, index) => (
                  <span key={index} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item"
                  >
                    <img src={link.icon} alt={link.type} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Project;
