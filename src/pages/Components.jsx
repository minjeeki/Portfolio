import usePageTitle from "../hooks/usePageTitle";

import Header from "../components/Header";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Component from "../components/Component";

const Components = () => {
  usePageTitle('자기소개 - 컴포넌트')

  return (
    <>
      <Header />
      <main>
        <Profile />
        <Component />
      </main>
      <Footer />
    </>
  )
}

export default Components;