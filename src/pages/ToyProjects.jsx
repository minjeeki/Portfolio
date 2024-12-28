import Header from "../components/Header";
import Profile from "../components/Profile";
import Project from "../components/Project"
import Footer from "../components/Footer";
import { useProject } from '../App';

const TeamProjects = () => {
  const { projects } = useProject();
  
  return (
    <>
      <Header />
      <main>
        <Profile />
        <div className="projects-grid">
          {projects.toyProjects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TeamProjects;