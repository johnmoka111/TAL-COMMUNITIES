import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    need: 'tech-dev', // Default option matching the first department
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API submission
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', need: 'tech-dev', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Grid layout */}
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-tal-orange">
                Contactez-nous
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-tal-navy sm:text-4xl dark:text-white">
                Co-créons l'avenir de votre entreprise
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-350">
                Une idée ? Un besoin de développement logiciel, de formation ou de communication professionnelle ? Notre équipe est prête à vous accompagner.
              </p>

              {/* Direct Info list */}
              <div className="mt-8 space-y-6">
                
                {/* Physical address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-tal-navy/10 p-3 text-tal-navy dark:text-tal-orange dark:bg-tal-navy/20">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Adresse physique</h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      Av. Patrice Emery Lumumba, n°145, Réf. TAL Hub, Bukavu, Sud-Kivu, RDC
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-tal-orange/10 p-3 text-tal-orange dark:bg-tal-orange/20">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Email Professionnel</h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-350">
                      <a href="mailto:tal.communities@gmail.com" className="hover:text-tal-orange transition-colors">
                        tal.communities@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-tal-navy/10 p-3 text-tal-navy dark:text-tal-orange dark:bg-tal-navy/20">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">WhatsApp Direct</h4>
                    <p className="mt-1 text-sm text-slate-650 dark:text-slate-350">
                      <a href="https://wa.me/243981430687" target="_blank" rel="noopener noreferrer" className="hover:text-tal-orange transition-colors">
                        +243 981 430 687
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Slogan details */}
            <div className="hidden lg:block mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">TAL Slogan</span>
              <p className="text-lg font-bold text-tal-navy dark:text-slate-200 mt-1 italic">
                " Former. Créer. Connecter. "
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-tal-orange/10 p-4 text-tal-orange mb-4 animate-bounce">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message envoyé avec succès !</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Merci pour votre message. Un membre de notre équipe vous répondra dans les plus brefs délais (généralement en moins de 24h).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-350 mb-2">
                      Nom complet <span className="text-tal-orange">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex. John Doe"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-tal-orange focus:bg-white focus:outline-none focus:ring-1 focus:ring-tal-orange dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-tal-orange"
                    />
                  </div>

                  {/* Company field */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-slate-700 dark:text-slate-350 mb-2">
                      Entreprise ou Projet
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ex. TAL Solutions"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-tal-orange focus:bg-white focus:outline-none focus:ring-1 focus:ring-tal-orange dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-tal-orange"
                    />
                  </div>

                  {/* Need selection dropdown */}
                  <div>
                    <label htmlFor="need" className="block text-sm font-bold text-slate-700 dark:text-slate-350 mb-2">
                      Besoin principal <span className="text-tal-orange">*</span>
                    </label>
                    <select
                      name="need"
                      id="need"
                      value={formData.need}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-tal-orange focus:bg-white focus:outline-none focus:ring-1 focus:ring-tal-orange dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-tal-orange"
                    >
                      <option value="tech-dev">Technologie & Développement (Logiciel/ERP)</option>
                      <option value="academy">Formations & TAL Academy</option>
                      <option value="media-comm">Média & Communication</option>
                      <option value="arts">Arts, Création & Design</option>
                      <option value="event">Événementiel & Décoration</option>
                      <option value="science-languages">Langues & Assistance Scientifique</option>
                      <option value="agrovet">AgroVet (Elevage/Agriculture)</option>
                      <option value="other">Autre demande</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-350 mb-2">
                      Votre Message <span className="text-tal-orange">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez brièvement votre projet ou votre demande..."
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-tal-orange focus:bg-white focus:outline-none focus:ring-1 focus:ring-tal-orange dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-tal-orange"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-xl bg-tal-navy py-4 px-6 text-sm font-bold text-white shadow-md hover:bg-tal-navy/90 transition-colors dark:bg-tal-orange dark:hover:bg-tal-orange/90"
                  >
                    Envoyer ma demande
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/243981430687?text=Bonjour%20TAL%20Communities%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.%20J%27ai%20un%20projet%20ou%20une%20demande%20concernant%20%3A%20%5BPr%C3%A9cisez%20ici%20votre%20besoin%5D.%20Merci%20d%27avance%20pour%20votre%20accompagnement%20%21"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-110 active:scale-95 animate-pulse"
        aria-label="Discuter sur WhatsApp"
        style={{ animationDuration: '3s' }}
      >
        {/* WhatsApp Icon */}
        <svg 
          className="h-7 w-7 fill-current" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.115-2.905-6.99C16.555 1.875 14.09 .843 11.473.843c-5.437 0-9.862 4.421-9.865 9.865-.001 1.77.475 3.503 1.378 5.03L1.93 21.055l5.525-1.449-1.393-.846-.415-.251zm12.5-3.843c-.29-.145-1.71-.845-1.975-.94-.266-.097-.46-.145-.653.146-.193.29-.747.94-.916 1.13-.169.195-.338.22-.628.075-.29-.146-1.226-.452-2.334-1.442-.862-.77-1.443-1.72-1.612-2.012-.17-.29-.018-.447.127-.59.13-.13.29-.338.435-.507.145-.17.193-.29.29-.483.097-.193.048-.36-.024-.507-.072-.145-.653-1.573-.895-2.152-.236-.569-.475-.492-.653-.501-.17-.008-.361-.01-.553-.01-.193 0-.507.072-.772.36-.265.29-1.013.99-1.013 2.415 0 1.425 1.037 2.802 1.182 2.996.145.193 2.04 3.115 4.943 4.373.69.3 1.23.478 1.649.61.693.22 1.325.19 1.824.115.557-.082 1.71-.699 1.952-1.375.24-.677.24-1.256.169-1.375-.07-.12-.265-.19-.555-.337z"/>
        </svg>
      </a>

    </section>
  );
};

export default ContactForm;
