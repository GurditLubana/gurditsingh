
import Certificates from "./components/Certifications";
import ContactMe from "./components/ContactMe";
import CustomCursor from "./components/CustomCursor";
import Education from "./components/Education";
import Experience from "./components/Experience";
import LandingPage from "./components/LandingPage";
import Navigationbar from "./components/Navigationbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="min-h-screen">
      <CustomCursor/>
      <Navigationbar/>
      <LandingPage/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <Certificates/>
      <ContactMe/>

    </main>
  );
}
