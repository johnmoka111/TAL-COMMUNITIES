import React from 'react';
import aboutPhoto from '../assets/gallerie/P4.jpg';

const About = () => {
  return (
    <section 
      id="apropos" 
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-tal-orange">
              À Propos de Nous
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-tal-navy sm:text-4xl dark:text-white">
              Une passerelle technologique, artistique et linguistique
            </h2>
            <div className="h-1 w-16 bg-tal-orange rounded-full" />
            
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Né de l'initiative de créer un pôle d'excellence au Sud-Kivu,{' '}
              <strong className="text-tal-navy dark:text-white">TAL Communities</strong>{' '}
              — où <strong className="text-tal-orange">TAL</strong> signifie{' '}
              <strong className="text-tal-orange">Tech, Arts and Languages</strong> — est une organisation hybride
              qui fusionne les compétences technologiques de pointe, la création artistique et
              l'apprentissage des langues sous toutes leurs formes pour accélérer le développement régional.
            </p>

            {/* Mission & Vision bullet points */}
            <div className="space-y-4 pt-4">
              {/* Mission */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-tal-navy/10 text-tal-navy dark:bg-tal-navy/35 dark:text-tal-grey">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Notre Mission</h3>
                  <p className="mt-1 text-sm text-slate-650 dark:text-slate-350">
                    Former les compétences locales indispensables au marché numérique mondial, créer des outils technologiques de pointe et connecter notre écosystème aux opportunités globales.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-tal-orange/10 text-tal-orange dark:bg-tal-orange/20 dark:text-tal-orange">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Notre Vision</h3>
                  <p className="mt-1 text-sm text-slate-655 dark:text-slate-350">
                    Faire de la région du Kivu et de la RDC un carrefour incontournable d'innovation et de création, autonome et compétitif à l'échelle internationale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Side — image from gallery */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-tal-navy opacity-10 blur-xl group-hover:opacity-20 transition-opacity pointer-events-none" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-850 p-2">
              <img 
                src={aboutPhoto}
                alt="Activités au sein de TAL Communities" 
                className="w-full rounded-xl object-cover aspect-[4/3]"
                loading="lazy"
              />
              {/* Interactive badge over photo */}
              <div className="absolute bottom-6 left-6 rounded-xl bg-slate-900/90 backdrop-blur-sm p-4 text-white max-w-xs border border-slate-700/50">
                <span className="text-xs font-semibold text-tal-orange uppercase tracking-widest block">Notre Impact</span>
                <p className="text-sm font-medium mt-1 leading-snug">
                  Une communauté active travaillant au quotidien pour le progrès et la modernisation locale.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
