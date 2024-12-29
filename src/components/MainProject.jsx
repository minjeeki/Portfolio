import { useState } from "react";

const MainProject = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, description, techStack, devPeriod, links } = project;

  return (
    <article 
      className="main-project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="main-project-base">
        <h3 className="main-project-name">{name}</h3>
        <p className="main-project-description">{description}</p>
        <div className="main-project-tech">
          {techStack.map((tech, index) => (
            <span key={index} className="main-tech-item">{tech}</span>
          ))}
        </div>
        <span className="main-project-period">{devPeriod}</span>
      </div>

      {isHovered && (
        <div className="main-hover-overlay">
          <div className="main-project-links">
            {links?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="main-link-item"
              >
                <img src={link.icon} alt={link.type} />
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default MainProject;