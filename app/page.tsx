import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Philosophy from "@/components/sections/Philosophy";
import ChooseYourPath from "@/components/sections/ChooseYourPath";
import MeetJenn from "@/components/sections/MeetJenn";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

     <main className="pt-20">
  <Hero />
  <Philosophy />
  <ChooseYourPath />
  <MeetJenn />
</main>
    </>
  );
}