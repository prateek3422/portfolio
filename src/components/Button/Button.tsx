import React from "react";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`border-[1px] border-Primary text-white px-2 py-1  hover:bg-[#483b55] duration-500 text-sm font-normal ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
