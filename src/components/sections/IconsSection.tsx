import AstromIcon from "../icons/AstromIcon";
import CicioIcon from "../icons/CicioIcon";
import {ViewioIcon} from "../icons/ViewioIcon";
import VRocketsIcon from "../icons/VRocketsIcon";
import WeavyIcon from "../icons/WeavyIcon";

const icons = [
  {
    id: 1,
    title: "Astrom",
    icon: <AstromIcon />,
  },
  {
    id: 2,
    title: "cicio",
    icon: <CicioIcon />,
  },
  {
    id: 3,
    title: "weavy",
    icon: <WeavyIcon />,
  },
  {
    id: 4,
    title: "vRockets",
    icon: <VRocketsIcon />,
  },
  {
    id: 5,
    title: "viewio",
    icon: <ViewioIcon />,
  },
];

function IconsSection() {
  return (
    <section className="mt-30 z-50 flex min-h-48 justify-center bg-white px-6 md:px-20">
      <ul className="mx-auto flex list-none content-center items-center space-x-8 md:justify-between lg:w-[70%]">
        {icons.map(({id, icon, title}) => (
          <li
            key={id}
            className="flex cursor-pointer flex-col items-center space-y-2 text-center text-xs font-bold text-foreground transition-transform duration-200 hover:scale-[1.1] md:flex-row md:space-x-2 md:text-lg md:hover:scale-[1.2]"
          >
            <span>{icon}</span>
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default IconsSection;
