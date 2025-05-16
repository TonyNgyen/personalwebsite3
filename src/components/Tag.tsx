import type { Tag } from "@/types/types";
import { clsx } from "clsx";

export function Tag({ tag }: { tag: Tag }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-0",
        tag.bgColor,
      )}
    >
      <p className={clsx("font-semibold", tag.textColor)}>
        {tag.emoji} {tag.label}
      </p>
    </span>
  );
}
