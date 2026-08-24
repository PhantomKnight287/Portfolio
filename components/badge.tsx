import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export default function Badge({ className, ...props }: ComponentProps<"a">) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center rounded border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 align-middle text-sm leading-4 text-neutral-100 no-underline hover:border-neutral-700",
        className,
      )}
    />
  );
}
