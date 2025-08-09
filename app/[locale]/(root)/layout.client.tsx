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
      className="bg-transparent text-gray-400 text-sm border-none outline-none cursor-pointer"
    >
      {locales.map((locale) => (
        <option
          key={locale.code}
          value={locale.code}
          className="bg-gray-800 text-white"
        >
          {locale.name}
        </option>
      ))}
    </select>
  );
}
