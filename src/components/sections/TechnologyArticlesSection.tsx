import BorderedCard from "../BorderedCard";

import {techArticles} from "@/constants";

export function TechnologyArticlesSection() {
  return (
    <section className="mx-auto mt-28 flex max-w-[1640px] flex-col items-center px-4">
      <div className="flex w-full flex-col items-center px-8 text-center">
        <h5 className="mb-5 w-fit text-3xl font-bold md:text-5xl">Technology design articles</h5>
        <p className="text-xl">
          Felis, semper ullamcorper sed pretium tristique vulputate semper massa ultrices. Integer
          orci gravida blandit amet.
        </p>
      </div>
      <ul className="mx-auto mt-16 grid w-full list-none grid-cols-1 place-content-center gap-8 px-4 md:grid-cols-3">
        {techArticles.map((article) => (
          <BorderedCard key={article.id} article={article} />
        ))}
      </ul>
    </section>
  );
}
