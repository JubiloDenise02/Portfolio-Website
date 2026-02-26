import HomeSection from "./components/HomeSection";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <HomeSection />
        <div id="about" className="min-h-screen py-20"> About </div>
        <div id="projects" className="min-h-screen py-20"> Projects </div>
        <div id="contact" className="min-h-screen py-20"> Contact </div>
      </main>
    </>
  );
};

export default Home;
