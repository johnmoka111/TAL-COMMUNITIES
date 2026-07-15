import React from 'react';

const options = [
  {
    id: "apprenant",
    title: "Apprenant",
    tagline: "Pour ceux qui veulent se former",
    description: "Rejoignez la TAL Academy pour acquérir des compétences pratiques en programmation, design, langues ou méthodologie de recherche.",
    cta: "S'inscrire à une formation",
    icon: (
      <svg className="h-6 w-6 text-tal-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: "expert",
    title: "Expert Indépendant",
    tagline: "Pour collaborer sur nos projets",
    description: "Apportez votre expertise technique ou artistique et travaillez avec nous sur des projets locaux et internationaux stimulants.",
    cta: "Soumettre son profil",
    icon: (
      <svg className="h-6 w-6 text-tal-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    id: "partenaire",
    title: "Entreprise Partenaire",
    tagline: "Pour déléguer votre informatique & com",
    description: "Externalisez le développement de vos logiciels, votre communication d'entreprise ou vos besoins en design à nos pôles d'experts.",
    cta: "Discuter d'un partenariat",
    icon: (
      <svg className="h-6 w-6 text-tal-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: "mentor",
    title: "Mentor",
    tagline: "Pour accompagner les juniors",
    description: "Partagez votre expérience avec de jeunes passionnés et contribuez activement au développement technologique de la RDC.",
    cta: "Devenir mentor",
    icon: (
      <svg className="h-6 w-6 text-tal-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

const Collaboration = () => {
  return (
    <section 
      id="adhesion" 
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-tal-orange">
            Adhésion & Collaboration
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-tal-navy sm:text-4xl dark:text-white">
            Comment rejoindre l'écosystème TAL ?
          </p>
          <div className="mx-auto mt-4 h-1 w-16 bg-tal-orange rounded-full" />
          <p className="mt-5 text-lg text-slate-605 dark:text-slate-350">
            Que vous soyez étudiant en quête de formation, professionnel aguerri, ou entreprise cherchant des solutions fiables, il existe un parcours conçu pour vous.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => (
            <div 
              key={option.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-6 shadow-sm hover:shadow-md transition-all duration-300 dark:border-slate-800 dark:bg-slate-850/50 dark:hover:border-slate-700/80"
            >
              <div>
                <div className="inline-flex rounded-lg bg-white dark:bg-slate-800 p-2.5 shadow-sm mb-4">
                  {option.icon}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {option.title}
                </h3>
                
                <p className="text-xs font-bold text-tal-orange mb-3">
                  {option.tagline}
                </p>
                
                <p className="text-sm leading-relaxed text-slate-650 dark:text-slate-300 mb-6">
                  {option.description}
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-750 py-2.5 px-4 text-xs font-bold text-slate-700 hover:bg-tal-navy hover:text-white hover:border-tal-navy dark:text-slate-250 dark:hover:bg-tal-orange dark:hover:text-white dark:hover:border-tal-orange transition-colors"
              >
                {option.cta}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Collaboration;
