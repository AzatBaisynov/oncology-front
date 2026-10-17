"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "./var.scss";
import "./ContactBlock.scss";
import { HTML_LANG, LANGS, PHONE, TEXT, type Lang } from "./data";
import RoutePicker from "./RoutePicker";

const PlaceMap = dynamic(() => import("./PlaceMap"), { ssr: false });

export default function ContactBlock() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("ru");
  const t = TEXT[lang];

  useEffect(() => {
    const saved = localStorage.getItem("cb-lang");
    if (saved === "kg" || saved === "en" || saved === "ru") {
      setLang(saved);
      document.documentElement.lang = HTML_LANG[saved];
    }
  }, []);

  const changeLang = (next: Lang) => {
    setLang(next);
    localStorage.setItem("cb-lang", next);
    document.documentElement.lang = HTML_LANG[next];
  };

  return (
    <section className="cb" aria-labelledby="cb-title">
      <div className="cb__lang" role="group" aria-label="Language">
        {LANGS.map((l) => (
          <button
            key={l.id}
            type="button"
            aria-pressed={lang === l.id}
            onClick={() => changeLang(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div className="cb__info">
        <p className="cb__eyebrow">{t.eyebrow}</p>
        <h2 id="cb-title">{t.heading}</h2>

        <div className="cb__row">
          <span className="cb__ico" aria-hidden="true">
            <img src="/icons/location.svg" alt="" />
          </span>
          <p>
            {t.address}
            <br />
            {t.title}
          </p>
        </div>

        <div className="cb__row">
          <span className="cb__ico" aria-hidden="true">
            <img src="/icons/phone.svg" alt="" />
          </span>
          <p>
            <a className="cb__phone" href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>
              {PHONE}
            </a>
            <br />
            <span className="cb__sub">{t.phoneNote}</span>
          </p>
        </div>

        <button type="button" className="cb__btn" onClick={() => setOpen(true)}>
          {t.button}
          <img className="cb__arrow" src="/icons/arrow.svg" alt="" />
        </button>
      </div>

      <div className="cb__map" role="region" aria-label={`${t.mapLabel}: ${t.title}, ${t.address}`}>
        <PlaceMap title={t.title} />
      </div>

      {open && <RoutePicker lang={lang} onClose={() => setOpen(false)} />}
    </section>
  );
}