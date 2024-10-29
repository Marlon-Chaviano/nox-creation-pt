import Image from "next/image";
import React from "react";

import Vector from "../../images/Vector 31.png";
import Line from "../../images/Vector 32.webp";
import DesktopImage from "../../images/Desktop.webp";

function HeadingSection() {
  return (
    <section className="relative z-0 mx-auto grid min-h-screen w-full grid-rows-[auto,1fr,auto] items-center justify-center bg-primary pt-10">
      <div className="z-50 flex w-[93%] flex-col space-y-10 text-center text-white">
        <h3 className="text-balance text-6xl font-bold md:text-7xl lg:text-8xl">
          Technology design tools for engineers and hobbyists
        </h3>
        <p className="text-pretty text-3xl font-light lg:text-4xl">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem
          mauris.
        </p>
        <button
          className="mx-auto cursor-pointer rounded-lg bg-foreground px-12 py-3 text-4xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-foreground/65 lg:px-8 lg:text-3xl"
          type="button"
        >
          Request Demo
        </button>
      </div>

      <div className="relative mt-10 w-full lg:w-screen">
        <Image alt="1" className="-z-10 m-auto" src={DesktopImage} />
        <Image alt="1" className="absolute bottom-52 -z-30 w-full" src={Line} />
        <Image
          alt="1"
          className="min-w-screen absolute -bottom-12 -z-40 w-full lg:-bottom-20"
          src={Vector}
        />
      </div>
    </section>
  );
}

export default HeadingSection;
