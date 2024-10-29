import Image from "next/image";

import ColabTeam from "../../images/Right (2).webp";

function EfficentColabSection() {
  return (
    <section className="flex min-h-[70vh] w-full items-center space-x-2 bg-white px-24 pt-8 lg:px-32">
      <div className="w-[50%]">
        <Image alt="Colaboration Team Picture" src={ColabTeam} />
      </div>
      <article className="flex w-[50%] flex-col space-y-5">
        <h5 className="text-4xl font-bold">Efficent Colaboration</h5>
        <p className="text-balance text-xl font-medium text-gray-600">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec
          maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper.
        </p>
      </article>
    </section>
  );
}

export default EfficentColabSection;
