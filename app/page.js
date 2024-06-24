import Image from "next/image";
import { Button } from "@/components/ui/button"
import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";
import Review from "./_components/Review";
import Footer from "./_components/Footer";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Review />
      <Footer />
    </div>
  );
}
