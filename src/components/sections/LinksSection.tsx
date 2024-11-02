import React from "react";

import LogoIcon from "../icons/LogoIcon";

import {linksSections} from "@/constants";

function LinksSection() {
  return (
    <section className="mx-auto grid w-full grid-cols-1 content-start items-start px-6 py-10 sm:grid-cols-2 md:grid-cols-5">
      <div className="flex items-start space-x-2">
        <LogoIcon fill="#f7cf49" />
        <h2 className="text-3xl font-bold text-primary">protech</h2>
      </div>
      {linksSections.map((linkSection) => (
        <div key={linkSection.id} className="mt-4 flex flex-col space-y-3 pt-3 md:mt-0">
          <h6 className="font-semibold text-gray-500">{linkSection.category}</h6>
          {linkSection.links.map((link) => (
            <span
              key={Math.random()}
              className="w-fit cursor-pointer text-foreground transition-all duration-200 hover:font-medium hover:underline"
            >
              {link}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
}

export default LinksSection;
