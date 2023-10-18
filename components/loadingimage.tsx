/* eslint-disable jsx-a11y/alt-text */
"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps, useState } from "react";

export default function ImageWithLoader({
  onLoad,
  className,
  ...rest
}: ComponentProps<typeof Image>) {
  const [loading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "duration-700 ease-in-out",
        loading
          ? "scale-110 blur-xl grayscale"
          : "scale-100 blur-0 grayscale-0",
        className
      )}
      {...rest}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
