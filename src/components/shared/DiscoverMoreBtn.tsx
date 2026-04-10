import React from "react";
import { cn } from "@/lib/utils";

interface DiscoverMoreBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'solid' | 'outline';
}

const DiscoverMoreBtn: React.FC<DiscoverMoreBtnProps> = ({ 
  className, 
  variant = 'solid', 
  children, 
  ...props 
}) => {
  return (
    <button
      className={cn(
        "group relative overflow-hidden px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 active:scale-95",
        variant === 'solid' 
          ? "bg-brand text-white shadow-lg shadow-brand/20 hover:shadow-brand/40" 
          : "border-2 border-brand text-brand hover:text-white",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children || "Discover More"}</span>
      
      {/* Premium Hover Slide-up Effect */}
      <div 
        className={cn(
          "absolute inset-0 z-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0",
          variant === 'solid' ? "bg-black/10" : "bg-brand"
        )}
      />
    </button>
  );
};

export default DiscoverMoreBtn;
