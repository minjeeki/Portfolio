import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { useUser, useProject, useTheme } from '../App';
import ProfileImage from './ProfileImage';
import EmailForm from './EmailForm';

import "../styles/Header.css";

import menuIcon from "../assets/icons/menu.png"
import my_portfolio_logo from "../assets/favicon.png"
import emailIcon from "../assets/icons/email.png"
import bookIcon from "../assets/icons/book.png"
import dictionaryIcon from "../assets/icons/dictionary.png"
import scheduleIcon from "../assets/icons/schedule.png"
import cubeIcon from "../assets/icons/cube.png"
import starIcon from "../assets/icons/star.png"


const Header = () => {
  const { user } = useUser();
  const { projects } = useProject();
  const { theme, toggleTheme } = useTheme();

  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <button 
            className="menu-button icon-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={menuIcon} alt="메뉴" />
          </button>
          <NavLink to="/" className="logo-link">
            <img src={my_portfolio_logo} alt="로고" />
          </NavLink>
          <span className="user-name">{user.name}</span>
        </div>
        <div className="header-right">
          <button 
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            title="테마 전환"
            >
            {theme === 'dark' ? '🌤️' : '🌙'}
          </button>
          <button 
            className="icon-button email-button"
            onClick={() => setIsEmailFormOpen(true)}
            title="이메일 보내기"
          >
            <img src={emailIcon} alt="이메일" className="icon-image" />
          </button>
          <ProfileImage size="sm" />
        </div>
      </div>
      <nav className={`header-bottom ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-link">
              <img src={bookIcon} /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/team-projects" className="nav-link">
              <img src={dictionaryIcon} /> Projects
              <span className="project-count">{projects.teamProjects.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/toy-projects" className="nav-link">
              <img src={scheduleIcon} /> Toy Projects
              <span className="project-count">{projects.toyProjects.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/components" className="nav-link">
              <img src={cubeIcon} /> Components
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me" className="nav-link">
              <img src={starIcon} />About me
            </NavLink>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
      
      <EmailForm 
        isOpen={isEmailFormOpen} 
        onClose={() => setIsEmailFormOpen(false)} 
      />
    </header>
  );
};

export default Header;