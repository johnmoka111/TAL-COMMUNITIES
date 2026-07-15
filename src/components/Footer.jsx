import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 dark:bg-slate-950 transition-colors duration-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Brand details */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#accueil" className="flex items-center gap-3">
              <img src={logo} alt="TAL Hub Logo" className="h-12 w-12 object-contain rounded-full bg-white p-0.5" />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-wider text-white leading-none">
                  TAL Hub
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mt-1 leading-none">
                  Communities
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-slate-450 max-w-md">
              TAL Communities est un écosystème d'innovation, d'apprentissage et de création basé à Bukavu (Est de la RDC). Nous fédérons des talents pour accélérer le développement technologique régional.
            </p>
            <div className="text-sm font-bold text-tal-orange italic">
              " Former. Créer. Connecter. "
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-4">
              Raccourcis
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-sm hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#apropos" className="text-sm hover:text-white transition-colors">À Propos</a>
              </li>
              <li>
                <a href="#expertises" className="text-sm hover:text-white transition-colors">Nos Pôles</a>
              </li>
              <li>
                <a href="#projets" className="text-sm hover:text-white transition-colors">Nos Réalisations</a>
              </li>
              <li>
                <a href="#equipe" className="text-sm hover:text-white transition-colors">L'Équipe</a>
              </li>
            </ul>
          </div>

          {/* Social Proof & Networks */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-4">
                Suivez-nous
              </h3>
              <div className="flex flex-wrap gap-3">
                
                {/* LinkedIn Link */}
                <a 
                  href="https://www.linkedin.com/in/tal-communities-b86055416?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-lg bg-slate-800 p-2.5 hover:bg-tal-orange hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* Facebook Link */}
                <a 
                  href="https://www.facebook.com/share/1BnNWeKgwf/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-lg bg-slate-800 p-2.5 hover:bg-tal-orange hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram Link */}
                <a 
                  href="https://www.instagram.com/talcommunities?igsh=MWtqeWoyZnA1a3luZQ==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-lg bg-slate-800 p-2.5 hover:bg-tal-orange hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>

                {/* WhatsApp Link */}
                <a 
                  href="https://wa.me/243981430687?text=Bonjour%20TAL%20Communities%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.%20J%27ai%20un%20projet%20ou%20une%20demande%20concernant%20%3A%20%5BPr%C3%A9cisez%20ici%20votre%20besoin%5D.%20Merci%20d%27avance%20pour%20votre%20accompagnement%20%21" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-lg bg-slate-800 p-2.5 hover:bg-tal-orange hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.115-2.905-6.99C16.555 1.875 14.09 .843 11.473.843c-5.437 0-9.862 4.421-9.865 9.865-.001 1.77.475 3.503 1.378 5.03L1.93 21.055l5.525-1.449-1.393-.846-.415-.251zm12.5-3.843c-.29-.145-1.71-.845-1.975-.94-.266-.097-.46-.145-.653.146-.193.29-.747.94-.916 1.13-.169.195-.338.22-.628.075-.29-.146-1.226-.452-2.334-1.442-.862-.77-1.443-1.72-1.612-2.012-.17-.29-.018-.447.127-.59.13-.13.29-.338.435-.507.145-.17.193-.29.29-.483.097-.193.048-.36-.024-.507-.072-.145-.653-1.573-.895-2.152-.236-.569-.475-.492-.653-.501-.17-.008-.361-.01-.553-.01-.193 0-.507.072-.772.36-.265.29-1.013.99-1.013 2.415 0 1.425 1.037 2.802 1.182 2.996.145.193 2.04 3.115 4.943 4.373.69.3 1.23.478 1.649.61.693.22 1.325.19 1.824.115.557-.082 1.71-.699 1.952-1.375.24-.677.24-1.256.169-1.375-.07-.12-.265-.19-.555-.337z"/>
                  </svg>
                </a>

                {/* Email Link */}
                <a 
                  href="mailto:tal.communities@gmail.com" 
                  className="rounded-lg bg-slate-800 p-2.5 hover:bg-tal-orange hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>

              </div>
            </div>

            {/* Verification & Trust */}
            <div className="rounded-xl bg-slate-800 p-4 border border-slate-750 text-xs">
              <span className="font-bold text-slate-305 block mb-1">Confiance & Partenariat</span>
              Notre écosystème collabore avec des universités, des incubateurs locaux et des clients technologiques internationaux pour certifier la qualité de nos formations et livrables.
            </div>
          </div>

        </div>

        {/* Copyright info */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} TAL Communities. Tous droits réservés. Conçu et développé localement.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
