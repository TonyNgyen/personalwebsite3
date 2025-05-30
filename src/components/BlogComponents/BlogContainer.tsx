import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

function BlogContainer({ children, className = "" }: Props) {
  return <section className={`space-y-4 ${className}`}>{children}</section>;
}

export default BlogContainer;
