"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import type { Language } from "@/data/translations";

type Theme = "light" | "dark";

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
  }, [language, theme]);

  return (
    <main className={`site-shell ${theme === "dark" ? "theme-dark" : "theme-light"}`} data-theme={theme}>
      <Navbar language={language} onLanguageChange={setLanguage} theme={theme} onThemeChange={setTheme} />
      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Experience language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  );
}
