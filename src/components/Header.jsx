import { NavLink } from 'react-router-dom';
import ProfileImage from './ProfileImage';
import { useUser, useProject } from '../App';
import "../styles/Header.css";

const Header = () => {
  const { user } = useUser();
  const { projects } = useProject();

  return (
    <header className="header">
      {/* 상단부 */}
      <div className="header-top">
        <div className="header-left">
          <button className="menu-button">
            {/* 메뉴 아이콘 */}
          </button>
          <span className="user-name">{user.name}</span>
        </div>
        <div className="header-right">
          <button className="icon-button">
            {/* 채팅 아이콘 */}
          </button>
          <button className="icon-button">
            {/* 메일 아이콘 */}
          </button>
          <ProfileImage size="sm" />
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-link">
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/team-projects" className="nav-link">
              Projects
              <span className="project-count">{projects.teamProjects.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/toy-projects" className="nav-link">
              Toy Projects
              <span className="project-count">{projects.toyProjects.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/components" className="nav-link">
              Components
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me" className="nav-link">
              About me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;