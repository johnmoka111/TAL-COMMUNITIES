import React, { useState } from 'react';
import { teamMembers } from '../data/teamData';
import TeamCard from './TeamCard';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section 
      id="equipe" 
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-tal-orange">
            Notre Équipe
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-tal-navy sm:text-4xl dark:text-white">
            Qui pilote la vision de TAL Communities ?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-tal-orange rounded-full" />
          <p className="mt-5 text-lg text-slate-650 dark:text-slate-350">
            Découvrez les visages et les esprits créatifs derrière notre écosystème d'innovation à Bukavu. Une synergie d'expertises au service de la région.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              onOpenDetail={(m) => setSelectedMember(m)}
            />
          ))}
        </div>

      </div>

      {/* Profile Detail Slide-over Panel (Simulated Page) */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedMember(null)}
        >
          {/* Main Slide-over Panel Container */}
          <div 
            className="w-full max-w-lg bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-out animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Cover */}
            <div>
              <div className="relative">
                {/* Image */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Close floating button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 rounded-full bg-slate-950/75 p-2 text-white hover:bg-slate-950 transition-colors shadow-md"
                  aria-label="Fermer"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Identity details */}
              <div className="p-8">
                <span className="inline-block rounded bg-tal-orange/10 px-2.5 py-1 text-xs font-bold text-tal-orange uppercase tracking-wider mb-2">
                  {selectedMember.role}
                </span>
                
                <h3 className="text-3xl font-extrabold text-tal-navy dark:text-white leading-tight">
                  {selectedMember.name}
                </h3>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Biographie</h4>
                  <p className="text-base leading-relaxed text-slate-650 dark:text-slate-300">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Specialties tags */}
                {selectedMember.specialties && (
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Spécialités</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specialties.map((spec, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contacts Footer section */}
            <div className="p-8 bg-slate-55/50 dark:bg-slate-850/50 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Contacts Professionnels</h4>
              
              <div className="space-y-4">
                {/* Email link */}
                <a 
                  href={`mailto:${selectedMember.email}`}
                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-tal-orange dark:text-slate-300 dark:hover:text-tal-orange transition-colors"
                >
                  <div className="rounded-lg bg-white dark:bg-slate-800 p-2 shadow-sm border border-slate-100 dark:border-slate-750">
                    <svg className="h-4 w-4 text-tal-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest leading-none mb-0.5">E-mail</span>
                    <span className="font-semibold">{selectedMember.email}</span>
                  </div>
                </a>

                {/* Phone link */}
                <a 
                  href={`tel:${selectedMember.phone}`}
                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-tal-orange dark:text-slate-300 dark:hover:text-tal-orange transition-colors"
                >
                  <div className="rounded-lg bg-white dark:bg-slate-800 p-2 shadow-sm border border-slate-100 dark:border-slate-750">
                    <svg className="h-4 w-4 text-tal-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest leading-none mb-0.5">Téléphone / WhatsApp</span>
                    <span className="font-semibold">{selectedMember.phone}</span>
                  </div>
                </a>

                {/* LinkedIn Link */}
                <a 
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-tal-orange dark:text-slate-300 dark:hover:text-tal-orange transition-colors"
                >
                  <div className="rounded-lg bg-white dark:bg-slate-800 p-2 shadow-sm border border-slate-100 dark:border-slate-750">
                    <svg className="h-4 w-4 text-tal-orange fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest leading-none mb-0.5">LinkedIn</span>
                    <span className="font-semibold">Profil LinkedIn</span>
                  </div>
                </a>

                {/* Facebook Link */}
                {selectedMember.facebook && (
                  <a 
                    href={selectedMember.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-700 hover:text-tal-orange dark:text-slate-300 dark:hover:text-tal-orange transition-colors"
                  >
                    <div className="rounded-lg bg-white dark:bg-slate-800 p-2 shadow-sm border border-slate-100 dark:border-slate-750">
                      <svg className="h-4 w-4 text-tal-orange fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest leading-none mb-0.5">Facebook</span>
                      <span className="font-semibold">Profil Facebook</span>
                    </div>
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedMember(null)}
                className="mt-6 w-full rounded-xl bg-tal-navy dark:bg-tal-orange text-white py-3 font-bold hover:opacity-90 transition-opacity"
              >
                Fermer la fiche
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
