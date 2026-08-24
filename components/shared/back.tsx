"use client";

import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

export default function BackButton() {
  const { back } = useRouter();
  return (
    <button
      onClick={back}
      className="flex size-9 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-neutral-100"
      title="Back"
      aria-label="Back"
    >
      <BiArrowBack />
    </button>
  );
}
