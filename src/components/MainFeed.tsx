import { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Laptop, PenLine, IdCard, Book, Car, Map, MapPin, 
  FileText, School, Stethoscope, UserPlus, Receipt, Briefcase, Users, Home, 
  Mail, Landmark, Leaf, CheckCircle, Scale, Compass, Tv, Bot, Lightbulb, Network, 
  Rocket, HelpCircle, ArrowRight, DownloadCloud, BookOpen, Film, Image, Share2,
  Facebook, Youtube, Twitter, Linkedin
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SLIDES = [
  {
    type: 'image',
    src: '/src/assets/images/bangladesh_hero_banner_1783737361878.jpg',
  },
  {
    type: 'svg',
  }
];

export default function MainFeed() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { lang, t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <div className="flex flex-col w-full space-y-4 md:space-y-6">
      {/* Dynamic Slide Banner */}
      <div className="md:rounded-xl overflow-hidden relative shadow-md text-white w-full aspect-[16/9] md:h-[350px] flex items-center select-none bg-[#00180e]">
        {/* Slide 1: Image Background with Gradient Overlay */}
        {SLIDES[currentSlide].type === 'image' && (
          <>
            <img 
              src={SLIDES[currentSlide].src} 
              alt="Bangladesh National Portal Hero Banner" 
              className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none animate-fade-in"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00180e]/95 via-[#00180e]/65 to-transparent z-0 pointer-events-none" />
          </>
        )}

        {/* Slide 2: SVG Memorial & National Flag Illustration Layer */}
        {SLIDES[currentSlide].type === 'svg' && (
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none animate-fade-in" viewBox="0 0 750 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="750" height="350" fill="url(#heroBackGrad)" />
            <defs>
              <linearGradient id="heroBackGrad" x1="0" y1="0" x2="0" y2="350" gradientUnits="userSpaceOnUse">
                <stop stopColor="#003522" />
                <stop offset="1" stopColor="#00180e" />
              </linearGradient>
            </defs>
            
            {/* Red Sun in the background */}
            <circle cx="510" cy="165" r="95" fill="#da291c" opacity="0.95" />
            
            {/* Memorial Pillars (Smaranik) */}
            <rect x="360" y="300" width="280" height="15" fill="#334155" />
            <rect x="390" y="290" width="220" height="10" fill="#475569" />
            
            {/* Pillars from left to right */}
            <polygon points="500,45 486,290 514,290" fill="#f8fafc" />
            
            <polygon points="470,95 464,290 486,290" fill="#f1f5f9" />
            <polygon points="440,145 435,290 464,290" fill="#e2e8f0" />
            <polygon points="410,195 407,290 435,290" fill="#cbd5e1" />
            
            <polygon points="530,95 514,290 536,290" fill="#f1f5f9" />
            <polygon points="560,145 536,290 565,290" fill="#e2e8f0" />
            <polygon points="590,195 565,290 593,290" fill="#cbd5e1" />
            
            {/* Stylized Red-Green Bangladesh Flag */}
            <g transform="translate(640, 110)">
              <line x1="0" y1="0" x2="0" y2="180" stroke="#94a3b8" strokeWidth="5.5" strokeLinecap="round" />
              <circle cx="0" cy="0" r="4" fill="#cbd5e1" />
              <path d="M0,15 C5,10 15,10 20,15 L70,15 C75,10 85,10 90,15 L90,65 C85,60 75,60 70,65 L20,65 C15,60 5,60 0,65 Z" fill="#006a4e" />
              <circle cx="42" cy="40" r="16" fill="#da291c" />
            </g>
          </svg>
        )}

        {/* Action Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/20 bg-black/15 hover:bg-black/35 flex items-center justify-center transition-colors z-20"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/20 bg-black/15 hover:bg-black/35 flex items-center justify-center transition-colors z-20"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Text and Button hardcoded on top of the image / background for translation support */}
        <div className="p-6 md:p-8 relative z-10 w-full max-w-[62%] md:max-w-[50%] mt-4 md:mt-0 ml-4 md:ml-6 flex flex-col justify-center">
          {currentSlide === 0 ? (
            // SLIDE 1: Welcome / Government Portal
            <>
              {lang === 'bn' ? (
                <>
                  <p className="text-[14px] md:text-[20px] font-black text-[#facc15] leading-snug mb-1 md:mb-2 drop-shadow-md font-display">
                    সোনার বাংলা গড়ার প্রত্যয়
                  </p>
                  <p className="text-[16px] md:text-[22px] font-black text-white leading-tight mb-1 md:mb-2 drop-shadow-md font-display">
                    বাংলাদেশ জাতীয় তথ্য বাতায়ন
                  </p>
                  <h2 className="text-[11px] md:text-[14px] font-bold text-white/95 leading-normal tracking-wide uppercase font-sans drop-shadow mb-0.5">
                    Bangladesh National Portal
                  </h2>
                  <p className="text-[10px] md:text-[12px] text-white/85 leading-snug mb-3 line-clamp-1">
                    একটি ঠিকানায় সব সরকারি সেবা ও তথ্য
                  </p>
                  <p className="text-[10px] md:text-xs text-emerald-300 font-extrabold tracking-widest flex items-center gap-1.5 mb-4 md:mb-5 uppercase">
                    <span className="w-6 h-0.5 bg-emerald-400 block"></span> সরকারি পোর্টাল
                  </p>
                  <button className="bg-[#006a4e] hover:bg-emerald-800 text-white text-[10px] md:text-[11px] font-black uppercase tracking-wider px-4 md:px-5 py-2 md:py-2.5 rounded-md flex items-center justify-center gap-2 w-max shadow-md border border-emerald-600 transition-all transform hover:scale-105 cursor-pointer">
                    সেবাসমূহ দেখুন
                  </button>
                </>
              ) : (
                <>
                  <p className="text-[14px] md:text-[20px] font-black text-[#facc15] leading-snug mb-1 md:mb-2 drop-shadow-md font-display">
                    Welcome to Bangladesh Portal
                  </p>
                  <p className="text-[16px] md:text-[22px] font-black text-white leading-tight mb-1 md:mb-2 drop-shadow-md font-display">
                    National Services Gateway
                  </p>
                  <h2 className="text-[11px] md:text-[14px] font-bold text-white/95 leading-normal tracking-wide uppercase font-sans drop-shadow mb-0.5">
                    bangladesh.gov.bd
                  </h2>
                  <p className="text-[10px] md:text-[12px] text-white/85 leading-snug mb-3 line-clamp-1">
                    All Government Information and Services in One Address
                  </p>
                  <p className="text-[10px] md:text-xs text-emerald-300 font-extrabold tracking-widest flex items-center gap-1.5 mb-4 md:mb-5 uppercase">
                    <span className="w-6 h-0.5 bg-emerald-400 block"></span> GOVT.BD PORTAL
                  </p>
                  <button className="bg-[#006a4e] hover:bg-emerald-800 text-white text-[10px] md:text-[11px] font-black uppercase tracking-wider px-4 md:px-5 py-2 md:py-2.5 rounded-md flex items-center justify-center gap-2 w-max shadow-md border border-emerald-600 transition-all transform hover:scale-105 cursor-pointer">
                    Explore Services
                  </button>
                </>
              )}
            </>
          ) : (
            // SLIDE 2: 21 February Language Day
            <>
              {lang === 'bn' ? (
                <>
                  <p className="text-[14px] md:text-[20px] font-black text-[#facc15] leading-snug mb-1 md:mb-2 drop-shadow-md font-display">
                    মায়ের ভাষার মর্যাদা রাখবো আমি
                  </p>
                  <p className="text-[16px] md:text-[22px] font-black text-white leading-tight mb-1 md:mb-2 drop-shadow-md font-display">
                    আন্তর্জাতিক মাতৃভাষা দিবস
                  </p>
                  <h2 className="text-[11px] md:text-[14px] font-bold text-white/95 leading-normal tracking-wide uppercase font-sans drop-shadow mb-0.5">
                    International Mother Language Day
                  </h2>
                  <p className="text-[10px] md:text-[12px] text-white/85 leading-snug mb-3 line-clamp-1">
                    ১৯৫২ সালের মহান ভাষা শহীদদের প্রতি বিনম্র শ্রদ্ধা
                  </p>
                  <p className="text-[10px] md:text-xs text-emerald-300 font-extrabold tracking-widest flex items-center gap-1.5 mb-4 md:mb-5 uppercase">
                    <span className="w-6 h-0.5 bg-emerald-400 block"></span> ২১শে ফেব্রুয়ারি
                  </p>
                  <button className="bg-[#006a4e] hover:bg-emerald-800 text-white text-[10px] md:text-[11px] font-black uppercase tracking-wider px-4 md:px-5 py-2 md:py-2.5 rounded-md flex items-center justify-center gap-2 w-max shadow-md border border-emerald-600 transition-all transform hover:scale-105 cursor-pointer">
                    বিস্তারিত জানুন
                  </button>
                </>
              ) : (
                <>
                  <p className="text-[14px] md:text-[20px] font-black text-[#facc15] leading-snug mb-1 md:mb-2 drop-shadow-md font-display">
                    Honor to the Language Martyrs
                  </p>
                  <p className="text-[16px] md:text-[22px] font-black text-white leading-tight mb-1 md:mb-2 drop-shadow-md font-display">
                    International Mother Language Day
                  </p>
                  <h2 className="text-[11px] md:text-[14px] font-bold text-white/95 leading-normal tracking-wide uppercase font-sans drop-shadow mb-0.5">
                    21 February
                  </h2>
                  <p className="text-[10px] md:text-[12px] text-white/85 leading-snug mb-3 line-clamp-1">
                    In Honor of the language martyrs of 1952
                  </p>
                  <p className="text-[10px] md:text-xs text-emerald-300 font-extrabold tracking-widest flex items-center gap-1.5 mb-4 md:mb-5 uppercase">
                    <span className="w-6 h-0.5 bg-emerald-400 block"></span> 21 February
                  </p>
                  <button className="bg-[#006a4e] hover:bg-emerald-800 text-white text-[10px] md:text-[11px] font-black uppercase tracking-wider px-4 md:px-5 py-2 md:py-2.5 rounded-md flex items-center justify-center gap-2 w-max shadow-md border border-emerald-600 transition-all transform hover:scale-105 cursor-pointer">
                    Learn More
                  </button>
                </>
              )}
            </>
          )}
        </div>

        {/* Indicators dot */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
          {SLIDES.map((_, idx) => (
            <span 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all cursor-pointer rounded-full ${
                currentSlide === idx ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mega Projects */}
      <div className="bg-transparent md:bg-white md:rounded-2xl md:border md:border-slate-100 py-2 md:p-5 md:shadow-md md:hover:shadow-lg transition-shadow duration-300 relative w-full border-0 px-4 md:px-0">
        <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2 md:border-b md:border-gray-100 md:pb-3 md:mb-4">
          <h3 className="text-[12px] md:text-sm font-black text-[#006a4e] uppercase tracking-wider flex items-center gap-1.5 font-display">
            <span className="w-1.5 h-4 bg-[#da291c] inline-block rounded-sm"></span>
            {t('megaProjects')}
          </h3>
          <a href="#" className="text-[10px] md:text-xs text-[#006a4e] hover:underline font-bold">{t('viewAll')}</a>
        </div>
        
        <button className="hidden md:flex absolute left-1 top-[55%] -translate-y-1/2 w-6 h-6 rounded-full border border-gray-200 bg-white shadow-sm items-center justify-center text-gray-400 hover:text-gray-700 z-10">
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
        <button className="hidden md:flex absolute right-1 top-[55%] -translate-y-1/2 w-6 h-6 rounded-full border border-gray-200 bg-white shadow-sm items-center justify-center text-gray-400 hover:text-gray-700 z-10">
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-3 md:gap-4 px-0 md:px-2 pb-2 md:pb-0 scrollbar-hide snap-x">
          {/* Padma Bridge */}
          <div className="shrink-0 w-36 md:w-auto border border-slate-100 p-2.5 text-center bg-white rounded-xl flex flex-col justify-between items-center shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 snap-start group">
            <div className="h-14 md:h-16 w-full rounded-lg overflow-hidden relative mb-2.5 flex items-center justify-center bg-sky-100 border border-sky-100/30 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-full h-full" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="64" fill="url(#bridgeGrad)" />
                <defs>
                  <linearGradient id="bridgeGrad" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#bae6fd" />
                    <stop offset="1" stopColor="#e0f2fe" />
                  </linearGradient>
                </defs>
                <path d="M0 45 L120 45" stroke="#475569" strokeWidth="2" />
                <path d="M10 45 L25 32 L40 45" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M40 45 L55 32 L70 45" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M70 45 L85 32 L100 45" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="25" y1="32" x2="25" y2="45" stroke="#475569" strokeWidth="1" />
                <line x1="55" y1="32" x2="55" y2="45" stroke="#475569" strokeWidth="1" />
                <line x1="85" y1="32" x2="85" y2="45" stroke="#475569" strokeWidth="1" />
                <rect x="23" y="45" width="4" height="15" fill="#94a3b8" />
                <rect x="53" y="45" width="4" height="15" fill="#94a3b8" />
                <rect x="83" y="45" width="4" height="15" fill="#94a3b8" />
                <path d="M0 55 Q30 52 60 55 T120 55 L120 64 L0 64 Z" fill="#0369a1" opacity="0.8" />
              </svg>
            </div>
            <p className="text-[11px] md:text-xs font-bold text-gray-800 line-clamp-1 font-display">{t('padmaBridge')}</p>
            <span className="mt-1.5 px-2 py-0.5 bg-emerald-100 text-[8px] md:text-[9px] text-emerald-800 font-extrabold rounded-full tracking-wider uppercase">{t('statusCompleted')}</span>
          </div>

          {/* Dhaka Metro Rail */}
          <div className="shrink-0 w-36 md:w-auto border border-slate-100 p-2.5 text-center bg-white rounded-xl flex flex-col justify-between items-center shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 snap-start group">
            <div className="h-14 md:h-16 w-full rounded-lg overflow-hidden relative mb-2.5 flex items-center justify-center bg-emerald-50 border border-emerald-50/30 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-full h-full" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="64" fill="url(#metroGrad)" />
                <defs>
                  <linearGradient id="metroGrad" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f0fdf4" />
                    <stop offset="1" stopColor="#dcfce7" />
                  </linearGradient>
                </defs>
                <rect x="0" y="40" width="120" height="6" fill="#64748b" />
                <rect x="15" y="46" width="6" height="18" fill="#cbd5e1" />
                <rect x="55" y="46" width="6" height="18" fill="#cbd5e1" />
                <rect x="95" y="46" width="6" height="18" fill="#cbd5e1" />
                <rect x="25" y="22" width="70" height="18" rx="3" fill="#006a4e" />
                <rect x="25" y="27" width="70" height="3" fill="#da291c" />
                <rect x="32" y="24" width="8" height="5" fill="#e2e8f0" rx="1" />
                <rect x="44" y="24" width="8" height="5" fill="#e2e8f0" rx="1" />
                <rect x="56" y="24" width="8" height="5" fill="#e2e8f0" rx="1" />
                <rect x="68" y="24" width="8" height="5" fill="#e2e8f0" rx="1" />
                <path d="M82 24 H91 C93 24 94 27 94 30 H82 Z" fill="#1e293b" />
              </svg>
            </div>
            <p className="text-[11px] md:text-xs font-bold text-gray-800 line-clamp-1 font-display">{t('metroRail')}</p>
            <span className="mt-1.5 px-2 py-0.5 bg-amber-100 text-[8px] md:text-[9px] text-amber-800 font-extrabold rounded-full tracking-wider uppercase">{t('statusOngoing')}</span>
          </div>

          {/* Rooppur Nuclear Power Plant */}
          <div className="shrink-0 w-36 md:w-auto border border-slate-100 p-2.5 text-center bg-white rounded-xl flex flex-col justify-between items-center shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 snap-start group">
            <div className="h-14 md:h-16 w-full rounded-lg overflow-hidden relative mb-2.5 flex items-center justify-center bg-purple-50 border border-purple-50/30 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-full h-full" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="64" fill="url(#nukeGrad)" />
                <defs>
                  <linearGradient id="nukeGrad" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f5f3ff" />
                    <stop offset="1" stopColor="#eedffc" />
                  </linearGradient>
                </defs>
                <path d="M15 64 C15 35 45 35 45 64 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                <path d="M65 64 L72 32 H88 L95 64" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                <ellipse cx="80" cy="32" rx="8" ry="2" fill="#94a3b8" />
                <path d="M72 26 Q78 18 84 26" stroke="#f1f5f9" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                <path d="M76 22 Q82 14 88 22" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
                <circle cx="80" cy="48" r="3" fill="#8b5cf6" />
                <ellipse cx="80" cy="48" rx="8" ry="2.5" stroke="#8b5cf6" strokeWidth="0.75" fill="none" transform="rotate(30 80 48)" />
                <ellipse cx="80" cy="48" rx="8" ry="2.5" stroke="#8b5cf6" strokeWidth="0.75" fill="none" transform="rotate(-30 80 48)" />
              </svg>
            </div>
            <p className="text-[11px] md:text-xs font-bold text-gray-800 line-clamp-1 font-display">{t('rooppur')}</p>
            <span className="mt-1.5 px-2 py-0.5 bg-amber-100 text-[8px] md:text-[9px] text-amber-800 font-extrabold rounded-full tracking-wider uppercase">{t('statusOngoing')}</span>
          </div>

          {/* Dhaka Elevated Expressway */}
          <div className="shrink-0 w-36 md:w-auto border border-slate-100 p-2.5 text-center bg-white rounded-xl flex flex-col justify-between items-center shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 snap-start group">
            <div className="h-14 md:h-16 w-full rounded-lg overflow-hidden relative mb-2.5 flex items-center justify-center bg-pink-50 border border-pink-50/30 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-full h-full" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="64" fill="url(#expressGrad)" />
                <defs>
                  <linearGradient id="expressGrad" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fdf4ff" />
                    <stop offset="1" stopColor="#f3e8ff" />
                  </linearGradient>
                </defs>
                <path d="M0 64 C40 35 80 35 120 64" fill="none" stroke="#a21caf" strokeWidth="5" />
                <path d="M0 64 C40 35 80 35 120 64" fill="none" stroke="#475569" strokeWidth="4" />
                <path d="M0 64 C40 35 80 35 120 64" fill="none" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="60" y1="46" x2="60" y2="64" stroke="#94a3b8" strokeWidth="3" />
                <rect x="25" y="47" width="5" height="2" fill="#ef4444" rx="0.5" />
                <rect x="85" y="48" width="6" height="2" fill="#3b82f6" rx="0.5" />
              </svg>
            </div>
            <p className="text-[11px] md:text-xs font-bold text-gray-800 line-clamp-1 font-display">{t('expressway')}</p>
            <span className="mt-1.5 px-2 py-0.5 bg-amber-100 text-[8px] md:text-[9px] text-amber-800 font-extrabold rounded-full tracking-wider uppercase">{t('statusOngoing')}</span>
          </div>

          {/* Matarbari Port */}
          <div className="shrink-0 w-36 md:w-auto border border-slate-100 p-2.5 text-center bg-white rounded-xl flex flex-col justify-between items-center shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 snap-start group">
            <div className="h-14 md:h-16 w-full rounded-lg overflow-hidden relative mb-2.5 flex items-center justify-center bg-blue-50 border border-blue-50/30 group-hover:scale-105 transition-transform duration-300">
              <svg className="w-full h-full" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="64" fill="url(#portGrad)" />
                <defs>
                  <linearGradient id="portGrad" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f0f9ff" />
                    <stop offset="1" stopColor="#e0f2fe" />
                  </linearGradient>
                </defs>
                <path d="M20 40 H80 L90 28 H15 Z" fill="#1e293b" />
                <rect x="22" y="18" width="18" height="10" fill="#f8fafc" />
                <rect x="25" y="14" width="10" height="4" fill="#cbd5e1" />
                <rect x="25" y="21" width="4" height="3" fill="#38bdf8" />
                <rect x="31" y="21" width="4" height="3" fill="#38bdf8" />
                <rect x="42" y="20" width="12" height="8" fill="#f43f5e" rx="1" />
                <rect x="56" y="20" width="12" height="8" fill="#0ea5e9" rx="1" />
                <rect x="70" y="20" width="10" height="8" fill="#eab308" rx="1" />
                <path d="M0 36 Q30 34 60 36 T120 36 L120 64 L0 64 Z" fill="#0284c7" opacity="0.9" />
                <path d="M0 45 Q30 43 60 45 T120 45 L120 64 L0 64 Z" fill="#0369a1" />
              </svg>
            </div>
            <p className="text-[11px] md:text-xs font-bold text-gray-800 line-clamp-1 font-display">{t('matarbari')}</p>
            <span className="mt-1.5 px-2 py-0.5 bg-amber-100 text-[8px] md:text-[9px] text-amber-800 font-extrabold rounded-full tracking-wider uppercase">{t('statusOngoing')}</span>
          </div>
        </div>
      </div>

      {/* Government e-Services Grid (36 Dense Items) */}
      <div className="bg-transparent md:bg-white py-4 md:p-6 md:rounded-2xl md:border md:border-slate-100 md:shadow-md md:hover:shadow-lg transition-shadow duration-300 border-0 px-4 md:px-0">
        <div className="border-b border-gray-100 pb-3 mb-4 flex justify-between items-center select-none">
          <h3 className="text-xs md:text-sm font-black text-[#006a4e] uppercase tracking-wider flex items-center gap-1.5 font-display">
            <span className="w-1.5 h-4 bg-[#da291c] inline-block rounded-sm"></span>
            {t('eServicesTitle')}
          </h3>
          <a href="#" className="text-[10px] md:text-xs text-[#006a4e] hover:text-emerald-800 hover:underline font-bold">{t('alleServices')}</a>
        </div>

        <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap gap-2 md:gap-3 text-[11px] md:text-xs mb-5 scrollbar-hide select-none">
          <button className="px-3.5 py-1.5 bg-[#006a4e] hover:bg-[#00523c] text-white rounded-md font-bold shadow-sm transition-all duration-200 cursor-pointer">{t('popularServicesTab')}</button>
          <button className="px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200/50 rounded-md font-medium transition-all duration-200 cursor-pointer">{t('newServicesTab')}</button>
          <button className="px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200/50 rounded-md font-medium transition-all duration-200 cursor-pointer">{t('mobileServicesTab')}</button>
          <button className="px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200/50 rounded-md font-medium transition-all duration-200 cursor-pointer">{t('officeServicesTab')}</button>
          <button className="px-3.5 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200/50 rounded-md font-medium transition-all duration-200 cursor-pointer">{t('alleServices')}</button>
        </div>

        {/* 36-item dense service grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {/* Row 1 */}
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Laptop className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('digitalCenter')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <PenLine className="w-4.5 h-4.5 text-blue-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('onlineApp')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <IdCard className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('nidServices')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Book className="w-4.5 h-4.5 text-purple-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('passportVisa')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Car className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('brtaServices')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Map className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('landServices')}</span>
          </a>

          {/* Row 2 */}
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <MapPin className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('landInfo')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <FileText className="w-4.5 h-4.5 text-purple-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('taxServices')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <School className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('education')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-red-300 hover:bg-red-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Stethoscope className="w-4.5 h-4.5 text-red-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('healthSupport')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <UserPlus className="w-4.5 h-4.5 text-purple-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('recruitment')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Receipt className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('incomeTax')}</span>
          </a>

          {/* Row 3 */}
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Car className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('drivingLicense')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Briefcase className="w-4.5 h-4.5 text-purple-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('tradeLicense')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <FileText className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('tinServices')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Users className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('socialServices')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <UserPlus className="w-4.5 h-4.5 text-purple-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('womenDev')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Users className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('youthDev')}</span>
          </a>

          {/* Row 4 */}
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Home className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('upServices')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Home className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('municipalInfo')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Mail className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('postalCourier')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Landmark className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('challan')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Leaf className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('livestock')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <CheckCircle className="w-4.5 h-4.5 text-orange-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('pdsSupport')}</span>
          </a>

          {/* Row 5 */}
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Landmark className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('banking')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Scale className="w-4.5 h-4.5 text-purple-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('commerce')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Compass className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('tourism')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Compass className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('ecoTourism')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Tv className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('radioTv')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <FileText className="w-4.5 h-4.5 text-purple-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('forms')}</span>
          </a>

          {/* Row 6 */}
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Book className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('publications')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Bot className="w-4.5 h-4.5 text-emerald-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('aiTools')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Lightbulb className="w-4.5 h-4.5 text-purple-600 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('innovation')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Network className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('ictServices')}</span>
          </a>
          <a href="#" className="bg-white p-2 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/10 transition-all duration-300 flex flex-col items-center text-center justify-center min-h-[78px] rounded-lg group">
            <Rocket className="w-4.5 h-4.5 text-blue-500 mb-1 group-hover:scale-105 transition-transform" />
            <span className="text-[10px] font-bold text-gray-700 leading-tight">{t('startupBd')}</span>
          </a>
          <a href="#" className="bg-white p-2 border-2 border-dashed border-emerald-300/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50/10 transition-all duration-300 flex items-center justify-center min-h-[78px] rounded-lg gap-2 group cursor-pointer bg-emerald-50/5">
            <HelpCircle className="w-5 h-5 text-[#006a4e] shrink-0" />
            <div className="text-left">
              <span className="block text-[11px] font-extrabold text-[#006a4e]">{t('faq')}</span>
              <span className="block text-[9px] text-gray-500 font-medium leading-tight">{t('askQuestion')}</span>
            </div>
          </a>
        </div>
      </div>

      {/* 6 Large Shortcut Cards inside the Left Column */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-8 px-4 md:px-0">
        {/* Card 1: Citizen Charter */}
        <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006a4e] flex items-center justify-center mb-5 group-hover:bg-[#006a4e] group-hover:text-white group-hover:scale-105 shadow-sm transition-all duration-300">
              <Users className="w-5.5 h-5.5" />
            </div>
            <h4 className="text-[15px] font-black text-gray-900 mb-2.5 tracking-tight group-hover:text-[#006a4e] transition-colors duration-200">{t('charterTitle')}</h4>
            <p className="text-[12px] text-gray-500 leading-relaxed min-h-[36px]">{t('charterDesc')}</p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100">
            <a href="#" className="text-[12px] text-[#006a4e] hover:text-emerald-800 font-extrabold flex items-center justify-between group/btn">
              <span>{t('viewMore')}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </a>
          </div>
        </div>

        {/* Card 2: Downloads */}
        <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006a4e] flex items-center justify-center mb-5 group-hover:bg-[#006a4e] group-hover:text-white group-hover:scale-105 shadow-sm transition-all duration-300">
              <DownloadCloud className="w-5.5 h-5.5" />
            </div>
            <h4 className="text-[15px] font-black text-gray-900 mb-2.5 tracking-tight group-hover:text-[#006a4e] transition-colors duration-200">{t('downloadTitle')}</h4>
            <p className="text-[12px] text-gray-500 leading-relaxed min-h-[36px]">{t('downloadDesc')}</p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100">
            <a href="#" className="text-[12px] text-[#006a4e] hover:text-emerald-800 font-extrabold flex items-center justify-between group/btn">
              <span>{t('viewMore')}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </a>
          </div>
        </div>

        {/* Card 3: Publications */}
        <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006a4e] flex items-center justify-center mb-5 group-hover:bg-[#006a4e] group-hover:text-white group-hover:scale-105 shadow-sm transition-all duration-300">
              <BookOpen className="w-5.5 h-5.5" />
            </div>
            <h4 className="text-[15px] font-black text-gray-900 mb-2.5 tracking-tight group-hover:text-[#006a4e] transition-colors duration-200">{t('pubTitle')}</h4>
            <p className="text-[12px] text-gray-500 leading-relaxed min-h-[36px]">{t('pubDesc')}</p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100">
            <a href="#" className="text-[12px] text-[#006a4e] hover:text-emerald-800 font-extrabold flex items-center justify-between group/btn">
              <span>{t('viewMore')}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </a>
          </div>
        </div>

        {/* Card 4: Photo Gallery */}
        <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006a4e] flex items-center justify-center mb-5 group-hover:bg-[#006a4e] group-hover:text-white group-hover:scale-105 shadow-sm transition-all duration-300">
              <Image className="w-5.5 h-5.5" />
            </div>
            <h4 className="text-[15px] font-black text-gray-900 mb-2.5 tracking-tight group-hover:text-[#006a4e] transition-colors duration-200">{t('photoTitle')}</h4>
            <p className="text-[12px] text-gray-500 leading-relaxed min-h-[36px]">{t('photoDesc')}</p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100">
            <a href="#" className="text-[12px] text-[#006a4e] hover:text-emerald-800 font-extrabold flex items-center justify-between group/btn">
              <span>{t('viewMore')}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </a>
          </div>
        </div>

        {/* Card 5: Video Gallery */}
        <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006a4e] flex items-center justify-center mb-5 group-hover:bg-[#006a4e] group-hover:text-white group-hover:scale-105 shadow-sm transition-all duration-300">
              <Film className="w-5.5 h-5.5" />
            </div>
            <h4 className="text-[15px] font-black text-gray-900 mb-2.5 tracking-tight group-hover:text-[#006a4e] transition-colors duration-200">{t('videoTitle')}</h4>
            <p className="text-[12px] text-gray-500 leading-relaxed min-h-[36px]">{t('videoDesc')}</p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100">
            <a href="#" className="text-[12px] text-[#006a4e] hover:text-emerald-800 font-extrabold flex items-center justify-between group/btn">
              <span>{t('viewMore')}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </a>
          </div>
        </div>

        {/* Card 6: Social Media */}
        <div className="bg-white p-6 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006a4e] flex items-center justify-center mb-5 group-hover:bg-[#006a4e] group-hover:text-white group-hover:scale-105 shadow-sm transition-all duration-300">
              <Share2 className="w-5.5 h-5.5" />
            </div>
            <h4 className="text-[15px] font-black text-gray-900 mb-2.5 tracking-tight group-hover:text-[#006a4e] transition-colors duration-200">{t('socialTitle')}</h4>
            <p className="text-[12px] text-gray-500 leading-relaxed mb-3">{t('socialDesc')}</p>
            <div className="flex gap-2.5 mb-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#1877f2]/10 text-[#1877f2] flex items-center justify-center hover:bg-[#1877f2] hover:text-white hover:scale-110 transition-all shadow-sm">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#ff0000]/10 text-[#ff0000] flex items-center justify-center hover:bg-[#ff0000] hover:text-white hover:scale-110 transition-all shadow-sm">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#1da1f2]/10 text-[#1da1f2] flex items-center justify-center hover:bg-[#1da1f2] hover:text-white hover:scale-110 transition-all shadow-sm">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#0a66c2]/10 text-[#0a66c2] flex items-center justify-center hover:bg-[#0a66c2] hover:text-white hover:scale-110 transition-all shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100">
            <a href="#" className="text-[12px] text-[#006a4e] hover:text-emerald-800 font-extrabold flex items-center justify-between group/btn">
              <span>{t('viewMore')}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
