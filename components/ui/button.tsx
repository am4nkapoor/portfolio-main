import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 hover:scale-105",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:from-red-700 hover:to-red-800 hover:shadow-red-200/50 dark:hover:shadow-red-900/50 hover:scale-105",
        outline:
          "border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-900/50 hover:scale-105",
        secondary:
          "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 shadow-lg hover:from-gray-200 hover:to-gray-300 hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:scale-105",
        ghost:
          "bg-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-700 hover:scale-105",
        link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700",
        premium: "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 hover:shadow-purple-200/50 dark:hover:shadow-purple-900/50 hover:scale-105",
        glass: "backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-105",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants }; 