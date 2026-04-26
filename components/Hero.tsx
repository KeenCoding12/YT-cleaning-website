import { tagsItems } from "@/data/data";
import { RiSearchLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container">
        {/* Wrapper */}
        <div className="bg-primary rounded-4xl shadow cust-border grid  gap-10 lg:gap-0  lg:grid-cols-[1fr_0.7fr] xl:grid-cols-2 lg:items-center px-5 sm:px-10 lg:px-18 relative py-20">
          {/* content */}
          <div className="relative z-20">
            {/* Icon */}
            <span className="mb-5 lg:mb-8 inline-block">
              <Image
                src="/images/icon-hero.svg"
                alt="hero icon"
                width={120}
                height={120}
              />
            </span>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl mb-5 lg:mb-6 sm:max-w-177.25 lg:max-w-none text-blackClr">
              Connect with the experts who care for your home
            </h1>
            <p className="max-w-2xl text-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              porro similique error et ipsam.
            </p>

            {/* Wrapper */}
            <div className="mt-8 lg:mt-12 space-y-4 lg:space-y-7">
              {/* search box */}
              <div className="bg-white h-21 rounded-2xl border-3 border-shadow relative">
                <input
                  type="text"
                  className="w-full h-full outline-none pl-4 lg:pl-8 text-lg"
                  placeholder="search for a helper..."
                />
                <button className="bg-secondary size-12 border-3 flex items-center justify-center rounded-xl absolute top-0 right-3 lg:right-6 bottom-0 my-auto text-btnClr hover:bg-primary transition-colors focus:bg-primary">
                  <RiSearchLine />
                </button>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-3 items-center">
                <p className="text-lg">Popular:</p>
                {/* tags */}
                {tagsItems.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center p-1 border-3 rounded-lg gap-2"
                  >
                    {/* Icon */}
                    <span>
                      <img src={item.icon} alt={item.label} />
                    </span>
                    {/* label */}
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Img */}
          <div className="absolute right-0 bottom-0 max-w-1/2 w-full hidden lg:block z-10">
            <Image
              src="/images/hero-img.png"
              alt="hero image"
              width={937}
              height={929}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
