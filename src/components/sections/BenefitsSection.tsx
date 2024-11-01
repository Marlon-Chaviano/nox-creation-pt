import ClockIcon from "../icons/ClockIcon";
import Stars from "../icons/StarsIcon";
import {TournamentIcon} from "../icons/TournamentIcon";

const benefits = [
  {
    id: 1,
    title: "Nisl arcu nunc",
    description: "Dui consectetur gravida platea ut dis diam. Enim morbi proin auctor et.",
    icon: <ClockIcon />,
  },
  {
    id: 2,
    title: "Dui scelerisque",
    description: "Et sit duis vestibulum proin. Sollicitudin velit, etiam a feugiat sagittis.",
    icon: <TournamentIcon />,
  },
  {
    id: 3,
    title: "Ac proin at",
    description: "Elit purus magna donec mattis amet, leo varius sed. Ut metus sed convallis.",
    icon: <Stars />,
  },
];

import React from "react";

function BenefitsSection() {
  return (
    <section className="w-full bg-white py-20">
      <ul className="mx-auto grid list-none grid-cols-1 items-center justify-items-center space-x-2 space-y-8 px-10 md:grid-cols-3 md:space-y-0">
        {benefits.map(({icon, title, description, id}) => (
          <li key={id} className="flex max-w-[350px] flex-col justify-center space-y-4 text-center">
            <div className="flex justify-center">{icon}</div>
            <div className="flex flex-col space-y-2">
              <p className="text-xl font-bold">{title}</p>
              <p className="text-lg font-light">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BenefitsSection;
