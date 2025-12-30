import React, { useState, useEffect, useRef } from 'react';
import { Monitor, PenTool, Armchair as Chair, Layers, FileText, Menu, X, ArrowRight, ArrowLeft, Mail, MapPin, Phone, Calendar, CheckCircle, Users, Search, Wrench, ShieldCheck, ShoppingBag, Plus, Minus, Utensils, Package, MessageCircle, Building2, CreditCard, MessageSquare } from 'lucide-react';
import ProductPreviewFan, { ProductCategory } from "./ProductPreviewFan";
import { generateCheckoutPDF } from './utils/generatePDF';

const Header = ({ onEcommerce }: { onEcommerce?: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`text-2xl md:text-3xl tracking-tighter transition-all duration-300 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <span className="font-display font-black text-dark-gray">Ditta</span>
              <span className="font-sans font-medium text-primary ml-0.5">Ferrosi</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('settori')} className="relative text-dark-gray hover:text-primary transition-all duration-300 font-semibold group">
              Settori
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('approccio')} className="relative text-dark-gray hover:text-primary transition-all duration-300 font-semibold group">
              Approccio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('catalogo')} className="relative text-dark-gray hover:text-primary transition-all duration-300 font-semibold group">
              Catalogo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={onEcommerce} className="relative text-dark-gray hover:text-primary transition-all duration-300 font-semibold group">
              Ecommerce
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('contatti')} className="bg-dark-gray text-white px-8 py-3 rounded-full hover:bg-primary transition-all duration-300 font-medium tracking-wide">
              Contatti
            </button>
          </nav>

          <button
            className="md:hidden relative z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-primary/20 pt-6 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('settori')} className="text-left text-dark-gray hover:text-primary transition-colors font-semibold">
                Settori
              </button>
              <button onClick={() => scrollToSection('approccio')} className="text-left text-dark-gray hover:text-primary transition-colors font-semibold">
                Approccio
              </button>
              <button onClick={() => scrollToSection('catalogo')} className="text-left text-dark-gray hover:text-primary transition-colors font-semibold">
                Catalogo
              </button>
              <button onClick={() => scrollToSection('contatti')} className="text-left bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 w-fit font-semibold">
                Contatti
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const HeroSection = () => {
  /* Scroll listener removed as parallax is disabled */

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] bg-white overflow-hidden flex flex-col justify-center pt-32 pb-20">
      {/* Background Abstract Elements */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gray-100 rounded-full blur-[80px] transform -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Super Bold Typography */}
          <h1 className="font-display font-bold text-[12vw] leading-[0.8] tracking-tighter text-dark-gray mb-8 uppercase break-words">
            Soluzioni
            <span className="block text-primary ml-[10vw]">Concrete</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end mt-12">
            <div className="space-y-8">
              <p className="font-sans text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-md">
                Trasformiamo le tue necessità aziendali in realtà operative.
                <span className="font-semibold text-dark-gray"> Informatica, Arredo, Horeca e Forniture</span>: un unico partner, eccellenza infinita.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contatti')}
                  className="font-display font-bold text-lg bg-dark-gray text-white px-10 py-5 rounded-full hover:bg-primary transition-all duration-300 flex items-center group"
                >
                  Inizia il Progetto
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('settori')}
                  className="font-display font-bold text-lg bg-transparent border-2 border-dark-gray text-dark-gray px-10 py-5 rounded-full hover:bg-dark-gray hover:text-white transition-all duration-300"
                >
                  Esplora
                </button>
              </div>
            </div>

            {/* Abstract Statistic / Visual Element */}
            <div className="hidden md:block">
              <div className="relative bg-cream p-10 rounded-t-[3rem] border-t border-x border-gray-200 shadow-xl ml-auto max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="font-display font-black text-6xl text-primary mb-2">98%</div>
                <div className="font-sans text-gray-500 font-medium uppercase tracking-widest text-sm border-t border-gray-300 pt-4 mt-2">
                  Clienti Soddisfatti
                </div>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Il nostro impegno per la qualità e la precisione ci ha reso il partner di fiducia per centinaia di aziende in tutta Italia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SettoriPrincipali = () => {
  const settori = [
    {
      id: 'informatica',
      title: "Informatica professionale",
      desc: "Soluzioni hardware e software per il tuo business.",
      icon: Monitor,
      className: 'md:col-span-2 md:row-span-2 bg-dark-gray text-white min-h-[400px]',
      iconClass: 'text-primary w-16 h-16',
      tags: ['Hardware', 'Software', 'Networking']
    },
    {
      id: 'arredo',
      title: 'Arredo Ufficio',
      desc: 'Design e funzionalità per il tuo spazio.',
      icon: Chair,
      className: 'md:col-span-2 bg-gray-100 text-dark-gray min-h-[250px]',
      iconClass: 'text-dark-gray w-10 h-10',
      tags: ['Scrivanie', 'Sedute', 'Parete']
    },
    {
      id: 'forniture',
      title: 'Forniture',
      desc: 'Cancelleria e consumabili.',
      icon: FileText,
      className: 'bg-white border border-gray-200 text-dark-gray min-h-[250px]',
      iconClass: 'text-primary w-8 h-8',
      tags: []
    },
    {
      id: 'alimentare',
      title: 'Horeca',
      desc: 'Attrezzature professionali.',
      icon: Layers,
      className: 'bg-primary text-white min-h-[250px]',
      iconClass: 'text-white w-8 h-8',
      tags: []
    }
  ];

  return (
    <section id="settori" className="py-24 bg-white relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="font-display font-bold text-5xl md:text-7xl text-dark-gray leading-none">
            I Nostri <br /> <span className="text-primary">Settori</span>
          </h2>
          <p className="font-sans text-gray-500 max-w-sm text-right mt-6 md:mt-0">
            Esplora le nostre aree di competenza. Tutto ciò che serve alla tua azienda, in un'unica soluzione.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
          {settori.map((card) => (
            <div
              key={card.id}
              className={`relative group rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${card.className}`}
              onClick={() => {
                const element = document.getElementById('catalogo');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="relative z-10 flex justify-between items-start">
                <card.icon className={`${card.iconClass} mb-4 transition-transform duration-500 group-hover:scale-110`} />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                  <ArrowRight className={`w-5 h-5 ${card.id === 'forniture' || card.id === 'arredo' ? 'text-dark-gray' : 'text-white'}`} />
                </div>
              </div>

              <div className="relative z-10 space-y-2">
                <h3 className="font-display font-bold text-2xl md:text-3xl">{card.title}</h3>
                <p className={`font-sans text-sm md:text-base font-medium opacity-80 max-w-[80%]`}>{card.desc}</p>

                {card.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                    {card.tags.map(tag => (
                      <span key={tag} className="text-xs uppercase tracking-wider font-bold opacity-60">#{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Abstract Hover Decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ApproccioLavoro = () => {
  const steps = [
    {
      num: '01',
      title: 'Analisi & Consulenza',
      desc: 'Ascoltiamo le tue necessità e analizziamo i flussi operativi per identificare le soluzioni migliori.',
      icon: Search
    },
    {
      num: '02',
      title: 'Progettazione Su Misura',
      desc: 'Sviluppiamo un piano d\'azione personalizzato, selezionando prodotti e servizi in linea con il tuo budget.',
      icon: PenTool
    },
    {
      num: '03',
      title: 'Implementazione',
      desc: 'Consegna, installazione e configurazione a cura del nostro team tecnico specializzato.',
      icon: Wrench
    },
    {
      num: '04',
      title: 'Supporto Continuo',
      desc: 'Assistenza post-vendita e manutenzione programmata per garantire sempre la massima efficienza.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="approccio" className="py-32 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-display font-black text-5xl md:text-6xl text-white mb-6">
            Il Nostro <span className="text-primary">Metodo</span>
          </h2>
          <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto">
            Un processo collaudato per garantirti risultati eccellenti, passo dopo passo.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Content Side */}
                <div className="flex-1 w-full pl-16 md:pl-0 md:text-right">
                  <div className={`md:px-12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="font-display font-bold text-3xl text-white mb-4">{step.title}</h3>
                    <p className="font-sans text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-0 top-0 md:relative md:flex-none w-8 h-8 md:w-16 md:h-16 rounded-full bg-dark-gray border-4 border-gray-800 flex items-center justify-center z-10 transform md:translate-x-0">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Number / Decorative Side */}
                <div className="flex-1 w-full md:px-12 hidden md:block">
                  <div className={`font-display font-black text-8xl text-white/5 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {step.num}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-16">
          <div className="text-center">
            <div className="text-4xl font-display font-black text-white mb-2">98%</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">SLA Rispettati</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-black text-white mb-2">24h</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Tempo Risposta</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-black text-white mb-2">100%</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Trasparenza</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-display font-black text-white mb-2">0</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Sorprese</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerSection = () => {
  const partners = [
    { name: 'Dell', color: 'hover:text-[#007DB8]' },
    { name: 'HP', color: 'hover:text-[#0096D6]' },
    { name: 'Lenovo', color: 'hover:text-[#E2231A]' },
    { name: 'Kyocera', color: 'hover:text-[#CF1F3B]' },
    { name: 'Samsung', color: 'hover:text-[#1428A0]' },
    { name: 'Microsoft', color: 'hover:text-[#F25022]' }
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-10">
          Partner Certificati
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80">
          {partners.map((partner, index) => (
            <div key={index} className={`font-display font-bold text-3xl transition-colors duration-300 ${partner.color} cursor-pointer`}>
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CatalogoSettori = ({ onQuoteRequest }: { onQuoteRequest: () => void }) => {
  const cataloghi = [
    {
      titolo: 'Informatica',
      descrizione: 'Hardware e software per il business.',
      icon: Monitor,
      bgHover: 'group-hover:bg-blue-600',
      textHover: 'group-hover:text-blue-200'
    },
    {
      titolo: 'Arredo',
      descrizione: 'Design e comfort per i tuoi spazi.',
      icon: Chair,
      bgHover: 'group-hover:bg-emerald-600',
      textHover: 'group-hover:text-emerald-200'
    },
    {
      titolo: 'Forniture',
      descrizione: 'Cancelleria e materiali di consumo.',
      icon: Package,
      bgHover: 'group-hover:bg-amber-500',
      textHover: 'group-hover:text-amber-200'
    },
    {
      titolo: 'Horeca',
      descrizione: 'Soluzioni per la ristorazione.',
      icon: Utensils,
      bgHover: 'group-hover:bg-rose-500',
      textHover: 'group-hover:text-rose-200'
    }
  ];

  return (
    <section id="catalogo" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Il Nostro Catalogo</span>
            <h2 className="font-display font-black text-5xl md:text-7xl text-dark-gray leading-none">
              Esplora per <br />Categoria.
            </h2>
          </div>
          <p className="font-sans text-gray-400 text-lg max-w-sm text-right mt-8 md:mt-0 leading-relaxed hidden md:block">
            Naviga tra le nostre sezioni specializzate. Un ecosistema di prodotti pensato per ogni tua esigenza professionale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cataloghi.map((cat, index) => (
            <div
              key={index}
              className={`group relative p-8 h-[400px] flex flex-col justify-between rounded-[2rem] bg-gray-50 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 ${cat.bgHover}`}
              onClick={onQuoteRequest}
            >
              {/* Giant Icon Background */}
              <cat.icon className="absolute -bottom-10 -right-10 w-64 h-64 text-gray-200/50 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 group-hover:text-white/10" strokeWidth={0.5} />

              {/* Icon Header */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <cat.icon className="w-8 h-8 text-dark-gray" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-display font-black text-4xl text-dark-gray mb-3 transition-colors duration-300 group-hover:text-white">
                  {cat.titolo}
                </h3>
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 delay-100">
                  <p className={`font-sans text-lg ${cat.textHover} font-medium leading-tight mb-6`}>
                    {cat.descrizione}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-dark-gray transition-colors">
                    Scopri <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                {/* Default state description hint (optional) - replacing with line for cleaner look in default */}
                <div className="w-12 h-1 bg-gray-200 mt-4 group-hover:w-full group-hover:bg-white/30 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContattiSection = ({ onQuoteRequest }: { onQuoteRequest: () => void }) => {
  return (
    <section id="contatti" className="py-32 bg-dark-gray relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Column: Big Impact Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-primary text-sm font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Siamo pronti
            </div>

            <h2 className="font-display font-black text-6xl md:text-8xl text-white leading-[0.9] tracking-tighter mb-10">
              Iniziamo il <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Tuo Progetto.</span>
            </h2>

            <p className="font-sans text-xl text-gray-400 font-light max-w-lg leading-relaxed mb-12">
              Dall'arredo all'informatica, costruiamo soluzioni su misura per il tuo business. Parla direttamente con il nostro team.
            </p>

            <a
              href="mailto:info@dittaferrosi.it"
              className="group inline-flex items-center gap-6 text-white"
            >
              <span className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 uppercase tracking-widest font-bold">Scrivici una email</span>
                <span className="font-display font-bold text-3xl md:text-4xl group-hover:text-primary transition-colors">info@dittaferrosi.it</span>
              </div>
            </a>
          </div>

          {/* Right Column: Interactive Cards */}
          <div className="grid gap-6">
            {/* Card 1: Locations */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gray-800 rounded-2xl text-primary">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">La Nostra Sede</h3>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Sede Principale</h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Via San Lazzaro, 55<br />
                      81030 Frignano (CE)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Contact Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between h-full">
                <Phone className="w-8 h-8 text-primary mb-6" />
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Telefono</h4>
                  <p className="text-xl font-bold text-white">081.189.39.323</p>
                </div>
              </div>

              <a
                href="https://wa.me/393511744164"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366]/10 backdrop-blur-md border border-[#25D366]/20 rounded-[2rem] p-8 hover:bg-[#25D366]/20 transition-colors duration-300 flex flex-col justify-between h-full group"
              >
                <MessageCircle className="w-8 h-8 text-[#25D366] mb-6 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-sm font-bold text-[#25D366]/70 uppercase tracking-widest mb-1">Whatsapp</h4>
                  <p className="text-xl font-bold text-white mb-2">351 174 4164</p>
                  <span className="text-xs font-bold bg-[#25D366] text-black px-3 py-1 rounded-full">Chatta ora</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <div className="text-3xl tracking-tighter inline-block">
            <span className="font-display font-black text-dark-gray">Ditta</span>
            <span className="font-sans font-medium text-primary ml-0.5">Ferrosi</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-4">&copy; {new Date().getFullYear()} Ditta Ferrosi. Tutti i diritti riservati.</p>
        <p className="text-gray-400 text-xs">P.IVA 10299581214</p>
      </div>
    </footer>
  );
};

// Utility per trovare l'immagine giusta tra tutte le sottocartelle e formati
const findProductImage = (imgName: string, catalogo: string) => {
  if (!imgName) return undefined;
  let subfolders = [];

  if (catalogo === 'informatica') subfolders = ['informatica'];
  else if (catalogo === 'arredo') subfolders = ['arredo'];
  else if (catalogo === 'alimentare') {
    // Per alimentare, controlla prima arredo (per i 5 prodotti spostati) poi impiantistica (per gli altri)
    subfolders = ['arredo', 'impiantistica'];
  }
  else if (catalogo === 'ufficio') subfolders = ['ufficio'];

  const extensions = ['.webp', '.jfif', '.jpg', '.jpeg', '.png'];
  const paths = [];

  // Genera tutti i possibili percorsi per tutte le cartelle e estensioni
  subfolders.forEach(subfolder => {
    extensions.forEach(ext => {
      paths.push(`/images/ecommerce/${subfolder}/${encodeURIComponent(imgName)}${ext}`);
    });
  });

  return paths;
};

const parseCatalogProduct = (item: any, catalogo?: string): any => {
  if (catalogo === 'informatica') {
    const key = Object.keys(item)[0];
    const parts = item[key].split(';');
    let id = parts[0] || Math.random().toString();
    let nome = parts[1] || '';
    let prezzo = 0;
    // Se il prezzo è presente come terzo elemento nella chiave principale, uso quello
    if (parts.length >= 3 && parts[2] && !isNaN(Number(parts[2].replace(/\D/g, '')))) {
      prezzo = parseFloat(parts[2].replace(/\D/g, '')) || 0;
    } else {
      // Altrimenti provo la penultima stringa di null
      const nullArr = item.null || [];
      if (nullArr.length > 0) {
        const prezzoStr = nullArr[nullArr.length - 2]?.split(';')[1];
        prezzo = parseFloat(prezzoStr?.replace(/\D/g, '')) || 0;
      }
    }
    // Immagine
    let immagine;
    const nullArr = item.null || [];
    if (nullArr.length > 0) {
      const imgStr = nullArr[nullArr.length - 1]?.split(';')[1];
      if (imgStr) immagine = imgStr; // solo nome base, senza estensione
    }
    // Mostra solo prodotti con nome e prezzo > 0
    if (!nome || prezzo <= 0) return null;
    return {
      id,
      nome,
      prezzo,
      immagine
    };
  }
  if (catalogo === 'ufficio') {
    // Parsing specifico per UFFICIO.json
    let nome = '';
    let prezzo = 0;
    let immagine = '';
    // Nome prodotto dal primo campo stringa
    const firstKey = Object.keys(item)[0];
    nome = item[firstKey];
    // Cerca prezzo e immagine nell'array 'null'
    const nullArr = item.null || [];
    // Trova immagine (sempre nell'ultimo elemento, dopo il punto e virgola)
    if (nullArr.length > 0) {
      const last = nullArr[nullArr.length - 1];
      const parts = last.split(';');
      if (parts.length === 2) {
        immagine = parts[1];
      }
    }
    // Trova prezzo: cerca la prima stringa che contiene ';' e dopo il ';' c'è un numero
    for (let i = 0; i < nullArr.length; i++) {
      const p = nullArr[i].split(';');
      if (p.length === 2 && !isNaN(Number(p[1].replace(/\D/g, ''))) && p[1].replace(/\D/g, '') !== '' && !p[1].includes('€')) {
        prezzo = parseFloat(p[1].replace(/\D/g, ''));
        break;
      }
    }
    if (!nome || !immagine) return null;
    return {
      id: nome + immagine,
      nome,
      prezzo,
      immagine
    };
  }
  if (catalogo === 'alimentare') {
    // Parsing specifico per catalogo_ecommerce_b2b_alimentare.json
    const nome = item.nome || '';
    const prezzoStr = item.prezzo || '';
    const prezzo = parseFloat(prezzoStr.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
    const immagine = item.immagine || '';

    if (!nome || prezzo <= 0) return null;
    return {
      id: nome + immagine,
      nome,
      prezzo,
      immagine
    };
  }
  // Default/compatibilità altri cataloghi
  const key = Object.keys(item)[0];
  const [id, settore, prodotto, prezzo] = item[key].split(';');
  const imgArr = item.null && item.null[0] ? item.null[0].split(';') : [];
  let immagine;
  if (imgArr[1]) immagine = imgArr[1]; // solo nome base, senza estensione
  if (!prodotto || !prezzo || parseFloat(prezzo.replace(/\D/g, '')) <= 0) return null;
  return {
    id: id || Math.random().toString(),
    settore: settore || '',
    nome: prodotto || '',
    prezzo: parseFloat(prezzo?.replace(/\D/g, '')) || 0,
    immagine
  };
};

const ProductImage = ({ imgName, catalogo, size }: { imgName: string, catalogo: string, size?: string }) => {
  const [currentExt, setCurrentExt] = useState(0);
  const paths = findProductImage(imgName, catalogo);
  const sizeClass = size === 'grande' ? 'w-full h-full' : 'w-32 h-32';
  if (!imgName || !paths || paths.length === 0) return <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Nessuna immagine</div>;
  return (
    <img
      src={paths[currentExt]}
      alt={imgName}
      className={`${sizeClass} object-contain mb-4`}
      onError={() => {
        if (currentExt < paths.length - 1) setCurrentExt(currentExt + 1);
      }}
    />
  );
};




// New Ecommerce Components

const CategorySidebar = ({
  categories,
  activeCategory,
  onSelect,
  onBack
}: {
  categories: { id: string, label: string }[],
  activeCategory: string,
  onSelect: (id: string) => void,
  onBack: () => void
}) => {
  return (
    <div className="hidden md:flex flex-col sticky top-0 h-screen p-12 justify-between w-1/3 border-r border-gray-100 bg-white z-20">
      <div>
        <div className="mb-12">
          <h2 className="font-display font-black text-4xl text-dark-gray tracking-tighter">
            Ditta
            <span className="text-primary ml-1">Ferrosi</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-medium tracking-widest uppercase">Select Collection</p>
        </div>

        <div className="space-y-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`group flex items-center space-x-4 w-full text-left transition-all duration-500`}
            >
              <span className={`block h-[2px] bg-primary transition-all duration-500 ${activeCategory === cat.id ? 'w-12' : 'w-0 group-hover:w-8'}`} />
              <span className={`font-display font-bold text-5xl transition-colors duration-300 ${activeCategory === cat.id ? 'text-dark-gray' : 'text-gray-300 group-hover:text-gray-400'}`}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onBack}
        className="group flex items-center gap-3 text-gray-400 hover:text-dark-gray transition-colors"
      >
        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-dark-gray group-hover:border-dark-gray transition-all">
          <ArrowLeft className="w-5 h-5 group-hover:text-white transition-colors" />
        </div>
        <span className="font-bold text-sm uppercase tracking-widest">Torna al sito</span>
      </button>
    </div>
  );
};

const ProductCardEnhanced = ({
  product,
  onAdd,
  catalogo
}: {
  product: any,
  onAdd: (p: any) => void,
  catalogo: string
}) => {
  return (
    <div className="group relative flex flex-col h-full bg-white rounded-[1.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 overflow-hidden">
      <div className="relative aspect-[4/5] p-4 flex items-center justify-center bg-gray-50/50">
        <div className="absolute bottom-4 right-4 z-10 transition-transform duration-300 hover:scale-110">
          <button
            onClick={() => onAdd(product)}
            className="group/btn bg-white text-dark-gray p-4 rounded-full hover:bg-dark-gray hover:text-white transition-all duration-300 shadow-xl border border-gray-100 flex items-center gap-2"
          >
            <span className="font-bold text-sm hidden group-hover/btn:inline-block">Aggiungi</span>
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
        {product.immagine && <ProductImage imgName={product.immagine} catalogo={catalogo} size="grande" />}
      </div>

      <div className="p-6 flex-1 flex flex-col justify-end">
        <div className="flex justify-between items-end gap-4">
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Ditta Ferrosi</p>
            <h3 className="font-sans font-bold text-lg text-dark-gray leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {product.nome}
            </h3>
          </div>
          <div className="text-right shrink-0">
            <p className="font-display font-black text-xl text-dark-gray whitespace-nowrap">
              {product.prezzo.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const EcommercePage = ({ onBack }: { onBack: () => void }) => {
  const [prodotti, setProdotti] = useState<any[]>([]);
  const [carrello, setCarrello] = useState<any[]>([]);
  const [ragioneSociale, setRagioneSociale] = useState('');
  const [pIva, setPIva] = useState('');
  const [noteGenerali, setNoteGenerali] = useState('');
  const [loading, setLoading] = useState(true);
  const [catalogo, setCatalogo] = useState('informatica');
  const [showFan, setShowFan] = useState(true);
  const [fanFadeOut, setFanFadeOut] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { id: 'informatica', label: 'Tech' },
    { id: 'arredo', label: 'Design' },
    { id: 'ufficio', label: 'Office' },
    { id: 'alimentare', label: 'Horeca' },
  ];

  const fanCategories: ProductCategory[] = [
    {
      key: 'informatica',
      title: 'Informatica',
      description: 'Soluzioni IT all\'avanguardia per la tua azienda.',
      image: '/images/17926719_notebook-display-mockup-laptop.jpg',
      accentColor: 'from-blue-600 to-indigo-900',
      cta: 'Scopri il settore',
      comingSoon: false,
    },
    {
      key: 'ufficio',
      title: 'Ufficio',
      description: 'Tutto il necessario per il tuo spazio di lavoro.',
      image: '/images/progettazione-uffici-roma.jpg',
      accentColor: 'from-orange-500 to-red-600',
      cta: 'Scopri il settore',
      comingSoon: false,
    },
    {
      key: 'arredo',
      title: 'Arredo',
      description: 'Design e comfort per uffici moderni.',
      image: '/images/arredo-ufficio-operativo-legno-scrivania-operativa.jpg',
      accentColor: 'from-purple-600 to-pink-500',
      cta: 'Scopri il settore',
      comingSoon: false,
    },
    {
      key: 'alimentare',
      title: 'Alimentare',
      description: 'Attrezzature professionali per il settore Horeca.',
      image: '/images/3094495_banco-vendita-gastronomia-degustazione-arredo-negozio-industriale-vetrina-refrigerata.jpg',
      accentColor: 'from-green-700 to-lime-500',
      cta: 'Scopri il settore',
      comingSoon: false,
    },
  ];

  useEffect(() => {
    if (showFan) return;
    setLoading(true);
    let file = '';
    if (catalogo === 'alimentare') file = '/cataloghi/catalogo_ecommerce_b2b_alimentare.json';
    else if (catalogo === 'informatica') file = '/cataloghi/INFORMATICA.json';
    else if (catalogo === 'arredo') file = '/cataloghi/ARREDO.json';
    else if (catalogo === 'ufficio') file = '/cataloghi/UFFICIO.json';
    fetch(file)
      .then(res => res.json())
      .then(data => {
        setProdotti(data.map((item: any) => parseCatalogProduct(item, catalogo)));
        setLoading(false);
      });
  }, [catalogo, showFan]);

  // Fan Intro
  if (showFan) {
    return (
      <div className={`transition-opacity duration-700 ${fanFadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <ProductPreviewFan
          categories={fanCategories}
          onSelectCategory={key => setCatalogo(key === 'forniture' ? 'ufficio' : key)}
          onEnterEcommerce={() => {
            setFanFadeOut(true);
            setTimeout(() => {
              setShowFan(false);
              setFanFadeOut(false);
            }, 600);
          }}
          onBackToSite={() => {
            setFanFadeOut(true);
            setTimeout(() => {
              onBack();
              setFanFadeOut(false);
            }, 600);
          }}
        />
      </div>
    );
  }

  const aggiungiAlCarrello = (prodotto: any) => {
    setCarrello(prev => {
      const existing = prev.find(p => p.id === prodotto.id);
      if (existing) {
        return prev.map(p => p.id === prodotto.id ? { ...p, quantita: p.quantita + 1 } : p);
      }
      return [...prev, { ...prodotto, quantita: 1, note: '' }];
    });
    setIsCartOpen(true);
  };

  const rimuoviDalCarrello = (id: string) => {
    setCarrello(prev => prev.filter(p => p.id !== id));
  };

  const aggiornaQuantita = (id: string, delta: number) => {
    setCarrello(prev => prev.map(p => {
      if (p.id === id) {
        const newQty = Math.max(1, p.quantita + delta);
        return { ...p, quantita: newQty };
      }
      return p;
    }));
  };

  const aggiornaNoteProdotto = (id: string, note: string) => {
    setCarrello(prev => prev.map(p => p.id === id ? { ...p, note } : p));
  };

  const totale = carrello.reduce((sum, p) => sum + (p.prezzo * p.quantita), 0);

  return (
    <div className="min-h-screen bg-cream font-sans flex flex-col md:flex-row">

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md p-4 border-b border-gray-100 flex justify-between items-center">
        <div className="text-xl font-display font-black text-dark-gray">Ditta<span className="text-primary">Ferrosi</span></div>
        <button onClick={onBack} className="text-sm font-bold text-gray-500">ESC</button>
      </div>

      {/* Sidebar Navigation */}
      <CategorySidebar
        categories={categories}
        activeCategory={catalogo}
        onSelect={setCatalogo}
        onBack={onBack}
      />

      {/* Main Content Area */}
      <div className="md:w-2/3 md:ml-auto min-h-screen pt-24 md:pt-0">

        {/* Mobile Category Selector */}
        <div className="md:hidden overflow-x-auto whitespace-nowrap px-4 pb-4 mb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCatalogo(cat.id)}
              className={`px-6 py-2 rounded-full mr-3 text-sm font-bold transition-all ${catalogo === cat.id ? 'bg-dark-gray text-white' : 'bg-white border border-gray-200 text-gray-500'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="p-4 md:p-12 pb-32">
          {/* Header Mobile/Desktop differences */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-dark-gray mb-2">
                {categories.find(c => c.id === catalogo)?.label}
              </h1>
              <p className="text-gray-400 font-medium">
                {loading ? 'Caricamento...' : `${prodotti.filter(p => p && p.nome && p.prezzo > 0).length} Prodotti Curati`}
              </p>
            </div>
          </div>

          {/* Product Grid - Sorted by Image Availability */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {!loading && produits_validi(prodotti)
              .sort((a, b) => {
                const hasA = a.immagine && (findProductImage(a.immagine, catalogo) || []).length > 0;
                const hasB = b.immagine && (findProductImage(b.immagine, catalogo) || []).length > 0;
                if (hasA && !hasB) return -1;
                if (!hasA && hasB) return 1;
                return 0;
              })
              .map((prodotto: any) => (
                <ProductCardEnhanced
                  key={prodotto.id}
                  product={prodotto}
                  onAdd={aggiungiAlCarrello}
                  catalogo={catalogo}
                />
              ))}
          </div>

          {/* Fallback for loading */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="h-96 bg-gray-100 rounded-[2rem] animate-pulse" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Cart Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative group bg-dark-gray text-white h-16 w-16 md:h-20 md:w-auto md:px-8 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <span className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold h-6 w-6 flex items-center justify-center rounded-full">
              {carrello.length}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </div>
          <span className="hidden md:block ml-3 font-bold text-lg">
            {totale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
          </span>
        </button>
      </div>

      {/* Cart Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[480px] bg-white shadow-2xl z-[60] transform transition-transform duration-500 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-display font-black text-3xl">Il Tuo Ordine</h2>
            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-8 pr-2">
            {carrello.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p>Il carrello è vuoto</p>
              </div>
            ) : (
              <>
                {/* Dati Aziendali */}
                <div className="space-y-4 bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> Dati Aziendali
                  </h3>
                  <div className="grid gap-3">
                    <input
                      type="text"
                      placeholder="Ragione Sociale"
                      value={ragioneSociale}
                      onChange={(e) => setRagioneSociale(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                    />
                    <input
                      type="text"
                      placeholder="Partita IVA"
                      value={pIva}
                      onChange={(e) => setPIva(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Prodotti */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Articoli Selezionati</h3>
                  {carrello.map((p, i) => (
                    <div key={i} className="group bg-white border border-gray-100 p-4 rounded-2xl hover:shadow-md transition-all space-y-4">
                      <div className="flex gap-4 items-center">
                        <div className="w-20 h-20 bg-gray-50 rounded-xl p-2 flex items-center justify-center shrink-0">
                          {p.immagine ? <ProductImage imgName={p.immagine} catalogo={catalogo} size="small" /> : <div className="w-10 h-10 bg-gray-200 rounded-full" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-dark-gray leading-tight mb-1 truncate">{p.nome}</h4>
                          <p className="text-primary font-black text-lg">{(p.prezzo * p.quantita).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</p>
                          <p className="text-xs text-gray-400 font-medium">{p.prezzo.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })} / cad.</p>
                        </div>
                        <button onClick={() => rimuoviDalCarrello(p.id)} className="text-gray-300 hover:text-red-500 p-2 transition-colors">
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-50 gap-4">
                        <div className="flex items-center bg-gray-50 rounded-xl p-1">
                          <button
                            onClick={() => aggiornaQuantita(p.id, -1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-gray-500"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center font-bold text-dark-gray">{p.quantita}</span>
                          <button
                            onClick={() => aggiornaQuantita(p.id, 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-gray-500"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex-1 relative">
                          <input
                            type="text"
                            placeholder="Note per questo articolo..."
                            value={p.note || ''}
                            onChange={(e) => aggiornaNoteProdotto(p.id, e.target.value)}
                            className="w-full bg-gray-50 border-none rounded-xl px-4 py-2 text-xs focus:ring-1 focus:ring-primary/20 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Note Generali */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Note dell'Ordine
                  </h3>
                  <textarea
                    placeholder="Altre istruzioni o richieste particolari..."
                    value={noteGenerali}
                    onChange={(e) => setNoteGenerali(e.target.value)}
                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-gray-100 outline-none transition-all font-medium h-32 resize-none"
                  />
                </div>
              </>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex justify-between items-end mb-6">
              <div>
                <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] block mb-1">Riepilogo Totale</span>
                <span className="text-gray-500 font-medium text-sm">{carrello.reduce((s, p) => s + p.quantita, 0)} Articoli</span>
              </div>
              <span className="font-display font-black text-4xl text-primary">{totale.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</span>
            </div>
            <button
              onClick={() => generateCheckoutPDF(carrello, totale, { ragioneSociale, pIva, noteGenerali })}
              className="w-full bg-dark-gray text-white py-6 rounded-2xl font-bold text-xl hover:bg-primary transition-all shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98]"
              disabled={carrello.length === 0}
            >
              Genera Riepilogo PDF <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for Cart */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[50]" onClick={() => setIsCartOpen(false)} />
      )}

    </div>
  );
};

// Helper function to safely filter valid products
const produits_validi = (list: any[]) => {
  return list.filter(p => p && p.nome && p.prezzo > 0);
};

const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Abstract Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <div className="mb-12 animate-float">
          <div className="flex items-center space-x-4 mb-4 justify-center">
            <div className="text-5xl md:text-7xl tracking-tighter">
              <span className="font-display font-black text-white">Ditta</span>
              <span className="font-sans font-medium text-primary ml-1">Ferrosi</span>
            </div>
          </div>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full animate-glow" />
        </div>

        <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 uppercase tracking-tighter leading-none">
          Lavori in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Corso</span>
        </h1>

        <p className="font-sans text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
          Stiamo aggiornando il nostro spazio digitale per offrirti un'esperienza ancora migliore.
          Torniamo online a breve con grandi novità.
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center space-x-3 text-gray-500 font-medium uppercase tracking-[0.2em] text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>Sistema in Aggiornamento</span>
          </div>

          <div className="h-px w-40 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-sm">Hai urgenza? Contattaci subito:</p>
            <a href="mailto:info@dittaferrosi.it" className="text-white font-bold hover:text-primary transition-colors text-lg">
              info@dittaferrosi.it
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-700 text-[10px] font-bold uppercase tracking-[0.3em]">
        © {new Date().getFullYear()} Ditta Ferrosi • Excellence in Operations
      </div>
    </div>
  );
};

const EcommerceUfficioPage = () => {
  const [prodottiUfficio, setProdottiUfficio] = useState<any[]>([]);

  useEffect(() => {
    if (prodottiUfficio.length === 0) {
      fetch('/cataloghi/UFFICIO.json')
        .then(res => res.json())
        .then(data => {
          // Parsing simile a quello già usato per altri cataloghi
          const prodotti = data.map((item: any) => {
            let nome = '';
            let descrizione = '';
            let prezzo = '';
            let immagine = '';
            // Parsing generico
            const nullArr = item.null || [];
            // Trova nome e immagine
            if (nullArr.length > 0) {
              const last = nullArr[nullArr.length - 1];
              const parts = last.split(';');
              if (parts.length > 1) {
                prezzo = parts[0].replace('00 €', '').trim();
                immagine = parts[1];
              } else {
                immagine = parts[0];
              }
            }
            // Trova nome prodotto
            for (const key in item) {
              if (key.includes(';')) {
                nome = item[key];
              }
            }
            // Trova descrizione
            for (const key in item) {
              if (key.startsWith('00 €')) {
                descrizione = item[key];
              }
            }
            return { nome, descrizione, prezzo, immagine };
          });
          setProdottiUfficio(prodotti);
        });
    }
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-black text-primary mb-10 text-center">Ecommerce Ufficio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {prodottiUfficio.map((prodotto, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-full aspect-square flex items-center justify-center mb-4">
              <img
                src={`/images/ecommerce/ufficio/${prodotto.immagine}.webp`}
                alt={prodotto.nome}
                className="object-contain w-full h-full rounded-xl"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <h3 className="text-lg font-bold text-dark-gray mb-2 text-center">{prodotto.nome}</h3>
            <p className="text-gray-500 text-sm mb-2 text-center">{prodotto.descrizione}</p>
            <div className="text-primary font-black text-xl mb-2">{prodotto.prezzo ? prodotto.prezzo + ' €' : ''}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [showQuoteRequest, setShowQuoteRequest] = useState(false);
  const [showEcommerce, setShowEcommerce] = useState(false);
  const [page, setPage] = useState<'home' | 'ecommerce' | 'ecommerce-ufficio'>('home');

  // Maintenance Mode Toggle - Set to true to enable
  const isMaintenanceMode = false;

  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  const handleShowQuoteRequest = () => {
    setShowQuoteRequest(true);
  };

  const handleBackToSite = () => {
    setShowQuoteRequest(false);
  };

  if (showEcommerce) return <EcommercePage onBack={() => setShowEcommerce(false)} />;

  return (
    <>
      <Header onEcommerce={() => setShowEcommerce(true)} />
      <HeroSection />
      <SettoriPrincipali />
      <ApproccioLavoro />
      <PartnerSection />
      <CatalogoSettori onQuoteRequest={handleShowQuoteRequest} />
      <ContattiSection onQuoteRequest={handleShowQuoteRequest} />
      <Footer />
      {page === 'ecommerce-ufficio' && <EcommerceUfficioPage />}
    </>
  );
};

export default App;