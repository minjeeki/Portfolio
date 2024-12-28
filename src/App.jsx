import './App.css'
import { createContext, useContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import defaultProfileImg from './assets/profile-img.jpg';
import { projectsData } from './data/projects';

import Overview from "./pages/Overview";
import TeamProjects from "./pages/TeamProjects";
import ToyProjects from "./pages/ToyProjects";
import Components from "./pages/Components";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";

export const UserContext = createContext();
export const ProjectContext = createContext();

export const useUser = () => useContext(UserContext);
export const useProject = () => useContext(ProjectContext);

function App() {
  const [user, setUser] = useState({
    name: '김민지',
    profileImage: defaultProfileImg
  });

  const [projects, setProjects] = useState(projectsData);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <ProjectContext.Provider value={{ projects, setProjects }}>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/team-projects" element={<TeamProjects />} />
            <Route path="/toy-projects" element={<ToyProjects />} />
            <Route path="/components" element={<Components />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProjectContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
