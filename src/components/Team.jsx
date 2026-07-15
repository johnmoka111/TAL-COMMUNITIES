import React from 'react';
import { teamMembers } from '../data/teamData';
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <section 
      id="equipe" 
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-tal-orange">
            Notre Équipe
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-tal-navy sm:text-4xl dark:text-white">
            Qui pilote la vision de TAL Communities ?
          </p>
          <div className="mx-auto mt-4 h-1 w-16 bg-tal-orange rounded-full" />
          <p className="mt-5 text-lg text-slate-650 dark:text-slate-350">
            Découvrez les visages et les esprits créatifs derrière notre écosystème d'innovation à Bukavu. Une synergie d'expertises au service de la région.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
