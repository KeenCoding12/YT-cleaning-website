"use client";
import { gsap, useGSAP } from "@/lib/gsap";
import Image from "next/image";
import React, { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
 
  return (
    <footer ref={footerRef} className="py-16">
      <div className="container grid gap-7 lg:grid-cols-2 relative">
       
      </div>
    </footer>
  );
}
