import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  className?: string;
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-[#1a6d2f] text-white hover:bg-[#145224]",
    secondary: "bg-gray-200 text-gray-600 hover:bg-gray-300",
    ghost: "bg-transparent text-green-700 hover:bg-green-50",
    danger: "bg-red-100 text-red-600 hover:bg-red-200",
  };

  return (
    <button
      className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}