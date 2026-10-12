import { Braces, Circle } from "lucide-react";
import { copy, type Language } from "@/data/translations";

export function About({ language }: { language: Language }) {
  const t = copy[language].about;
  return (
    <section className="section-pad about-section" id="about">
      <div className="shell">
        <div className="section-heading about-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div><h2>{t.title}</h2></div><span className="section-index">01 / ABOUT</span></div>
        <div className="about-grid">
          <div className="about-marker developer-card" aria-label={language === "es" ? "Tarjeta de código de Anthony" : "Anthony's code card"}>
            <div className="developer-card-bar"><span className="developer-file"><Braces size={14} /> anthony.ts</span><span className="developer-window-dots"><Circle /><Circle /><Circle /></span></div>
            <div className="developer-code" aria-hidden="true"><span className="code-line-number">01</span><span><i>const</i> developer = &#123;</span><span className="code-line-number">02</span><span className="code-indent">name: <b>&quot;Anthony Sancho&quot;</b>,</span><span className="code-line-number">03</span><span className="code-indent">country: <b>&quot;Costa Rica&quot;</b>,</span><span className="code-line-number">04</span><span className="code-indent">timezone: <b>&quot;UTC−6&quot;</b>,</span><span className="code-line-number">05</span><span>&#125;;<em>_</em></span></div>
            <span className="developer-card-caption">SOFTWARE ENGINEER <span>·</span> CR</span>
          </div>
          <div className="about-body"><p>{t.p1}</p><p>{t.p2}</p><div className="facts-grid">{t.facts.map((fact) => <div className="fact" key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}</div></div>
        </div>
      </div>
    </section>
  );
}
