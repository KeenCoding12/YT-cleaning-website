import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TopCleaners from "@/components/TopCleaners";
import ReactLenis from "lenis/react";

export default function page() {
  return (
    <>
      <ReactLenis root />
      <Hero />
      <Services />
      <TopCleaners />
      <Testimonials />
    </>
  );
}
