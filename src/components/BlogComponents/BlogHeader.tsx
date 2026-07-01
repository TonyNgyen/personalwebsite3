import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  date: string;
};

function BlogHeader({ children, className = "", date }: Props) {
  return (
    <div>
      <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>
      <p className="text-xl font-semibold dark:text-gray-200 text-gray-500">
        {date}
      </p>
      <div className="border-b-[6px] border-accent pb-2 w-[5%]"></div>
    </div>
  );
}

export default BlogHeader;
