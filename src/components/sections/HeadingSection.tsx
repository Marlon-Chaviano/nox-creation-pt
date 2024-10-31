import Image from "next/image";
import React from "react";

import Vector from "../../images/Vector 31.png";
import Line from "../../images/Vector 32.webp";
import DesktopImage from "../../images/Desktop.webp";

function HeadingSection() {
  return (
    <section className="relative z-0 grid min-h-screen w-full grid-rows-[auto,1fr,auto] items-center justify-center bg-primary pt-10">
      <div className="z-50 mx-auto flex w-full flex-col space-y-10 text-center text-white">
        <h3 className="text-balance text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
          Technology design tools for engineers and hobbyists
        </h3>
        <div className="mx-auto max-w-[800px]">
          <p className="text-balance text-lg font-light md:text-3xl lg:text-4xl">
            Sit elit feugiat turpis sed integer integer accumsan turpis.
          </p>
          <p className="text-balance text-lg font-light md:text-3xl lg:text-4xl">
            Sed suspendisse nec lorem mauris.
          </p>
        </div>
        <button
          className="mx-auto cursor-pointer rounded-lg bg-foreground px-12 py-4 text-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.2] hover:bg-foreground/85 lg:px-8 lg:text-3xl"
          type="button"
        >
          Request Demo
        </button>
      </div>

      <div className="relative mt-auto w-full">
        <Image alt="Mac Desktop Photo" className="-z-10 m-auto h-auto" src={DesktopImage} />
        <Image alt="vector" className="absolute bottom-52 -z-30 h-auto w-full" src={Line} />
        <Image
          alt="vector"
          className="absolute -bottom-12 -z-40 h-auto w-full lg:-bottom-20"
          src={Vector}
        />
      </div>
    </section>
  );
}

export default HeadingSection;
