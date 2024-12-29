import usePageTitle from "../hooks/usePageTitle";

import Header from "../components/Header";
import Profile from "../components/Profile";
import Readme from "../components/Readme";
import MainProjects from "../components/MainProjects";
import ComponentsGrass from "../components/ComponentsGrass";
import MainActivities from "../components/MainActivities";
import Footer from "../components/Footer";

import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';

import "./../styles/Overview.css"

const Overview = () => {
  usePageTitle('김민지 자기소개')

  return (
    <>
      <Header />
      <main>
        <Profile />
        <section className="main-content">
          <Readme />
          <MainProjects projects={projectsData} />
          <ComponentsGrass />
          <MainActivities activities={profileData.activities} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Overview;