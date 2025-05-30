import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function BlogSection({ children, className = "" }: Props) {
  return (
    <h2 className={`text-xl tracking-wide leading-9 ${className}`}>
      {children}
    </h2>
  );
}

export default BlogSection;
