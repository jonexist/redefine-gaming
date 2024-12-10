import { Fragment } from "react";
import featuresData from "../data/featuresData";
import BentoCard from "./BentoCard";
import BentoTilt from "./BentoTilt";

const Features = () => {
  return (
    <section id="features" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into a interconnected overlay
            experience on your world.
          </p>
        </div>
        {featuresData.slice(0, 1).map((feature, index) => (
          <BentoTilt key={index} className={feature.className}>
            <BentoCard
              src={feature.src}
              title={
                feature.title ? (
                  <>
                    {feature.title.split(" ").map((char, i) => (
                      <Fragment key={i}>
                        {i === 3 ? <b>{char}</b> : char}
                      </Fragment>
                    ))}
                  </>
                ) : null
              }
              description={feature.description}
            />
          </BentoTilt>
        ))}
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          {featuresData.slice(1).map((feature, index) => (
            <BentoTilt key={index} className={feature.className}>
              {feature.isCommingSoon ? (
                <BentoCard isCommingSoon />
              ) : feature.src ? (
                <BentoCard
                  src={feature.src}
                  title={
                    feature.title ? (
                      <>
                        {feature.title.split(" ").map((char, i) => (
                          <Fragment key={i}>
                            {i === 3 ? <b>{char}</b> : char}
                          </Fragment>
                        ))}
                      </>
                    ) : null
                  }
                  description={feature.description}
                />
              ) : (
                <video
                  src={feature.src}
                  loop
                  muted
                  autoPlay
                  className="size-full object-cover object-center"
                />
              )}
            </BentoTilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
