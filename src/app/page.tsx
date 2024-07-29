import About from "@/components/About";
import Cashtag from "@/components/Cashtag";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Rules from "@/components/Rules";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Cashtag />
      <Rules />
      <Gallery />
      <Contact />
    </main>
  );
}
