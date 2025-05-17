import type { Tag } from "@/types/types";

export function Tag({ tag }: { tag: Tag }) {
  return (
    <span
      style={{
        backgroundColor: tag.bgColor, // e.g. "rgb(245, 245, 245)" or "#f5f5f5"
      }}
      className="inline-flex items-center rounded-full px-3 py-1"
    >
      <p className="font-semibold" style={{ color: tag.textColor }}>
        {tag.emoji ? `${tag.emoji} ` : ""}
        {tag.label}
      </p>
    </span>
  );
}
