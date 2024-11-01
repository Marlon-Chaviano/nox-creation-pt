import Image, {StaticImageData} from "next/image";

interface Props {
  feature: {
    id: number;
    img: StaticImageData;
    title: string;
    description: string;
  };
}

function FeturesCard({feature}: Props) {
  return (
    <li className="flex flex-col space-y-3">
      <div>
        <Image
          alt={feature.title}
          className="h-auto w-full max-w-[390px]"
          height={220}
          loading="lazy"
          src={feature.img}
          width={394}
        />
      </div>
      <h6 className="text-2xl font-bold">{feature.title}</h6>
      <p>{feature.description}</p>
    </li>
  );
}

export default FeturesCard;
