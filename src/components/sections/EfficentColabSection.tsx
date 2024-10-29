import Image from "next/image";

import ColabTeam from "../../images/Right (2).webp";

function EfficentColabSection() {
  return (
    <section className="flex min-h-screen w-full flex-col-reverse items-center justify-end bg-white px-10 pt-8 md:min-h-[70vh] md:flex-row md:justify-between md:space-x-8 md:px-10 lg:px-32">
      <div className="mt-10 w-full md:mt-0 md:w-[50%]">
        <Image alt="Colaboration Team Picture" src={ColabTeam} />
      </div>
      <article className="mx-auto flex w-full flex-col space-y-5 text-center md:w-[50%] md:text-start">
        <h5 className="text-5xl font-bold">Efficient Colaboration</h5>
        <p className="text-balance text-2xl font-medium text-gray-600">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec
          maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper.
        </p>
      </article>
    </section>
  );
}

export default EfficentColabSection;
