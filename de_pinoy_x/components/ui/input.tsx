import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "number", ...props }, ref) => {
    return (
      <input
        type={type}
        min={1}
        max={100}
        className={cn(
          "flex h-9 w-full rounded-md border border-gray-400 bg-white px-3 py-1",
          "text-gray-900 shadow-sm transition-colors placeholder:text-gray-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus:border-gray-600",
          "text-center",
          "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
