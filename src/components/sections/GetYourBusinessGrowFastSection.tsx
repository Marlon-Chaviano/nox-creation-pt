import Image from "next/image";

import Rectangle from "../../images/Rectangle 47.webp";
import Desktop from "../../images/Desktop.webp";

function GetYourBusinessGrowFastSection() {
  return (
    <section className="flex w-full flex-col items-center justify-end bg-white px-8 py-20 pb-[18.75rem] xs:pb-[12rem] sm:pb-[27rem] md:px-10 md:pb-[34rem] lg:px-32 lg:pb-[30rem] 2lg:pb-[34rem] xl:pb-[43rem] xxl:pb-[53rem] 2xl:pb-[68rem] 4xl:pb-[85rem] 4k:pb-[95rem]">
      <article className="mx-auto flex w-full flex-col space-y-5 text-center">
        <h5 className="mb-5 text-3xl font-bold md:text-5xl">Get your business to grow fast </h5>
        <p className="text-balance text-lg font-medium text-gray-600 md:text-2xl">
          Aliquet id quam amet, augue netus tristique elementum eros urna. Dignissim nisl mauris
          cras feugiat congue at euismod donec.Lectus interdum nibh laoreet nunc bibendum volutpat.
        </p>
      </article>
      <div className="relative mx-auto mt-10 w-full">
        <Image
          alt="Purple Rectangle"
          className="absolute top-12 h-auto w-full xs:top-8 sm:top-16 lg:top-20 xxl:top-28 4k:top-56"
          loading="lazy"
          src={Rectangle}
        />
        <Image
          alt="Mac Desktop Image"
          className="absolute mx-auto h-auto w-full"
          loading="lazy"
          src={Desktop}
        />
      </div>
    </section>
  );
}

export default GetYourBusinessGrowFastSection;
