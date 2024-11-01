import Image, {StaticImageData} from "next/image";
import Link from "next/link";

import ArrowIcon from "./icons/ArrowIcon";

interface Props {
  article: {
    id: number;
    img: StaticImageData;
    title: string;
    description: string;
  };
}

function BorderedCard({article}: Props) {
  return (
    <li className="w-full rounded-xl border-[2.5px] border-foreground transition-shadow duration-200 hover:shadow-2xl">
      <div className="w-full rounded-t-xl bg-emerald-600">
        <Image
          alt={article.title}
          className="h-auto w-full rounded-t-xl"
          height={220}
          loading="lazy"
          src={article.img}
          width={394}
        />
      </div>
      <div className="flex w-full flex-col space-y-3 px-8 py-4 xs:px-3 xs:py-6 md:space-y-4 md:px-4">
        <h6 className="xs:text-md text-2xl font-bold md:text-3xl md:text-lg">{article.title}</h6>
        <p className="text-2xl text-sm">{article.description}</p>
        <Link className="flex w-fit items-center space-x-2 font-semibold hover:opacity-80" href="/">
          <span className="text-sm text-primary md:text-xl">Read article</span>
          <span>
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </li>
  );
}

export default BorderedCard;
