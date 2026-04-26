"use client";
import { navItems } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { RiCloseLine, RiMenu4Line } from "@remixicon/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 w-full mt-8 bg-transparent backdrop-blur-xl py-2 z-50">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-4 size-18">
          <Image src="/images/logo.svg" alt="logo" width={94} height={94} />
          <p className="text-3xl font-bold">Shyniq</p>
        </Link>

        {/* Mobile menu */}
        <nav
          className={`lg:hidden absolute top-full left-0 bg-white backdrop-blur-3xl h-0 overflow-y-hidden w-full ${isOpen && "h-auto"}`}
        >
          {/* wrapper */}
          <div className="py-10 px-8 space-y-4">
            {/* list */}
            <ul className="space-y-1.5 text-xl focus:text-secondary">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="font-bold hover:text-primary transition-colors focus:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Button label="Try Us Today" />
          </div>
        </nav>
        {/* Menu btn */}
        <button
          className="btn lg:hidden size-10 bg-secondary flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLine /> : <RiMenu4Line />}
        </button>
        {/* Lg menu */}
        <nav className="hidden lg:flex items-center flex-1">
          {/* list */}
          <ul className="flex items-center mx-auto gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="font-bold text-lg hover:text-primary transition-colors focus:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button label="Try Us Today" />
        </nav>
      </div>
    </header>
  );
}
