import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    let variantClass = "btn"; // Default tailwind class we defined
    if (variant === "outline") variantClass = "btn-outline";
    if (variant === "ghost") variantClass = "btn-ghost";

    return (
      <Comp
        className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 ${variantClass} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";