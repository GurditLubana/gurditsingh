
import Experience from "./components/Experience";
import LandingPage from "./components/LandingPage";
import Navigationbar from "./components/Navigationbar";
import Skills from "./components/Skills";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="min-h-screen">
      <Navigationbar/>
      <LandingPage/>
      <Skills/>
      <Experience/>

    </main>
  );
}
