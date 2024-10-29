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
    <section className="mt-30 z-50 flex min-h-48 w-full justify-center bg-white px-6 md:px-20">
      <ul className="mx-auto flex w-full list-none items-center justify-between space-x-3 lg:w-[70%]">
        {icons.map(({id, icon, title}) => (
          <li
            key={id}
            className="flex items-center space-x-2 text-xs font-bold text-foreground md:text-lg"
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
