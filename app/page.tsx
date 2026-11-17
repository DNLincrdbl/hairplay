import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Bento from "@/components/Bento";
import WorkSlider from "@/components/WorkSlider";
import Testimonials from "@/components/Testimonials";
import PriceTeaser from "@/components/PriceTeaser";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Bento />
      <WorkSlider />
      <PriceTeaser />
      <Testimonials />
      <Contact />
    </main>
  );
}
