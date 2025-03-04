import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "bet" | "color" | "action" | "play";
  colorClass?: string;
  selected?: boolean;
}

export default function Button({
  variant,
  colorClass,
  selected = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-lg font-semibold transition-all duration-300",

        // "Play Now" variant
        variant === "play" &&
          `bg-[#E3E3E3] text-black 
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#FF9311] hover:text-white"}`,

        // Bet variant
        variant === "bet" &&
          `border-2 border-[#FF9311] text-[#FF9311] bg-transparent 
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#FF9311] hover:text-[#121212]"}
          ${selected ? "bg-[#FF9311] text-[#E3E3E3]" : ""}`,

        // Color variant
        variant === "color" &&
          `w-[100px] h-[100px] ${colorClass} text-black 
          transition-all transform
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:brightness-90"}
          ${selected ? "shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] scale-95" : ""}`,

        // Action variant
        variant === "action" &&
          `bg-green-500 text-white 
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"}`,

        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}
