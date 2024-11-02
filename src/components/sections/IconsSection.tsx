import React from "react";

import {icons} from "../../constants";

function IconsSection() {
  return (
    <section className="mt-16 px-4 py-10 md:px-24">
      <ul className="mx-auto flex max-w-4xl justify-between">
        {icons.map((icon) => (
          <li key={icon.id}>
            <div className="flex flex-wrap items-center justify-center space-y-2 transition-transform duration-200 hover:scale-[1.1] md:space-x-1 md:space-y-0">
              <span>
                <icon.icon />
              </span>
              <span className="text-xs font-semibold text-foreground lg:text-xl">{icon.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default IconsSection;
