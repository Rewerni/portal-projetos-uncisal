import {
  Heart,
  BookOpen,
  Map,
  Brain,
  Users,
  Clock,
  ArrowRight,
  Star,
} from "lucide-react";
import uncisalLogo from "@/assets/uncisal-logo.png";

interface ProjectCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  featured?: boolean;
  disabled?: boolean;
}

const projects: ProjectCard[] = [
  {
    id: 1,
    title: "Cuidar de Quem Cuida",
    description: "Apoio emocional e ferramentas práticas para familiares e cuidadores informais de pessoas com deficiência.",
    icon: <Users size={28} strokeWidth={2} />,
    href: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Guia Interativo de Estimulação Precoce",
    description: "Atividades e orientações para o desenvolvimento infantil nos primeiros anos de vida.",
    icon: <BookOpen size={28} strokeWidth={2} />,
    href: "#",
  },
  {
    id: 3,
    title: "Entre Cuidados",
    description: "Autocuidado do Cuidador — recursos de bem-estar para quem dedica a vida a cuidar dos outros.",
    icon: <Heart size={28} strokeWidth={2} />,
    href: "#",
  },
  {
    id: 4,
    title: "Trilha Interativa",
    description: "Percurso gamificado de aprendizado sobre saúde, direitos e reabilitação no CER-III.",
    icon: <Map size={28} strokeWidth={2} />,
    href: "#",
  },
  {
    id: 5,
    title: "Maneiras de Reduzir Estresse e Ansiedade",
    description: "Técnicas baseadas em evidências para lidar com o estresse do cotidiano do cuidado.",
    icon: <Brain size={28} strokeWidth={2} />,
    href: "#",
  },
  {
    id: 6,
    title: "Psicoeducação com os Pais",
    description: "Conteúdos educativos que fortalecem a parceria entre famílias e equipes de saúde.",
    icon: <Star size={28} strokeWidth={2} />,
    href: "#",
  },
  {
    id: 7,
    title: "Em breve...",
    description: "Novo projeto em desenvolvimento pela equipe PET-Saúde Digital.",
    icon: <Clock size={28} strokeWidth={2} />,
    href: "#",
    disabled: true,
  },
  {
    id: 8,
    title: "Em breve...",
    description: "Mais conteúdos digitais em saúde chegando em 2026.",
    icon: <Clock size={28} strokeWidth={2} />,
    href: "#",
    disabled: true,
  },
];

const ProjectCard = ({ project }: { project: ProjectCard }) => {
  if (project.disabled) {
    return (
      <article
        aria-label={project.title}
        className="project-card project-card--disabled"
      >
        <div className="project-card__icon project-card__icon--disabled">
          {project.icon}
        </div>
        <h2 className="project-card__title project-card__title--disabled">
          {project.title}
        </h2>
        <p className="project-card__desc project-card__desc--disabled">
          {project.description}
        </p>
      </article>
    );
  }

  return (
    <a
      href={project.href}
      aria-label={`Acessar projeto: ${project.title}`}
      className={`project-card project-card--link${project.featured ? " project-card--featured" : ""}`}
    >
      {project.featured && (
        <span className="project-card__badge" aria-label="Destaque">
          ✦ Destaque
        </span>
      )}
      <div className={`project-card__icon${project.featured ? " project-card__icon--featured" : ""}`}>
        {project.icon}
      </div>
      <h2 className={`project-card__title${project.featured ? " project-card__title--featured" : ""}`}>
        {project.title}
      </h2>
      <p className="project-card__desc">{project.description}</p>
      <span className="project-card__cta" aria-hidden="true">
        Acessar <ArrowRight size={15} className="inline" />
      </span>
    </a>
  );
};

const Index = () => {
  return (
    <div className="portal-root">
      {/* ── HEADER ─────────────────────────────────── */}
      <header className="portal-header" role="banner">
        <div className="portal-header__inner">
          <img
            src={uncisalLogo}
            alt="Logotipo da UNCISAL – Universidade Estadual de Ciências da Saúde de Alagoas"
            className="portal-header__logo"
            width={96}
            height={96}
          />
          <div className="portal-header__text">
            <p className="portal-header__sup">Centro Especializado em Reabilitação • CER-III</p>
            <h1 className="portal-header__title">
              PET-SAÚDE DIGITAL
              <br />
              <span className="portal-header__subtitle">CER III</span>
            </h1>
            <p className="portal-header__tagline">
              Portal de Projetos — Informação &amp; Saúde Digital
            </p>
          </div>
        </div>

        <div className="portal-header__divider" aria-hidden="true" />
      </header>

      {/* ── MAIN GRID ──────────────────────────────── */}
      <main className="portal-main" id="main-content">
        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="portal-section-title">
            Projetos Disponíveis
          </h2>

          <div className="portal-grid" role="list">
            {projects.map((project) => (
              <div key={project.id} role="listitem">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer className="portal-footer" role="contentinfo">
        <p>
          2026 · Projetos desenvolvidos no Programa de Educação pelo Trabalho para a Saúde (PET-Saúde):{" "}
          <strong>Informação e Saúde Digital</strong> — UNCISAL
        </p>
      </footer>
    </div>
  );
};

export default Index;
