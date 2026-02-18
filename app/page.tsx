import Topbar from "../components/ui/Topbar";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Branches from "../components/sections/Branches";
import Contact from "../components/sections/Contact";
import About from "../components/sections/About";




export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Topbar />
      <Header />

      <Hero />
      <About />
      <Services />
      <Branches />
      <Contact />

      <Footer />
    </main>
  );
}
