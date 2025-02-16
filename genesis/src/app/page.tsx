import Image from "next/image";
import { CustomCursor } from "./_components/landingPage/CustomCursor";
import { Background3D } from "./_components/landingPage/Background3D";
import { Header } from "./_components/landingPage/Header";
import { Hero } from "./_components/landingPage/Hero";
import { Features } from "./_components/landingPage/Features";
import { AIShowcase } from "./_components/landingPage/AiShowCase";
import { Testimonials } from "./_components/landingPage/Testimonials";
import { Pricing } from "./_components/landingPage/Pricing";
import { Footer } from "./_components/landingPage/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <CustomCursor />
      <Background3D />
      <div className="relative z-10">
        <Header />
        <main>
          <div className="">
            <Hero />
          </div>
          <section id="features">
            <Features />
          </section>
          <section id="ai-showcase">
            <AIShowcase />
          </section>
          <div className="">
            <Testimonials />
          </div>
          <section id="pricing">
            <Pricing />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
