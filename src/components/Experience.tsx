import { Check } from "lucide-react";
import { copy, type Language } from "@/data/translations";

export function Experience({ language }: { language: Language }) {
  const t = copy[language].experience;
  return (
    <section className="section-pad experience-section" id="experience">
      <div className="shell">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div><h2>{t.title}</h2></div><span className="section-index">04 / EXPERIENCE</span></div>
        <article className="experience-card"><div className="experience-aside"><span className="experience-year">2026</span><span className="experience-period">{t.date}</span><span className="experience-location">{t.location}</span><span className="experience-line" /><span className="experience-label">{t.context}</span></div><div className="experience-main"><div className="experience-top"><div><span className="experience-company">{t.company}</span><h3>{t.role}</h3></div><span className="experience-company-mark">A<span>.</span></span></div><p className="experience-description">{t.description}</p><ul className="experience-bullets">{t.bullets.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><div className="experience-footnote">{t.note}</div></div></article>
      </div>
    </section>
  );
}
