import Image from "next/image";
import React from "react";

import Vector from "../../images/Vector 31.png";
import Line from "../../images/Vector 32.webp";
import DesktopImage from "../../images/Desktop.webp";
import RequestDemoBtn from "../RequestDemoBtn";

function HeadingSection() {
  return (
    <section className="relative z-0 grid w-full grid-rows-[auto,1fr,auto] items-center justify-center bg-primary pt-16 4k:w-screen 4k:pt-28">
      <div className="z-50 mx-auto mb-8 flex w-full flex-col space-y-10 text-center text-white lg:max-w-[90%] 4k:mb-28">
        <h3 className="text-balance text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
          Technology design tools for engineers and hobbyists
        </h3>
        <div className="mx-auto max-w-[1000px]">
          <p className="text-balance text-lg font-light md:text-3xl lg:text-4xl">
            Sit elit feugiat turpis sed integer integer accumsan turpis.
          </p>
          <p className="text-balance text-lg font-light md:text-3xl lg:text-4xl">
            Sed suspendisse nec lorem mauris.
          </p>
        </div>
        <RequestDemoBtn />
      </div>
      <div className="relative mt-auto w-full 4k:w-screen">
        <Image
          alt="Mac Desktop Photo"
          className="-z-10 m-auto h-auto max-w-[90%] 4k:w-[80%]"
          src={DesktopImage}
        />
        <Image
          alt="vector"
          className="lg:bottom-46 md:bottom-34 absolute bottom-12 -z-30 h-auto w-full sm:bottom-20 xl:bottom-52"
          src={Line}
        />
        <Image
          alt="vector"
          className="absolute -bottom-12 -z-40 h-auto w-full xs:-bottom-6 lg:-bottom-20 4k:-bottom-56"
          src={Vector}
        />
      </div>
    </section>
  );
}

export default HeadingSection;
