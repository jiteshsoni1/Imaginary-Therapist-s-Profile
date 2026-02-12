import Navbar from "@/landingpage/navbar";
import Hero from "@/landingpage/hero";
import Services from "@/landingpage/services";
import About from "@/landingpage/about";
import Faq from "@/landingpage/faq";
import Office from "@/landingpage/office";
import Contact from "@/landingpage/contact";
import Footer from "@/landingpage/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Faq />
      <Office />
      <Contact />
      <Footer />
    </>
  );
}
