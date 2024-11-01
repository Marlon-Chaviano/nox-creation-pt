import Image from "next/image";

import Mobile from "../../images/Right.webp";
import GamesStoreButton from "../GamesStoreButton";
function WorkFromAnywhereSection() {
  return (
    <section className="flex w-full flex-col-reverse items-center justify-end bg-white py-20 xs:px-2 sm:px-8 md:flex-row-reverse md:justify-between md:space-x-8 md:px-10 lg:px-32">
      <div className="w-full pt-10 md:w-[50%] md:pt-0">
        <Image alt="Phone Photo" className="h-auto w-full" loading="lazy" src={Mobile} />
      </div>
      <article className="mx-auto flex w-full flex-col space-y-5 text-center md:w-[50%] md:text-start">
        <h5 className="mb-5 text-3xl font-bold md:text-5xl">Work From Anywhere</h5>
        <p className="text-balance text-lg font-medium text-gray-600 md:text-2xl">
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras
          ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
        </p>
        <div className="mx-auto mt-2 flex w-full justify-center space-x-2 md:m-0">
          <GamesStoreButton variant="apple" />
          <GamesStoreButton variant="play-store" />
        </div>
      </article>
    </section>
  );
}

export default WorkFromAnywhereSection;
