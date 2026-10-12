import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { copy, type Language } from "@/data/translations";
import { profile } from "@/data/portfolio";

export function Hero({ language }: { language: Language }) {
  const t = copy[language].hero;
  return (
    <section className="hero section-pad" id="top">
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div>
          <h1>{t.titleA}<br /><span className="hero-title-accent">{t.titleB}</span></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">{t.primary}<ArrowUpRight size={17} /></a>
            <a className="text-link" href="#projects">{t.secondary}<ArrowDown size={16} /></a>
          </div>
          <div className="hero-availability"><span className="status-dot" />{t.availability}</div>
        </div>
        <div className="hero-art hero-photo-card">
          <div className="art-topline"><span>PORTFOLIO / 2026</span><Sparkles size={17} /></div>
          <div className="hero-photo-frame"><Image src={profile.photo} alt={t.photoAlt} className="hero-photo" fill priority sizes="(max-width: 760px) 100vw, 45vw" /></div>
          <div className="hero-photo-caption"><span className="art-label">{t.cardLabel}</span><h2>{t.cardTitle}</h2><p>{t.cardText}</p></div>
          <div className="art-location"><MapPin size={13} />{t.location}</div>
          <div className="art-sticker">SOFTWARE<br />ENGINEER<span>↘</span></div>
          <div className="art-number">01 — 05</div>
        </div>
      </div>
      <div className="hero-bottom shell"><span>{language === "en" ? "SCROLL TO EXPLORE" : "DESLIZA PARA EXPLORAR"}</span><span className="hero-bottom-line" /><a href={profile.github} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13} /></a></div>
    </section>
  );
}
