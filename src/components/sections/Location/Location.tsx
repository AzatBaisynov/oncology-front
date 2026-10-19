"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import "./Location.scss";
import { PHONE } from "./data";
import RoutePicker from "./RoutePicker";

const PlaceMap = dynamic(() => import("./PlaceMap"), { ssr: false });

export const LocationSection = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Location");

  return (
    <section className="cb" aria-labelledby="cb-title">
      <div className="cb__info">
        <p className="cb__eyebrow">{t("eyebrow")}</p>
        <h2 id="cb-title">{t("heading")}</h2>

        <div className="cb__row">
          <span className="cb__ico" aria-hidden="true">
            <img src="/icons/location.svg" alt="" />
          </span>
          <p>
            {t("address")}
            <br />
            {t("title")}
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
            <span className="cb__sub">{t("phoneNote")}</span>
          </p>
        </div>

        <button type="button" className="cb__btn" onClick={() => setOpen(true)}>
          {t("button")}
          <img className="cb__arrow" src="/icons/arrow.svg" alt="" />
        </button>
      </div>

      <div
        className="cb__map"
        role="region"
        aria-label={`${t("mapLabel")}: ${t("title")}, ${t("address")}`}
      >
        <PlaceMap title={t("title")} />
      </div>

      {open && <RoutePicker onClose={() => setOpen(false)} />}
    </section>
  );
};