import { useState, type CSSProperties } from "react";
import {
  ArrowUpRight, Brain, Braces, Cloud, Code2, Component, Database, GitPullRequest,
  Layers3, PanelsTopLeft, Smartphone, Workflow, UsersRound, Webhook, Bot, Send,
  Server, ShieldCheck, Gauge, Package, Network, TerminalSquare, type LucideIcon,
} from "lucide-react";
import {
  siJavascript, siTypescript, siPython, siPhp,
  siReact, siNextdotjs, siVuedotjs, siTailwindcss,
  siNodedotjs, siExpress, siNestjs, siDotnet, siLaravel, siPostman,
  siPostgresql, siMysql, siMongodb,
  siDocker, siGit, siGraphql,
} from "simple-icons";
import { copy, type Language } from "@/data/translations";

type BrandIcon = { title: string; hex: string; path: string };
const brandIcons: Record<string, BrandIcon> = {
  "JavaScript": siJavascript, "TypeScript": siTypescript, "Python": siPython, "PHP": siPhp,
  "React": siReact, "Next.js": siNextdotjs, "Vue.js": siVuedotjs, "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs, "Express.js": siExpress, "Express": siExpress, "NestJS": siNestjs, ".NET": siDotnet, "Laravel": siLaravel, "Postman": siPostman,
  "PostgreSQL": siPostgresql, "MySQL": siMysql, "MongoDB": siMongodb,
  "Docker": siDocker, "Git": siGit, "GraphQL": siGraphql,
};
const conceptIcons: Record<string, LucideIcon> = {
  "Java": Braces, "C#": Code2, "SQL Server": Database, "AWS": Cloud,
  "Responsive Design": Smartphone, "Component-Based Architecture": Component,
  "Feature-Sliced Design (FSD)": PanelsTopLeft, "MVC": Layers3, "REST APIs": Webhook,
  "CI/CD Concepts": Workflow, "Agile/Scrum": UsersRound, "REST API Design": Network,
  "Pull Requests": GitPullRequest, "AI-Assisted Development": Bot,
};
const groupIcons = [Code2, PanelsTopLeft, Server, Database, Cloud, Workflow];

function TechnologyIcon({ name }: { name: string }) {
  const brand = brandIcons[name];
  if (brand) return <svg className="tech-logo" role="img" aria-label={`${name} logo`} viewBox="0 0 24 24" fill={`#${brand.hex}`}><path d={brand.path} /></svg>;
  const Icon = conceptIcons[name] ?? (name.includes("API") ? Webhook : name.includes("Design") ? Gauge : name.includes("Architecture") ? Package : name.includes("FSD") ? PanelsTopLeft : name.includes("AI") ? Brain : name.includes("Request") ? GitPullRequest : name.includes("Scrum") ? UsersRound : name.includes("MVC") ? Layers3 : name.includes("CI/CD") ? Workflow : name.includes("Responsive") ? Smartphone : name.includes("REST") ? ShieldCheck : name.includes("Pull") ? GitPullRequest : name.includes("Development") ? TerminalSquare : Send);
  return <Icon className="tech-concept-icon" size={19} aria-label={`${name} icon`} />;
}

export function Skills({ language }: { language: Language }) {
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  const t = copy[language].skills;
  return (
    <section className="section-pad skills-section" id="skills">
      <div className="shell">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div><h2>{t.title}</h2><p className="section-intro">{t.intro}</p></div><span className="section-index">02 / TOOLKIT</span></div>
        <div className="skill-grid">
          {t.groups.map((group, index) => {
            const Icon = groupIcons[index] ?? Braces;
            const loopItems = [...group.items, ...group.items];
            const expanded = expandedGroups.includes(group.title);
            return <article className={`skill-card${expanded ? " skill-card-expanded" : ""}`} key={group.title} style={{ "--marquee-duration": `${Math.max(17, group.items.length * 3.2)}s` } as CSSProperties}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-number">0{index + 1}</span></div>
              <h3>{group.title}</h3>
              <div className={`skill-marquee${expanded ? " skill-marquee-hidden" : ""}`} aria-label={group.items.join(", ")}><div className="skill-marquee-track">
                {loopItems.map((item, itemIndex) => <span className="tech-chip" key={`${item}-${itemIndex}`} aria-hidden={itemIndex >= group.items.length}><span className="tech-icon-wrap"><TechnologyIcon name={item} /></span><span>{item}</span></span>)}
              </div></div>
              {expanded && <div className="skill-expanded-list">{group.items.map((item) => <span className="tech-chip" key={item}><span className="tech-icon-wrap"><TechnologyIcon name={item} /></span><span>{item}</span></span>)}</div>}
              <div className="skill-card-foot"><span>{group.items.length} {language === "en" ? "technologies / practices" : "tecnologías / prácticas"}</span><button className="skill-view-button" type="button" aria-expanded={expanded} onClick={() => setExpandedGroups((current) => expanded ? current.filter((title) => title !== group.title) : [...current, group.title])}>{expanded ? (language === "en" ? "Hide" : "Ocultar") : (language === "en" ? "View all" : "Ver todas")}</button></div>
            </article>;
          })}
        </div>
        <div className="soft-skills"><div className="soft-heading"><Brain size={19} /><h3>{t.softTitle}</h3></div><div className="soft-list">{t.soft.map((item, i) => <span key={item}><span className="soft-index">0{i + 1}</span>{item}</span>)}</div></div>
      </div>
    </section>
  );
}
