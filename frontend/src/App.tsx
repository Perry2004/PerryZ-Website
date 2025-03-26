import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main
        className="w-full px-0"
        data-bs-spy="scroll"
        data-bs-target="#nav-bar"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        tabIndex={0}
      >
        <FrontPage />
        <div className="w-full mt-0">
          <AboutMe />
          <Projects />
          <Skills />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
