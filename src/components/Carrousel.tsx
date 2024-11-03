import * as React from "react";
import Image from "next/image";

import Photo from "../images/Picture.webp";
import Rectangle from "../images/Rectangle 47 (1).webp";

import RectangleWithSquares from "./icons/RectangleWithSquares";
import CommentsIcons from "./icons/CommentsIcons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Carrousel() {
  return (
    <Carousel className="mx-auto mt-20 w-full max-w-md md:mx-0 md:mt-10">
      <Image
        alt="Rectangle"
        className="absolute -bottom-10 w-screen -rotate-12 select-none"
        src={Rectangle}
      />
      <div className="absolute right-0 top-[-4rem] z-20 md:-top-12">
        <CommentsIcons />
      </div>
      <div className="absolute -bottom-10 left-6 z-30">
        <RectangleWithSquares />
      </div>
      <CarouselContent>
        {Array.from({length: 5}).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Image
                alt="dada"
                className="flex w-full select-none items-center justify-center rounded-xl"
                loading="lazy"
                src={Photo}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Carrousel;
