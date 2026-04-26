"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { testiItems } from "@/data/data";
import Image from "next/image";
import { useRef } from "react";

export default function Testimonials() {
  const testiRef = useRef<HTMLElement | null>(null);
  const testiWrapper = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".testi-card");
      gsap.from(cards, {
        scale: 0.7,
        ease: "elastic.out(1,0.8)",
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
          trigger: testiWrapper.current,
          start: "top center",
          // markers: true,
        },
      });
      gsap.from(".testi-sec-img", {
        scale: 0.7,
        rotate: "12deg",
        ease: "bounce.out",
        duration: 1,
        scrollTrigger: {
          trigger: testiWrapper.current,
          start: "top center",
          // markers: true,
        },
      });
    },
    { scope: testiRef },
  );
  return (
    <section ref={testiRef} className="py-24">
      <div className="container">
        {/* Wrapper */}
        <div
          className="bg-secClr cust-border shadow rounded-4xl p-5 sm:p-8 lg:p-12 grid gap-16 lg:gap-18 lg:grid-cols-2 relative"
          ref={testiWrapper}
        >
          {/* content */}
          <div className="max-w-117.5 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold testi-title text-black/75">
              Hear from our Happy clients
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              repellat recusandae doloremque minima fuga quaerat aliquam a porro
              cumque, dolores ab eligendi excepturi facilis consequuntur harum
              accusamus saepe neque officiis?
            </p>
          </div>
          {/* Cards */}
          <div className="space-y-8">
            {testiItems.map((item) => (
              // Card
              <div
                className="bg-cardClr-3 py-8 pr-8 flex flex-col lg:flex-row items-center gap-6 card testi-card"
                key={item.id}
              >
                {/* Icon */}
                <div className="-mt-20  lg:-ml-16 shrink-0">
                  <img src={item.icon} alt={item.author} />
                </div>
                {/* content */}
                <div className="text-black/75 px-6 space-y-2">
                  <p>{item.text}</p>
                  <p className="font-bold text-2xl">{item.author}</p>
                </div>
              </div>
            ))}
          </div>
          {/* section img */}
          <Image
            src="/images/testimonials-sec-img.svg"
            alt="section image"
            width={712}
            height={608}
            className="absolute bottom-8 -left-4 testi-sec-img  origin-bottom-right hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
