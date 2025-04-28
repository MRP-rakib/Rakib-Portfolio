
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Projects/>
      <Resume/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
