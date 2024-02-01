type ButtonProps = {
  text: string;
  customClass: string;
};

const Button = ({ text, customClass }: ButtonProps) => {
  return (
    <button
      className={`px-3 py-1.5 rounded-md text-xs border border-gray-300 ${customClass}`}
    >
      {text}
    </button>
  );
};

export default Button;
