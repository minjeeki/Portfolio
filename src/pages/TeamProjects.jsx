import Header from "../components/Header";
import Profile from "../components/Profile";
import Project from "../components/Project"
import Footer from "../components/Footer";

import { useProject } from '../App';
import usePageTitle from "../hooks/usePageTitle";

const TeamProjects = () => {
  const { projects } = useProject();
  usePageTitle('자기소개 - 팀 프로젝트')
  
  return (
    <>
      <Header />
      <main>
        <Profile />
        <div>
          {projects.teamProjects.map((project, index) => (
            <Project key={project.id || index} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TeamProjects;