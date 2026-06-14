import { forwardRef } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
import type { ButtonProps } from "./Button.types";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",
  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300",
  outline:
    "border border-gray-300 bg-transparent hover:bg-gray-100",
  danger:
    "bg-red-600 text-white hover:bg-red-700",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      className = "",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonClasses = clsx(
        styles.button,
      
        variants[variant],
      
        sizes[size],
      
        {
          [styles.fullWidth]: fullWidth,
          [styles.loading]: loading,
        },
      
        className
      );
      
    return (
      <button
        ref={ref}
        data-testid="button"
        disabled={disabled || loading}
        className={buttonClasses}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

Button.displayName = "Button";