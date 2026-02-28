import HomeSection from "./components/HomeSection";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <HomeSection />
        <WorkExperience />
        <Skills />
        <div id="projects" className="min-h-screen py-20"> Projects </div>
        <div id="contact" className="min-h-screen py-20"> Contact </div>
      </main>
    </>
  )
};

export default Home;
