import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FlotingNav";
import Project from "@/components/Project";
import Me from "@/components/me";
import Approach from "@/components/Approach";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className=" max-w-7xl w-full px-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Me />
        <Project />
        <Approach />
        <Footer />

      </div>
    </main>
  );
}
