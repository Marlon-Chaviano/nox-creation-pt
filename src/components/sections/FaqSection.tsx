import React from "react";

import {FaqAccordion} from "../Accordion";

function FaqSection() {
  return (
    <section className="mt-20 flex w-full flex-col items-center px-10 text-center">
      <h5 className="mb-5 w-fit text-3xl font-bold md:text-5xl">Frequently asked questions</h5>
      <FaqAccordion />
    </section>
  );
}

export default FaqSection;
