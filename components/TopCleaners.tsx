"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import Button from "./Button";
import { cleaners } from "@/data/data";
import Image from "next/image";
import { useRef } from "react";

export default function TopCleaners() {
  const cleanersRef = useRef<HTMLElement | null>(null);
  return (
    <section ref={cleanersRef}>
      <div className="container">
      </div>
    </section>
  );
}
