import Header from "../components/Header";
import Profile from "../components/Profile";
import Readme from "../components/Readme";
import MainProjects from "../components/MainProjects";
import ComponentsGrass from "../components/ComponentsGrass";
import MainActivities from "../components/MainActivities";
import Footer from "../components/Footer";

const Overview = () => {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <section>
          <Readme />
          <MainProjects />
          <ComponentsGrass />
          <MainActivities />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Overview;