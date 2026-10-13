import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "О центре", href: "/about" },
  { label: "Пациентам", href: "/patients" },
  { label: "Специалистам", href: "/specialists" },
  { label: "Пресс-центр", href: "/press" },
  { label: "Контакты", href: "/contacts" },
];

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SOCIAL_ITEMS = [
  {
    label: "Telegram",
    href: "#",
    icon: (
      <svg {...iconProps}>
        <path d="M21 4 3 11l6 2 2 6 3-4 5 3 2-14Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3V9Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 px-6 py-8 text-slate-900">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center justify-items-center gap-6 text-center lg:grid-cols-[1fr_auto_1fr] lg:justify-items-stretch lg:text-left">
        {/* Логотип и слоган */}
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/logo.svg"
              alt="Национальный центр онкологии Кыргызской Республики"
              width={300}
              height={64}
              className="h-16 w-auto"
            />
          </Link>
          <p className="mt-2 text-[15px] text-slate-500 lg:pl-[67px]">
            Забота. Наука. Жизнь.
          </p>
        </div>

        {/* Меню */}
        <nav
          aria-label="Нижнее меню"
          className="flex flex-wrap justify-center gap-x-8 gap-y-4"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] transition-colors hover:text-[#b83a3a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Соцсети и копирайт */}
        <div className="flex flex-col items-center gap-3 lg:items-end">
          <div className="flex gap-4">
            {SOCIAL_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#b83a3a]"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-[13px] text-slate-500 lg:text-right">
            © 2024 Национальный центр онкологии
            <br />
            Кыргызской Республики
          </p>
        </div>
      </div>
    </footer>
  );
}
