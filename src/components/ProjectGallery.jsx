import React from 'react';

const projects = [
  {
    id: 1,
    title: "KivuMarket+",
    category: "E-Commerce & Fintech",
    description: "Plateforme d'échange et de paiement en ligne optimisée pour dynamiser le commerce local et connecter les marchands du Kivu.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 2,
    title: "Gestion Scolaire (EduGest)",
    category: "SaaS Académique",
    description: "Logiciel de gestion pédagogique, administrative et financière adapté aux réalités des établissements scolaires en RDC.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 3,
    title: "TAL Info",
    category: "Portail Média",
    description: "Média de diffusion d'actualités technologiques, scientifiques et d'opportunités d'apprentissage dans la sous-région.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 4,
    title: "TAL Invoice",
    category: "Logiciel de Facturation",
    description: "Solution simplifiée de génération de factures et suivi de trésorerie pour les PME et indépendants.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

const ProjectGallery = () => {
  return (
    <section 
      id="projets" 
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-tal-orange">
            Nos Réalisations
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-tal-navy sm:text-4xl dark:text-white">
            Solutions technologiques & projets à impact
          </p>
          <div className="mx-auto mt-4 h-1 w-16 bg-tal-orange rounded-full" />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-350">
            Aperçu des plateformes et solutions logicielles développées par TAL Communities pour répondre aux enjeux de numérisation de notre écosystème.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
            >
              {/* Aspect Ratio box */}
              <div className="relative aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/45 transition-colors duration-350" />
                
                {/* Floating category badge */}
                <span className="absolute top-4 left-4 inline-flex items-center rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-tal-orange">
                  {project.category}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-tal-orange transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                {/* Optional interactive link */}
                <div className="mt-5 flex items-center justify-between">
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-tal-orange dark:text-slate-400 dark:hover:text-tal-orange"
                  >
                    En savoir plus
                    <svg className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectGallery;
