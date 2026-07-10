import { Info, Contrast, Search, Home, ChevronDown, User, Menu, Accessibility } from 'lucide-react';

export default function Header() {
  return (
    <>
      <div className="hidden lg:flex bg-bd-green text-white text-[10px] py-1.5 px-4 border-b border-white/10 select-none justify-between items-center">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 w-full">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-center md:text-left">Government of the People's Republic of Bangladesh</span>
          </div>
          <div className="flex items-center space-x-3.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 whitespace-nowrap scrollbar-hide">
            <a href="#" className="hover:underline flex items-center gap-1">
              <Info className="w-3.5 h-3.5" /> Access to Information (a2i)
            </a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:underline flex items-center gap-1">
              🇧🇩 Bangladesh Gov Portal Apps
            </a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:underline">Screen Reader</a>
            <span className="text-white/20">|</span>
            <div className="flex space-x-1 items-center bg-black/15 px-1.5 py-0.5 rounded">
              <button className="px-1 hover:text-white/75 font-bold">A-</button>
              <button className="px-1 hover:text-white/75 font-bold border-x border-white/10 px-1.5">A</button>
              <button className="px-1 hover:text-white/75 font-bold">A+</button>
            </div>
            <span className="text-white/20">|</span>
            <button className="hover:underline flex items-center gap-1">
              <Contrast className="w-3.5 h-3.5" /> High Contrast
            </button>
            <span className="text-white/20">|</span>
            <div className="font-bold flex space-x-1.5">
              <a href="#" className="hover:text-bd-red">বাংলা</a>
              <span className="text-white/30">|</span>
              <a href="#" className="underline underline-offset-4 decoration-2">English</a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden bg-white text-white flex justify-end items-center px-4 py-3 gap-4 text-[12px] font-bold border-b border-gray-100">
        <a href="#" className="text-gray-600">বাংলা</a>
        <a href="#" className="bg-emerald-50 text-bd-green px-3 py-1.5 border border-emerald-100 rounded-md">English</a>
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
            <div className="flex items-center space-x-3.5">
              <svg className="w-14 h-14 md:w-16 md:h-16 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="#006a4e"/>
                <circle cx="50" cy="50" r="33" fill="#da291c"/>
                <circle cx="50" cy="50" r="28" fill="#006a4e"/>
                <path d="M50,22 L53,35 L66,35 L55,43 L59,56 L50,47 L41,56 L45,43 L34,35 L47,35 Z" fill="#F4B400"/>
                <text x="50" y="82" fill="white" fontSize="6" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">গণপ্রজাতন্ত্রী বাংলাদেশ</text>
              </svg>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-bd-green leading-tight tracking-tight">Bangladesh National Portal</h1>
                <p className="text-[11px] md:text-xs text-gray-500 font-semibold mt-0.5">bangladesh.gov.bd</p>
                <p className="hidden lg:block text-[10px] text-gray-400 mt-0.5">National Portal of the Government of the People's Republic of Bangladesh</p>
              </div>
            </div>
            <button className="lg:hidden text-gray-800 p-2 border border-gray-200 rounded-md bg-gray-50">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="w-full lg:w-[450px]">
            <div className="hidden lg:flex border border-gray-300 rounded-md overflow-hidden bg-white h-9 shadow-sm">
              <div className="flex items-center px-3 bg-white border-r border-gray-200 relative">
                <select className="text-[13px] text-gray-700 bg-transparent outline-none cursor-pointer appearance-none pr-5 relative z-10">
                  <option>All</option>
                  <option>Forms</option>
                  <option>Publications</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-700 absolute right-2 pointer-events-none z-0" />
              </div>
              <input type="text" placeholder="Search by keyword" className="w-full px-3 text-[13px] outline-none text-gray-700 placeholder-gray-500" />
              <button className="bg-bd-green hover:bg-bd-hover-green text-white px-4 transition-colors flex items-center justify-center">
                <Search className="w-4 h-4" />
              </button>
            </div>
            <div className="hidden lg:flex mt-2 text-[11px] flex-wrap items-center gap-1.5 font-bold">
              <span className="text-bd-green">Popular Searches:</span>
              <a href="#" className="hover:underline text-bd-green">NID</a>
              <span className="text-gray-300 font-normal">|</span>
              <a href="#" className="hover:underline text-bd-green">Passport</a>
              <span className="text-gray-300 font-normal">|</span>
              <a href="#" className="hover:underline text-bd-green">Tax</a>
              <span className="text-gray-300 font-normal">|</span>
              <a href="#" className="hover:underline text-bd-green">Land</a>
              <span className="text-gray-300 font-normal">|</span>
              <a href="#" className="hover:underline text-bd-green">BRTA</a>
              <span className="text-gray-300 font-normal">|</span>
              <a href="#" className="hover:underline text-bd-green">Visa</a>
            </div>

            <div className="lg:hidden border border-gray-300 rounded-xl overflow-hidden bg-white h-11 shadow-sm flex items-center px-4 mt-3">
              <input type="text" placeholder="Search services, offices, information..." className="w-full text-[13px] outline-none text-gray-700 placeholder-gray-500" />
              <Search className="w-5 h-5 text-gray-600 shrink-0" />
            </div>
          </div>
        </div>
      </header>

      <nav className="hidden lg:flex bg-bd-green text-white text-[11px] sticky top-0 z-50 shadow-md select-none">
        <div className="max-w-[1440px] mx-auto flex justify-between items-stretch overflow-x-auto scrollbar-hide">
          <div className="flex items-center whitespace-nowrap">
            <a href="#" className="sticky left-0 z-10 px-5 py-3.5 bg-bd-hover-green hover:bg-emerald-950 transition-colors flex items-center justify-center shadow-[4px_0_12px_rgba(0,0,0,0.15)] border-r border-white/10">
              <Home className="w-4 h-4" />
            </a>
            <a href="#" className="px-3.5 py-3.5 hover:bg-bd-hover-green border-r border-white/5 transition-colors font-semibold flex items-center">
              About Bangladesh <ChevronDown className="w-2.5 h-2.5 ml-1 opacity-70" />
            </a>
            <a href="#" className="px-3.5 py-3.5 hover:bg-bd-hover-green border-r border-white/5 transition-colors font-semibold flex items-center">
              Government <ChevronDown className="w-2.5 h-2.5 ml-1 opacity-70" />
            </a>
            <a href="#" className="px-3.5 py-3.5 hover:bg-bd-hover-green border-r border-white/5 transition-colors font-semibold flex items-center">
              e-Services <ChevronDown className="w-2.5 h-2.5 ml-1 opacity-70" />
            </a>
            <a href="#" className="px-3.5 py-3.5 hover:bg-bd-hover-green border-r border-white/5 transition-colors font-semibold flex items-center">
              Ministries & Divisions <ChevronDown className="w-2.5 h-2.5 ml-1 opacity-70" />
            </a>
            <a href="#" className="px-3.5 py-3.5 hover:bg-bd-hover-green border-r border-white/5 transition-colors font-semibold flex items-center">
              Offices <ChevronDown className="w-2.5 h-2.5 ml-1 opacity-70" />
            </a>
            <a href="#" className="px-3.5 py-3.5 hover:bg-bd-hover-green border-r border-white/5 transition-colors font-semibold flex items-center">
              Citizen Corner <ChevronDown className="w-2.5 h-2.5 ml-1 opacity-70" />
            </a>
            <a href="#" className="px-3.5 py-3.5 hover:bg-bd-hover-green border-r border-white/5 transition-colors font-semibold flex items-center">
              Business Corner <ChevronDown className="w-2.5 h-2.5 ml-1 opacity-70" />
            </a>
            <a href="#" className="px-3.5 py-3.5 hover:bg-bd-hover-green border-r border-white/5 transition-colors font-semibold">Contact Us</a>
          </div>
          <div className="sticky right-0 bg-bd-green flex items-center justify-center px-4 shadow-[-4px_0_12px_rgba(0,0,0,0.15)] z-10">
            <a href="#" className="bg-white hover:bg-gray-100 text-bd-green font-bold px-4 py-1.5 rounded-md flex items-center justify-center gap-1.5 transition-colors shrink-0">
              <User className="w-3.5 h-3.5" /> My Portal
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
