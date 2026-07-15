import React from 'react';

const Hero = () => {
  return (
    <section 
      id="accueil" 
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Decorative background shapes with flat brand colors */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-tal-navy/10 blur-3xl dark:bg-tal-navy/5 pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-tal-orange/10 blur-3xl dark:bg-tal-orange/5 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        
        {/* Badge - Slogan */}
        <div className="inline-flex items-center gap-2 rounded-full border border-tal-orange/30 bg-tal-orange/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-tal-navy dark:bg-tal-orange/10 dark:text-tal-orange mb-8">
          <span>Former</span>
          <span className="h-1.5 w-1.5 rounded-full bg-tal-orange"></span>
          <span>Créer</span>
          <span className="h-1.5 w-1.5 rounded-full bg-tal-orange"></span>
          <span>Connecter</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-tal-navy sm:text-6xl dark:text-white max-w-4xl mx-auto leading-none mb-6">
          Propulsez vos projets au sein de l'écosystème{' '}
          <span className="text-tal-orange block mt-2">
            TAL Communities
          </span>
        </h1>

        {/* Value Proposition Subtext */}
        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-655 dark:text-slate-350 leading-relaxed">
          Le catalyseur d'innovation de l'Est de la RDC. Nous accompagnons le talent, formons les leaders de demain et développons des solutions numériques d'envergure mondiale.
        </p>

        {/* Calls to Action */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#expertises"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-tal-navy px-8 py-4 text-base font-bold text-white shadow-lg shadow-tal-navy/20 hover:bg-tal-navy/90 transition-all hover:scale-105 active:scale-95 dark:bg-tal-orange dark:hover:bg-tal-orange/90"
          >
            Découvrir nos pôles
          </a>
          <a
            href="#adhesion"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border-2 border-slate-300 bg-white/50 backdrop-blur-sm px-8 py-3.5 text-base font-bold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
          >
            Rejoindre l'écosystème
          </a>
        </div>

        {/* Small stats highlight for credibility */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-10 border-t border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-3xl font-black text-tal-navy dark:text-tal-orange">7</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Départements</div>
          </div>
          <div>
            <div className="text-3xl font-black text-tal-navy dark:text-tal-orange">10+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Projets Lancés</div>
          </div>
          <div>
            <div className="text-3xl font-black text-tal-navy dark:text-tal-orange">1000+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Apprenants Formés</div>
          </div>
          <div>
            <div className="text-3xl font-black text-tal-navy dark:text-tal-orange">100%</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">Engagement Local</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
