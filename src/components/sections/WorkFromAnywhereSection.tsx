import Image from "next/image";

import Mobile from "../../images/Right.webp";
import GamesStoreButton from "../GamesStoreButton";
function WorkFromAnywhereSection() {
  return (
    <section className="md:flex-row-reverse. flex w-full flex-col-reverse items-center justify-end bg-white px-8 py-20 md:justify-between md:space-x-8 md:px-10 lg:px-32">
      <div className="w-full pt-10 md:w-[50%] md:pt-0">
        <Image alt="Phone Photo" src={Mobile} />
      </div>
      <article className="mx-auto flex w-full flex-col space-y-5 text-center md:w-[50%] md:text-start">
        <h5 className="mb-10 text-5xl font-bold">Work From Anywhere</h5>
        <p className="text-balance text-2xl font-medium text-gray-600">
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras
          ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
        </p>
        <div className="mx-auto mt-2 flex space-x-2 md:m-0">
          <GamesStoreButton variant="apple" />
          <GamesStoreButton variant="play-store" />
        </div>
      </article>
    </section>
  );
}

export default WorkFromAnywhereSection;