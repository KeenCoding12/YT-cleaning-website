"use client";
import { gsap, useGSAP } from "@/lib/gsap";
import Image from "next/image";
import React, { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLDivElement>(".footer-card");
    gsap.from(cards, {
      scale: 0.7,
      ease: "elastic.out(1,0.8)",
      stagger: 0.3,
      duration: 0.7,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top center",
        // markers: true,
      },
    });
  });
  return (
    <footer ref={footerRef} className="py-16">
      <div className="container grid gap-7 lg:grid-cols-2 relative">
        {/* content */}
        <div className="space-y-5 relative flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image src="/images/logo.svg" alt="logo" width={94} height={94} />
            <p className="text-3xl font-bold">Shyniq</p>
          </div>

          {/* text */}
          <div className="space-y-4">
            <h3 className="font-bold text-3xl lg:text-4xl">
              Ready to Assist you
            </h3>
            <p className="max-w-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              rem suscipit quos animi cupiditate?
            </p>
          </div>
          {/* Img */}
          <div className="max-w-max mx-8 lg:mx-18">
            <Image
              src="/images/footer-img-1.png"
              alt="footer img"
              width={375}
              height={530}
            />
          </div>
          <p className="mt-auto px-4 sm:px-7">
            &copy; {new Date().getFullYear()} code by Keencoding
          </p>

          {/* bg clr */}
          <div className="bg-footerClr h-1/4 absolute bottom-0 right-0 w-full -z-10 rounded-4xl" />
        </div>
        {/* Img */}
        <div className="max-w-max">
          <Image
            src="/images/footer-img-2.png"
            alt="footer image"
            width={797}
            height={1024}
          />
        </div>
        {/* Cards */}
        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-1/2 max-w-120 w-full space-y-6">
          {/* Card */}
          <div className="card px-10 py-7 space-y-3 bg-background footer-card">
            <p className="uppercase text-xl">Email</p>
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="shrink-0">
                <img src="/images/footer-icon-1.svg" alt="footer icon" />
              </div>
              <h4 className="text-2xl font-bold">hello@shyniq.us</h4>
            </div>
          </div>
          {/* Card */}
          <div className="card px-10 py-7 space-y-3 bg-background footer-card">
            <p className="uppercase text-xl">headQuarter</p>
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="shrink-0">
                <img src="/images/footer-icon-2.svg" alt="footer icon" />
              </div>
              <h4 className="text-xl">
                456 Pineapple St, Apt. 202, Brooklyn, NY 11201, USA
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
