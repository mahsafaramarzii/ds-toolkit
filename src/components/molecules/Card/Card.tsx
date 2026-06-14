import { forwardRef } from "react";
import clsx from "clsx";

import styles from "./Card.module.css";
import type { CardProps } from "./Card.types";

export const Card = forwardRef<
  HTMLDivElement,
  CardProps
>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-testid="card"
        className={clsx(
            styles.card,
          
            "bg-white",
            "border",
            "border-gray-200",
          
            "shadow-sm",
          
            "p-6",
          
            "flex",
            "flex-col",
          
            className
          )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";