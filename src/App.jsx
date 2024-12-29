import './App.css'
import './styles/theme.css'

import { createContext, useContext, useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { projectsData } from './data/projects.js';
import { profileData } from './data/profile.js';

import Overview from "./pages/Overview";
import TeamProjects from "./pages/TeamProjects";
import ToyProjects from "./pages/ToyProjects";
import Components from "./pages/Components";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";

export const UserContext = createContext();
export const ProjectContext = createContext();
export const ThemeContext = createContext();

export const useUser = () => useContext(UserContext);
export const useProject = () => useContext(ProjectContext);
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [user, setUser] = useState(profileData);
  const [projects, setProjects] = useState(projectsData);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider value={{ user, setUser }}>
        <ProjectContext.Provider value={{ projects, setProjects }}>
          <div className="app">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/team-projects" element={<TeamProjects />} />
              <Route path="/toy-projects" element={<ToyProjects />} />
              <Route path="/components" element={<Components />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </ProjectContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App