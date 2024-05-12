
import LandingPage from "./components/LandingPage";
import Navigationbar from "./components/Navigationbar";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="min-h-screen">
      <Navigationbar/>
      <LandingPage/>
    </main>
  );
}
