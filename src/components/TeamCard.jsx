import React from 'react';

const TeamCard = ({ member }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-800 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700/50 hover:border-tal-orange/50">
      
      {/* Decorative brand color background overlay that appears on hover */}
      <div className="absolute inset-0 -z-10 bg-tal-navy/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-tal-navy/10" />

      {/* Image container with zoom effect */}
      <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-xl">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle overlay on the image */}
        <div className="absolute inset-0 bg-slate-900/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <span className="text-xs font-bold uppercase tracking-wider text-tal-orange mb-1">
          {member.role}
        </span>
        
        <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-tal-orange">
          {member.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 flex-grow">
          {member.bio}
        </p>

        {/* Technical/Functional specialties tags */}
        {member.specialties && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {member.specialties.map((spec, index) => (
              <span 
                key={index} 
                className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-650 dark:bg-slate-700/40 dark:text-slate-400 border border-slate-100 dark:border-slate-800"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        {/* Footer with LinkedIn Link */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-tal-orange dark:text-slate-400 dark:hover:text-tal-orange transition-colors duration-200"
            aria-label={`Visiter le profil LinkedIn de ${member.name}`}
          >
            {/* LinkedIn SVG Icon */}
            <svg 
              className="h-4.5 w-4.5 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn Profile</span>
          </a>

          {/* Micro interaction indicator */}
          <span className="opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-tal-orange">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
