import PropTypes from "prop-types";

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
      {rightIcon}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  containerClass: PropTypes.string,
};

export default Button;
