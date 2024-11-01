import React from "react";

import RequestDemoBtn from "../RequestDemoBtn";

function PurpleSection() {
  return (
    <section className="mt-6 flex w-full flex-col items-center space-y-8 bg-primary px-2 py-12 text-center text-white">
      <h5 className="w-fit text-3xl font-bold md:text-5xl">Ready for your next project?</h5>
      <p className="text-xl font-light">
        Sit elit feugiat turpis sed integer integer accumsan turpis.
      </p>
      <RequestDemoBtn />
    </section>
  );
}

export default PurpleSection;
