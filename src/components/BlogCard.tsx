import { Tag as TagType } from "@/types/types";
import { Tag } from "./Tag"; // adjust path if necessary

type BlogCardProps = {
  title: string;
  url: string;
  date: string | Date;
  description: string;
  tags?: TagType[];
};

export default function BlogCard({
  title,
  url,
  date,
  description,
  tags = [],
}: BlogCardProps) {
  const formattedDate =
    typeof date === "string"
      ? date
      : date.toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "2-digit",
        });
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition flex duration-200 flex-col sm:flex-row sm:items-start gap-4 p-4 hover:bg-gray-100/50 border-1 border-transparent hover:border hover:border-gray-100 rounded"
    >
      <div>
        <h2 className="text-xl font-semibold">
          {title} <span className="text-emerald-500 font-bold">·</span>{" "}
          <span className="text-gray-500">{formattedDate}</span>
        </h2>
        <h3>{description}</h3>
        {tags.length > 0 && (
          <div className="flex gap-[6px] mt-3 flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag.id} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
