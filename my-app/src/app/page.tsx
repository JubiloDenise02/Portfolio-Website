import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <HomeSection />
        <AboutSection/>
        <Skills />
        <div id="projects" className="min-h-screen py-20"> Projects </div>
        <div id="contact" className="min-h-screen py-20"> Contact </div>
      </main>
    </>
  )
};

export default Home;
