import React, { useState } from 'react';
import { galleryItems } from '../data/galleryData';

const Gallery = () => {
  const [filter, setFilter] = useState('Tous');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Extract unique categories for filtering
  const categories = ['Tous', ...new Set(galleryItems.map(item => item.category))];

  // Filter items based on active category selection
  const filteredItems = filter === 'Tous' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section 
      id="galerie" 
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-tal-orange">
            Notre Vie en Images
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-tal-navy sm:text-4xl dark:text-white">
            Immersion au cœur de TAL Communities
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-tal-orange rounded-full" />
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-350">
            Découvrez nos formations, nos séances de création artistique, nos réunions administratives et la vie de notre écosystème à Bukavu.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-xl px-4 py-2 text-sm font-bold transition-all ${
                filter === cat 
                  ? 'bg-tal-navy text-white dark:bg-tal-orange dark:text-white shadow-md' 
                  : 'bg-slate-100 text-slate-650 hover:bg-slate-205 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-md cursor-pointer border border-slate-100 dark:border-slate-800 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="inline-block rounded bg-tal-orange px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider w-fit mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-200 line-clamp-2">
                  {item.description}
                </p>
                <span className="mt-3 text-[11px] font-bold text-tal-orange inline-flex items-center gap-1">
                  Agrandir la photo
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Fermer"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal content */}
          <div 
            className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full md:w-2/3 aspect-[4/3] md:aspect-auto md:h-[500px] overflow-hidden bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/3 p-8 flex flex-col justify-between dark:text-white">
              <div>
                <span className="inline-block rounded-full bg-tal-orange/10 px-3 py-1 text-xs font-bold text-tal-orange uppercase tracking-wider mb-4">
                  {selectedPhoto.category}
                </span>
                <h3 className="text-2xl font-extrabold text-tal-navy dark:text-white leading-tight">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">TAL Communities Galerie</span>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="text-xs font-bold text-tal-orange hover:underline"
                >
                  Fermer l'aperçu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
