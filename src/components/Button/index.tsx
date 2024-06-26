import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-seminbold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: "",
        secondary: "border-2",
        tertiary: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorScheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        colorScheme: "primary",
        className: "bg-primary-100 hover:bg-primary-400",
      },
      {
        variant: "secondary",
        colorScheme: "primary",
        className:
          "text-primary-100 border-primary-100 bg-transparent hover:bg-primary-100 hover:text-gray-white",
      },
      {
        variant: "tertiary",
        colorScheme: "primary",
        className:
          "text-primary-100 bg-transparent hover:bg-primary-100 hover:text-gray-white",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      colorScheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorScheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorScheme, className }))}
        {...props}
      />
    );
  }
);
