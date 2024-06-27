import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";
import Review from "./_components/Review";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Review />
      <Footer />
    </div>
  );
}
