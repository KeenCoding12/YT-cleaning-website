"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import Button from "./Button";
import { tagsItems } from "@/data/data";
import { useRef } from "react";

export default function Services() {
  const servicesRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={servicesRef}>
      <div className="container">
       
      </div>
    </section>
  );
}
