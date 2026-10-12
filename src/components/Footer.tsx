import { ArrowUpRight, ArrowUp } from "lucide-react";
import { copy, type Language } from "@/data/translations";

export function Footer({ language }: { language: Language }) {
  const t = copy[language];
  return <footer className="site-footer"><div className="shell footer-inner"><p>{t.footer}</p><div className="footer-meta"><a className="footer-social" href="https://linkedin.com/in/anthonysancho" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a className="footer-top" href="#top">{t.top}<ArrowUp size={15} /></a><span className="footer-year">© {new Date().getFullYear()}</span></div></div></footer>;
}
