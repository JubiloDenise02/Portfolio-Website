import HomeSection from "./components/HomeSection";
import WorkExperience from "./components/WorkExperience";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <HomeSection />
        <WorkExperience />
        <div id="skills" className="min-h-screen py-20"> Skills </div>
        <div id="projects" className="min-h-screen py-20"> Projects </div>
        <div id="contact" className="min-h-screen py-20"> Contact </div>
      </main>
    </>
  )
};

export default Home;
