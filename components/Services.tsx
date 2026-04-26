"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import Button from "./Button";
import { tagsItems } from "@/data/data";
import { useRef } from "react";

export default function Services() {
  const servicesRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const titleSplit = SplitText.create(".services-title", {
        type: "chars,lines",
        mask: "chars",
        linesClass: "text-line",
      });
      const textSplit = SplitText.create(".services-text", {
        type: "chars,lines",
        mask: "chars",
        linesClass: "text-line",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top center",
          // markers: true,
        },
      });

      tl.from(titleSplit.chars, {
        xPercent: -150,
        duration: 0.6,
        stagger: 0.03,
        ease: "power2.inOut",
      }).from(textSplit.chars, {
        xPercent: -150,
        duration: 0.7,
        stagger: 0.01,
        ease: "power2.inOut",
      });
    },
    { scope: servicesRef },
  );
  return (
    <section ref={servicesRef}>
      <div className="container">
        {/* Title */}
        <div className="flex flex-col gap-9 lg:flex-row lg:justify-between lg:items-center">
          <div>
            <h2 className="section-title services-title">
              Discover All Services
            </h2>
            <p className="services-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis ut voluptatum dolorum.
            </p>
          </div>
          <Button label="Explore all" />
        </div>
        {/* Tags */}
        <div className="flex items-center flex-wrap gap-6 justify-center my-14">
          {tagsItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-1 border-3 rounded-lg gap-2 px-8 btn"
            >
              {/* icon */}
              <span className="shrink-0">
                <img src={item.icon} alt={item.label} />
              </span>
              {/* Label */}
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
