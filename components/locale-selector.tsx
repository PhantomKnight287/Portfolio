"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const locales = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
];

export default function LocaleSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname, { locale: newLocale });
  };

  return (
    <select
      value={locale}
      onChange={handleLocaleChange}
      aria-label="Language"
      className="cursor-pointer rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1.5 text-xs text-neutral-400 outline-none hover:text-neutral-100"
    >
      {locales.map((locale) => (
        <option
          key={locale.code}
          value={locale.code}
          className="bg-neutral-900 text-neutral-100"
        >
          {locale.name}
        </option>
      ))}
    </select>
  );
}
