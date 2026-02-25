import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeelingsSection from "@/components/FeelingsSection";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeelingsSection />
      <Experience />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <BottomCTA />
      <Footer />
    </>
  );
}