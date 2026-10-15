"use client";

import { useEffect, useRef } from "react";
import { ROUTE_OPTIONS, TEXT, type Lang } from "./data";

type Props = {
  lang: Lang;
  onClose: () => void;
};

export default function RoutePicker({ lang, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const t = TEXT[lang];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    ref.current?.querySelector("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="cb-overlay" onClick={onClose}>
      <div
        className="cb-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cb-picker-title"
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="cb-modal__close" onClick={onClose} aria-label={t.close}>
          ×
        </button>
        <h3 id="cb-picker-title">{t.pickerTitle}</h3>
        <p className="cb-modal__sub">{t.pickerSub}</p>
        <div className="cb-modal__list">
          {ROUTE_OPTIONS.map((o) => (
            <a
              key={o.id}
              className="cb-modal__item"
              href={o.url()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              <img className="cb-logo" src={o.icon} alt="" />
              {t.routes[o.id]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}