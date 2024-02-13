const Button = ({ buttonText, bgColor,textColor }) => {
  return (
    <button
      type="button"
      className={`min-w-80 justify-center  ${textColor} ${bgColor} hover:${bgColor}/90 focus:ring-4 focus:outline-none focus:ring-${bgColor}/50 font-medium rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center dark:focus:ring-${bgColor}/55 me-2 mb-2`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
