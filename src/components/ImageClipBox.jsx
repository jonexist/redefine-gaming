import PropTypes from "prop-types";

const ImageClipBox = ({ src, clipClass, alt }) => {
  return (
    <div className={clipClass}>
      <img src={src} alt={alt} />
    </div>
  );
};

ImageClipBox.propTypes = {
  src: PropTypes.string,
  clipClass: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageClipBox;
