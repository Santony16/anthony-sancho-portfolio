import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { copy, type Language } from "@/data/translations";
import { profile } from "@/data/portfolio";

export function Projects({ language }: { language: Language }) {
  const t = copy[language].projects;
  return (
    <section className="section-pad projects-section" id="projects">
      <div className="shell">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div><h2>{t.title}</h2><p className="section-intro">{t.intro}</p></div><span className="section-index">03 / SELECTED WORK</span></div>
        <div className="project-list">{t.items.map((project, index) => <article className={`project-card project-card-${index + 1}`} key={project.name}>
          <div className="project-visual"><div className="project-visual-top"><span>{project.name.toUpperCase()}</span><span>0{index + 1} / 02</span></div>
            {index === 0 ? <div className="mock-dashboard"><div className="mock-sidebar"><i /><i /><i /><i /></div><div className="mock-content"><div className="mock-heading" /><div className="mock-stats"><i /><i /><i /></div><div className="mock-chart"><span /><span /><span /><span /><span /><span /><span /></div><div className="mock-rows"><i /><i /><i /></div></div></div> : <div className="mock-video"><div className="video-window"><span className="video-sun" /><span className="video-hill hill-a" /><span className="video-hill hill-b" /><span className="video-play">▶</span></div><div className="video-row"><i /><i /><i /></div><div className="video-caption">KIDSTUBE / SAFE VIDEO SPACE</div></div>}
            <span className="project-visual-mark">{index === 0 ? "K/" : "KT."}</span>
          </div>
          <div className="project-details"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p className="project-description">{project.description}</p><p className="project-impact">{project.impact}</p><div className="tag-list project-tags">{project.stack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div><a className="project-link" href={index === 0 ? "https://kloop.aacrom.com/" : profile.github} target="_blank" rel="noreferrer">{index === 0 ? <ExternalLink size={17} /> : <Github size={17} />}{index === 0 ? (language === "en" ? "View internship work" : "Ver proyecto de práctica profesional") : t.code}<ArrowUpRight size={16} /></a></div>
        </article>)}</div>
        <p className="project-note"><ExternalLink size={14} />{t.note}</p>
      </div>
    </section>
  );
}
