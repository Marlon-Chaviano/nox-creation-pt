import React from "react";

import RequestDemoBtn from "../RequestDemoBtn";

export function BlueSection() {
  return (
    <article className="bg-cyan_blue flex flex-col space-y-8 py-14 text-center text-white">
      <h5 className="text-balance text-5xl font-bold">All the tech & design tools combined</h5>

      <p className="text-xl font-light">Turpis purus, imperdiet integer amet, eu.</p>

      <RequestDemoBtn />
    </article>
  );
}
