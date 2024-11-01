import {features} from "../../constants";
import FeturesCard from "../FeturesCard";
function FeaturesSection() {
  return (
    <section className="flex w-full flex-col items-center px-6">
      <h5 className="mb-5 w-fit text-center text-3xl font-bold md:text-5xl">
        The features you were looking for
      </h5>
      <ul className="list-non mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3 lg:max-w-6xl lg:gap-12 4k:max-w-7xl">
        {features.map((feature) => (
          <FeturesCard key={feature.id} feature={feature} />
        ))}
      </ul>
    </section>
  );
}

export default FeaturesSection;
