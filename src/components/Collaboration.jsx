import React from 'react';

const WA_NUMBER = '243981430687';
const EMAIL = 'tal.communities@gmail.com';

// Encode a WhatsApp message
const wa = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// Encode an email link
const mail = (subject, body) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const options = [
  {
    id: "apprenant",
    title: "Apprenant",
    tagline: "Pour ceux qui veulent se former",
    description: "Rejoignez la TAL Academy pour acquérir des compétences pratiques en programmation, design, langues ou méthodologie de recherche.",
    cta: "S'inscrire à une formation",
    ctaType: "whatsapp",
    href: wa(
      "Bonjour TAL Communities,\n\nJe souhaite m'inscrire à une formation à la TAL Academy.\n\nDomaine d'intérêt : [Précisez : Programmation / Design / Langues / Couture / Autre]\nNiveau actuel : [Débutant / Intermédiaire / Avancé]\n\nMerci de me renseigner sur les prochaines sessions disponibles."
    ),
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
    ctaType: "email",
    href: mail(
      "Soumission de profil Expert — TAL Communities",
      "Bonjour TAL Communities,\n\nJe souhaite soumettre mon profil en tant qu'expert indépendant pour collaborer avec votre équipe.\n\nNom complet : \nDomaine d'expertise : \nAnnées d'expérience : \nDisponibilité : \nLien portfolio / LinkedIn : \n\nCordialement,"
    ),
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
    ctaType: "whatsapp",
    href: wa(
      "Bonjour TAL Communities,\n\nNous sommes intéressés par un partenariat avec votre structure.\n\nNom de l'entreprise : \nSecteur d'activité : \nBesoin principal : [Développement logiciel / Communication / Design / Autre]\nBudget estimé : \n\nNous souhaitons discuter des modalités de collaboration. Merci."
    ),
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
    ctaType: "email",
    href: mail(
      "Candidature Mentor — TAL Communities",
      "Bonjour TAL Communities,\n\nJe souhaite devenir mentor au sein de TAL Communities et accompagner de jeunes talents.\n\nNom complet : \nDomaine d'expertise : \nAnnées d'expérience : \nDisponibilité hebdomadaire (heures) : \nMotivation en quelques mots : \n\nCordialement,"
    ),
    icon: (
      <svg className="h-6 w-6 text-tal-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

// Icons for the CTA button label
const WhatsAppIcon = () => (
  <svg className="h-3.5 w-3.5 fill-current flex-shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

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
                href={option.href}
                target={option.ctaType === 'whatsapp' ? '_blank' : undefined}
                rel={option.ctaType === 'whatsapp' ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-750 py-2.5 px-4 text-xs font-bold text-slate-700 hover:bg-tal-navy hover:text-white hover:border-tal-navy dark:text-slate-250 dark:hover:bg-tal-orange dark:hover:text-white dark:hover:border-tal-orange transition-colors"
              >
                {option.ctaType === 'whatsapp' ? <WhatsAppIcon /> : <EmailIcon />}
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
