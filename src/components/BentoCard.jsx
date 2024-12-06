import PropTypes from "prop-types";
import { TiLocationArrow } from "react-icons/ti";

const BentoCard = ({ src, title, description, isCommingSoon }) => {
  return (
    <>
      {isCommingSoon ? (
        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
          <h1 className="bento-title special-font max-w-64 text-black">
            <>
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
            </>
          </h1>
          <TiLocationArrow className="m-5 scale-[5] self-end" />
        </div>
      ) : (
        <div className="relative size-full">
          <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
          <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
            <div>
              <h1 className="bento-title special-font">{title}</h1>
              {description && (
                <p className="mt-3 max-w-64 text-xs md:text-base">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

BentoCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.string,
  isCommingSoon: PropTypes.bool,
};

export default BentoCard;
