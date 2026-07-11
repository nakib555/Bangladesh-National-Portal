import { Info, Contrast, Search, Home, ChevronDown, User, Menu, Accessibility } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      <div className="hidden lg:flex bg-bd-hover-green text-white/95 text-[11px] py-2 px-4 border-b border-emerald-900/50 select-none justify-between items-center">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 w-full">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-center md:text-left tracking-wide uppercase text-[10px] text-emerald-100/90">{t('govtTitle')}</span>
          </div>
          <div className="flex items-center space-x-4 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 whitespace-nowrap scrollbar-hide text-[11px]">
            <a href="#" className="hover:text-emerald-100 flex items-center gap-1 transition-colors font-medium">
              <Info className="w-3.5 h-3.5 opacity-80" /> {t('a2i')}
            </a>
            <span className="text-white/15">|</span>
            <a href="#" className="hover:text-emerald-100 flex items-center gap-1 transition-colors font-medium">
              🇧🇩 {t('apps')}
            </a>
            <span className="text-white/15">|</span>
            <a href="#" className="hover:text-emerald-100 transition-colors">{t('screenReader')}</a>
            <span className="text-white/15">|</span>
            <div className="flex space-x-1 items-center bg-black/20 px-2 py-0.5 rounded-md border border-white/5 text-[10px]">
              <button className="px-1 hover:text-white font-bold transition-colors">A-</button>
              <button className="px-1 hover:text-white font-bold border-x border-white/10 px-2 transition-colors">A</button>
              <button className="px-1 hover:text-white font-bold transition-colors">A+</button>
            </div>
            <span className="text-white/15">|</span>
            <button className="hover:text-emerald-100 flex items-center gap-1 transition-colors font-medium">
              <Contrast className="w-3.5 h-3.5 opacity-80" /> {t('highContrast')}
            </button>
            <span className="text-white/15">|</span>
            <div className="font-bold flex space-x-2 text-[11px]">
              <button 
                onClick={() => setLang('bn')} 
                className={`transition-colors cursor-pointer ${lang === 'bn' ? 'text-bd-red underline underline-offset-4 decoration-2 font-black' : 'text-white/70 hover:text-white'}`}
              >
                বাংলা
              </button>
              <span className="text-white/20">|</span>
              <button 
                onClick={() => setLang('en')} 
                className={`transition-colors cursor-pointer ${lang === 'en' ? 'text-white underline underline-offset-4 decoration-2 font-black' : 'text-white/70 hover:text-white'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden bg-white text-white flex justify-end items-center px-4 py-3 gap-4 text-[12px] font-bold border-b border-gray-100 select-none">
        <button 
          onClick={() => setLang('bn')} 
          className={`px-2 py-1 rounded transition-all cursor-pointer ${lang === 'bn' ? 'bg-bd-red text-white font-black' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          বাংলা
        </button>
        <button 
          onClick={() => setLang('en')} 
          className={`px-3 py-1.5 border rounded-md transition-all cursor-pointer ${lang === 'en' ? 'bg-emerald-50 text-bd-green border-emerald-100 font-black' : 'text-gray-600 border-gray-200 hover:bg-gray-50'}`}
        >
          English
        </button>
        <button className="bg-bd-green text-white p-1.5 rounded-full w-7 h-7 flex items-center justify-center">
          <Accessibility className="w-4 h-4" />
        </button>
      </div>

      <header className="bg-white py-4 px-4 border-b border-white text-white relative overflow-hidden select-none">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none z-0 hidden lg:block">
          <svg className="w-full h-full object-cover opacity-95" viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="450" cy="85" r="45" fill="#da291c" />
            <polygon points="450,150 450,20 462,150" fill="#006a4e" />
            <polygon points="450,150 450,20 438,150" fill="#006a4e" />
            <polygon points="450,150 450,35 474,150" fill="#005740" />
            <polygon points="450,150 450,35 426,150" fill="#005740" />
            <polygon points="450,150 450,55 488,150" fill="#004d38" />
            <polygon points="450,150 450,55 412,150" fill="#004d38" />
            <polygon points="450,150 450,75 504,150" fill="#003e2d" />
            <polygon points="450,150 450,75 396,150" fill="#003e2d" />
            <polygon points="450,150 450,95 522,150" fill="#003022" />
            <polygon points="450,150 450,95 378,150" fill="#003022" />
            <path d="M260,40 Q265,35 270,40 Q275,35 280,40 Q275,43 270,41 Q265,43 260,40 Z" fill="#006a4e" />
            <path d="M290,25 Q293,21 297,25 Q301,21 305,25 Q301,27 297,26 Q293,27 290,25 Z" fill="#006a4e" opacity="0.8" />
            <path d="M320,50 Q324,46 329,50 Q334,46 339,50 Q334,52 329,51 Q324,52 320,50 Z" fill="#006a4e" opacity="0.6" />
          </svg>
        </div>
        
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 relative z-10">
          <div className="flex w-full lg:w-auto justify-between items-center">
            <div className="flex items-center space-x-3.5 animate-fade-in">
              <img 
                src="https://bangladesh.gov.bd/site-assets/images/logo.png" 
                alt="Government of Bangladesh Logo" 
                className="w-14 h-14 md:w-16 md:h-16 shrink-0 object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-black text-bd-green leading-none tracking-tight font-display">{t('nationalPortal')}</h1>
                <p className="text-[11px] md:text-xs text-emerald-800 font-semibold mt-1 tracking-wider uppercase font-mono">bangladesh.gov.bd</p>
                <p className="hidden lg:block text-[10px] text-gray-400 font-medium mt-0.5">{t('nationalPortalDesc')}</p>
              </div>
            </div>
            <button className="lg:hidden text-gray-800 p-2 border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors mx-3">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="w-full lg:w-[480px]">
            <div className="hidden lg:flex border-2 border-[#006a4e] rounded-md overflow-hidden bg-white h-10 shadow-sm">
              <div className="flex items-center px-3 bg-gray-50 border-r border-gray-200 relative">
                <select className="text-[12px] font-bold text-gray-700 bg-transparent outline-none cursor-pointer appearance-none pr-5 relative z-10">
                  <option>{lang === 'bn' ? 'সকল' : 'All'}</option>
                  <option>{lang === 'bn' ? 'ই-সেবা' : 'e-Services'}</option>
                  <option>{lang === 'bn' ? 'অফিস' : 'Offices'}</option>
                  <option>{lang === 'bn' ? 'ফরম' : 'Forms'}</option>
                  <option>{lang === 'bn' ? 'প্রকাশনা' : 'Publications'}</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-600 absolute right-2 pointer-events-none z-0" />
              </div>
              <input 
                type="text" 
                placeholder={t('searchPlaceholder')} 
                className="w-full px-3 text-[13px] outline-none text-gray-800 placeholder-gray-400 font-medium" 
              />
              <button className="bg-[#006a4e] hover:bg-emerald-800 text-white px-6 transition-colors flex items-center justify-center font-bold text-[13px] shrink-0">
                {t('searchBtn')}
              </button>
            </div>
            <div className="hidden lg:flex mt-2 text-[11px] flex-wrap items-center gap-1.5 font-bold">
              <span className="text-bd-green">{t('popularSearches')}</span>
              <a href="#" className="hover:underline text-bd-green">{t('nid')}</a>
              <span className="text-gray-300 font-normal">|</span>
              <a href="#" className="hover:underline text-bd-green">{t('passport')}</a>
              <span className="text-gray-300 font-normal">|</span>
              <a href="#" className="hover:underline text-bd-green">{t('tax')}</a>
              <span className="text-gray-300 font-normal">|</span>
              <a href="#" className="hover:underline text-bd-green">{t('land')}</a>
              <span className="text-gray-300 font-normal">|</span>
              <a href="#" className="hover:underline text-bd-green">{t('brta')}</a>
              <span className="text-gray-300 font-normal">|</span>
              <a href="#" className="hover:underline text-bd-green">{t('visa')}</a>
            </div>

            <div className="lg:hidden border border-gray-300 rounded-xl overflow-hidden bg-white h-11 shadow-sm flex items-center px-4 mt-3">
              <input 
                type="text" 
                placeholder={t('searchPlaceholder')} 
                className="w-full text-[13px] outline-none text-gray-700 placeholder-gray-500" 
              />
              <Search className="w-5 h-5 text-gray-600 shrink-0" />
            </div>
          </div>
        </div>
      </header>

      <nav className="hidden lg:flex bg-[#006a4e] text-white text-[11px] sticky top-0 z-50 shadow-md select-none">
        <div className="max-w-[1440px] mx-auto flex justify-between items-stretch overflow-x-auto scrollbar-hide w-full">
          <div className="flex items-center whitespace-nowrap">
            <a href="#" className="sticky left-0 z-10 px-5 py-3.5 bg-[#da291c] hover:bg-red-700 transition-colors flex items-center justify-center border-r border-white/10">
              <Home className="w-4 h-4" />
            </a>
            <a href="#" className="px-3 py-3.5 hover:bg-emerald-800 border-r border-white/5 transition-colors font-semibold flex items-center gap-1">
              {t('navAbout')} <ChevronDown className="w-2.5 h-2.5 opacity-70" />
            </a>
            <a href="#" className="px-3 py-3.5 hover:bg-emerald-800 border-r border-white/5 transition-colors font-semibold flex items-center gap-1">
              {t('navGovt')} <ChevronDown className="w-2.5 h-2.5 opacity-70" />
            </a>
            <a href="#" className="px-3 py-3.5 hover:bg-emerald-800 border-r border-white/5 transition-colors font-semibold flex items-center gap-1">
              {t('navServices')} <ChevronDown className="w-2.5 h-2.5 opacity-70" />
            </a>
            <a href="#" className="px-3 py-3.5 hover:bg-emerald-800 border-r border-white/5 transition-colors font-semibold flex items-center gap-1">
              {t('navMinistries')} <ChevronDown className="w-2.5 h-2.5 opacity-70" />
            </a>
            <a href="#" className="px-3 py-3.5 hover:bg-emerald-800 border-r border-white/5 transition-colors font-semibold flex items-center gap-1">
              {t('navOffices')} <ChevronDown className="w-2.5 h-2.5 opacity-70" />
            </a>
            <a href="#" className="px-3 py-3.5 hover:bg-emerald-800 border-r border-white/5 transition-colors font-semibold flex items-center gap-1">
              {t('navCitizen')} <ChevronDown className="w-2.5 h-2.5 opacity-70" />
            </a>
            <a href="#" className="px-3 py-3.5 hover:bg-emerald-800 border-r border-white/5 transition-colors font-semibold flex items-center gap-1">
              {t('navBusiness')} <ChevronDown className="w-2.5 h-2.5 opacity-70" />
            </a>
            <a href="#" className="px-3 py-3.5 hover:bg-emerald-800 border-r border-white/5 transition-colors font-semibold flex items-center gap-1">
              {t('navForeigners')} <ChevronDown className="w-2.5 h-2.5 opacity-70" />
            </a>
            <a href="#" className="px-3 py-3.5 hover:bg-emerald-800 border-r border-white/5 transition-colors font-semibold flex items-center gap-1">
              {t('navMedia')} <ChevronDown className="w-2.5 h-2.5 opacity-70" />
            </a>
            <a href="#" className="px-3 py-3.5 hover:bg-emerald-800 border-r border-white/5 transition-colors font-semibold">{t('navContact')}</a>
          </div>
          <div className="sticky right-0 bg-[#006a4e] flex items-center justify-center px-4 z-10">
            <a href="#" className="bg-[#da291c] hover:bg-red-700 text-white font-bold px-4 py-1.5 rounded-md flex items-center justify-center gap-1.5 transition-all shadow-sm">
              <User className="w-3.5 h-3.5" /> {t('myPortal')}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
