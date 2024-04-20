import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = ({ ...props }: ButtonProps) => {
  return (
    <button className="text-blue-500" {...props}>
      Hello
    </button>
  );
};

export default Button;
