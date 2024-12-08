import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import BestOfAirsection from "@/components/Bestofairsection";
import GearUpSection from "@/components/Gearup";
import Dontmiss from "@/components/Dontmiss";
import EssentialsSection from "@/components/Essential";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Herosection/>
      <BestOfAirsection/>
      <GearUpSection/>
      <Dontmiss/>
      


      <Footer/>
    </div>
  );
}
