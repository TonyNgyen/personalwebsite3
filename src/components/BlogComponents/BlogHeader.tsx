import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function BlogHeader({ children, className = "" }: Props) {
  return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
}

export default BlogHeader;
