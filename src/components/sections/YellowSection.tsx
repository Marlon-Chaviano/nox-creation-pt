import React from "react";

import Carrousel from "../Carrousel";

function YellowSection() {
  return (
    <section className="mb-10 flex flex-col overflow-hidden bg-active px-14 py-4 pb-14 md:flex-row md:justify-between md:overflow-visible xl:px-44">
      <div className="md:my-auto md:w-1/3 md:text-xl">
        <p>
          Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in
          purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a
          habitasse commodo.
        </p>
        <div>
          <p className="font-semibold">Marie Poirot,</p>
          <p className="font-bold">Bigapp</p>
        </div>
      </div>
      <div>
        <Carrousel />
      </div>
    </section>
  );
}

export default YellowSection;
