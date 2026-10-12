import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { copy, type Language } from "@/data/translations";
import { profile } from "@/data/portfolio";

export function Contact({ language }: { language: Language }) {
  const t = copy[language].contact;
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="shell contact-shell">
        <div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div>
        <div className="contact-grid">
          <div><h2>{t.titleA}{t.titleB && <><br /><span>{t.titleB}</span></>}</h2><p className="contact-intro">{t.text}</p><div className="contact-location"><MapPin size={15} />{t.location}</div></div>
          <div className="contact-links">
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noreferrer" className="contact-link"><span className="contact-link-icon"><Mail size={20} /></span><span><small>GMAIL</small><strong>{profile.email}</strong></span><ArrowUpRight size={20} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link"><span className="contact-link-icon"><Linkedin size={20} /></span><span><small>LINKEDIN</small><strong>{t.linkedin}</strong></span><ArrowUpRight size={20} /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link"><span className="contact-link-icon"><Github size={20} /></span><span><small>GITHUB</small><strong>{t.github}</strong></span><ArrowUpRight size={20} /></a>
            <a href="#top" className="contact-back"><ArrowDownRight size={16} />{t.back}</a>
          </div>
        </div>
        <div className="contact-big-mark" aria-hidden="true">CONNECT<span>↗</span></div>
      </div>
    </section>
  );
}
