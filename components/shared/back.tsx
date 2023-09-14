"use client";

import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

export default function BackButton() {
  const { back } = useRouter();
  return (
    <button
      onClick={back}
      className="flex flex-row items-center justify-start gap-2.5 
      text-white transition duration-300 ease-in-out
      bg-neutral-700 hover:bg-neutral-900 rounded-md px-3 py-2.5"
      title="Back"
      aria-label="Back"
      aria-roledescription="button"
    >
      <BiArrowBack />
    </button>
  );
}
