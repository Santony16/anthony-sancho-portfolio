"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { copy, type Language } from "@/data/translations";
import { profile, navigationIds } from "@/data/portfolio";

type Theme = "light" | "dark";

export function Navbar({ language, onLanguageChange, theme, onThemeChange }: {
  language: Language;
  onLanguageChange: (language: Language) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language].nav;

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
        <a className="brand" href="#top" aria-label="Anthony Sancho, home"><span className="brand-prompt" aria-hidden="true">~/</span><span className="brand-name">Anthony <strong>Sancho</strong></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {navigationIds.map((id) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{t[id]}</a>)}
          <button className="language-toggle" onClick={() => onLanguageChange(language === "en" ? "es" : "en")} aria-label={language === "en" ? "Cambiar a español" : "Switch to English"}>{language === "en" ? "ES" : "EN"}<span className="language-dot" /></button>
          <button className="theme-toggle" onClick={() => onThemeChange(theme === "light" ? "dark" : "light")} aria-label={theme === "light" ? t.themeDark : t.themeLight} title={theme === "light" ? t.themeDark : t.themeLight}>{theme === "light" ? <Moon size={17} /> : <Sun size={17} />}<span>{theme === "light" ? (language === "en" ? "Dark" : "Oscuro") : (language === "en" ? "Light" : "Claro")}</span></button>
          <a className="nav-resume" href={profile.resume[language]} download>{t.resume}<ArrowUpRight size={15} /></a>
        </div>
      </nav>
    </header>
  );
}
