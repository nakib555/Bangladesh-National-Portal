import { ChevronLeft, ChevronRight, Calendar, Laptop, PenLine, GraduationCap, IdCard, Leaf, Scale, Book, School, Receipt, CheckCircle, FileText, Car, Stethoscope, UserPlus, Users, Rocket, HelpCircle, ArrowRight, Phone, MoreHorizontal } from 'lucide-react';

export default function MainFeed() {
  return (
    <div className="flex flex-col md:w-[750px] mx-auto lg:mx-0 w-full space-y-4 md:space-y-6">
      <div className="hero-gradient md:rounded-xl overflow-hidden relative shadow-md text-white w-full aspect-[4/3] md:aspect-auto md:h-[350px] flex items-center border-b border-emerald-950 md:border md:border-emerald-950 select-none">
        <button className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/45 items-center justify-center transition-colors z-20">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/45 items-center justify-center transition-colors z-20">
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="absolute -top-12 -right-12 md:left-6 md:top-auto md:-translate-y-1/2 w-48 h-48 md:w-44 md:h-44 hero-flag-circle rounded-full opacity-85 z-0"></div>
        
        <div className="p-6 md:p-8 relative z-10 w-full pl-6 md:pl-56 mt-24 md:mt-0">
          <p className="text-[16px] md:text-[18px] font-bold text-white md:text-yellow-300 leading-tight mb-2 md:mb-1">আমার ভাইয়ের রক্তে রাঙানো একুশে ফেব্রুয়ারি</p>
          <h2 className="text-sm md:text-base font-bold leading-tight mb-2">International Mother Language Day</h2>
          <p className="text-[11px] md:text-xs text-white md:text-white/75 font-bold md:font-medium flex items-center gap-1.5 mb-3 md:mb-0">
            <span className="md:hidden block w-4 border-t-2 border-white"></span>
            <Calendar className="w-3.5 h-3.5 hidden md:block" /> 21 February
          </p>
          <button className="md:hidden bg-emerald-800 text-white text-[11px] font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 w-max mt-2 shadow border border-emerald-600 hover:bg-emerald-700 transition-colors">
            Learn More <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
          <span className="w-2 h-2 bg-white rounded-full shadow-sm"></span>
          <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-sm"></span>
          <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-sm"></span>
          <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-sm"></span>
        </div>
      </div>

      <div className="bg-transparent md:bg-white md:rounded-xl md:border md:border-gray-200 py-2 md:p-4 md:shadow-sm relative w-full border-0 px-4 md:px-0">
        <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2 md:border-b md:border-gray-100 md:pb-3 md:mb-4">
          <h3 className="text-[12px] md:text-sm font-bold md:text-gray-500 text-bd-green uppercase tracking-wider flex items-center gap-1.5">
            <span className="md:hidden w-1 h-3.5 bg-bd-red inline-block rounded-sm"></span>
            Mega Projects
          </h3>
          <a href="#" className="text-[10px] md:text-xs text-bd-green hover:underline font-bold">View All</a>
        </div>
        
        <button className="hidden md:flex absolute left-1 top-[55%] -translate-y-1/2 w-6 h-6 rounded-full border border-gray-200 bg-white shadow-sm items-center justify-center text-gray-400 hover:text-gray-700 z-10">
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
        <button className="hidden md:flex absolute right-1 top-[55%] -translate-y-1/2 w-6 h-6 rounded-full border border-gray-200 bg-white shadow-sm items-center justify-center text-gray-400 hover:text-gray-700 z-10">
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-3 md:gap-4 px-0 md:px-2 pb-2 md:pb-0 scrollbar-hide snap-x">
          <div className="shrink-0 w-36 md:w-auto border border-gray-100 p-2 text-center bg-gray-50/50 rounded-xl flex flex-col justify-between items-center hover:shadow-sm transition-shadow snap-start">
            <div className="h-12 md:h-16 w-full bg-gray-200 rounded-xl flex items-center justify-center text-[9px] md:text-xs font-bold text-gray-400 mb-1.5 md:mb-3">[Bridge Photo]</div>
            <p className="text-[10px] md:text-xs font-bold text-gray-700 line-clamp-1">Padma Bridge</p>
            <span className="mt-1 md:mt-2 px-1.5 md:px-2 py-0.5 md:py-1 bg-emerald-100 text-[8px] md:text-[10px] text-emerald-800 font-bold rounded-xl md:rounded-full">Completed</span>
          </div>
          <div className="shrink-0 w-36 md:w-auto border border-gray-100 p-2 text-center bg-gray-50/50 rounded-xl flex flex-col justify-between items-center hover:shadow-sm transition-shadow snap-start">
            <div className="h-12 md:h-16 w-full bg-gray-200 rounded-xl flex items-center justify-center text-[9px] md:text-xs font-bold text-gray-400 mb-1.5 md:mb-3">[Metro Photo]</div>
            <p className="text-[10px] md:text-xs font-bold text-gray-700 line-clamp-1">Dhaka Metro Rail</p>
            <span className="mt-1 md:mt-2 px-1.5 md:px-2 py-0.5 md:py-1 bg-amber-100 text-[8px] md:text-[10px] text-amber-800 font-bold rounded-xl md:rounded-full">Ongoing</span>
          </div>
          <div className="shrink-0 w-36 md:w-auto border border-gray-100 p-2 text-center bg-gray-50/50 rounded-xl flex flex-col justify-between items-center hover:shadow-sm transition-shadow snap-start">
            <div className="h-12 md:h-16 w-full bg-gray-200 rounded-xl flex items-center justify-center text-[9px] md:text-xs font-bold text-gray-400 mb-1.5 md:mb-3">[Nuclear Photo]</div>
            <p className="text-[10px] md:text-xs font-bold text-gray-700 line-clamp-1">Rooppur Power</p>
            <span className="mt-1 md:mt-2 px-1.5 md:px-2 py-0.5 md:py-1 bg-amber-100 text-[8px] md:text-[10px] text-amber-800 font-bold rounded-xl md:rounded-full">Ongoing</span>
          </div>
          <div className="shrink-0 w-36 md:w-auto border border-gray-100 p-2 text-center bg-gray-50/50 rounded-xl flex flex-col justify-between items-center hover:shadow-sm transition-shadow snap-start">
            <div className="h-12 md:h-16 w-full bg-gray-200 rounded-xl flex items-center justify-center text-[9px] md:text-xs font-bold text-gray-400 mb-1.5 md:mb-3">[Expressway]</div>
            <p className="text-[10px] md:text-xs font-bold text-gray-700 line-clamp-1">Dhaka Elevated</p>
            <span className="mt-1 md:mt-2 px-1.5 md:px-2 py-0.5 md:py-1 bg-amber-100 text-[8px] md:text-[10px] text-amber-800 font-bold rounded-xl md:rounded-full">Ongoing</span>
          </div>
          <div className="shrink-0 w-36 md:w-auto border border-gray-100 p-2 text-center bg-gray-50/50 rounded-xl flex flex-col justify-between items-center hover:shadow-sm transition-shadow snap-start">
            <div className="h-12 md:h-16 w-full bg-gray-200 rounded-xl flex items-center justify-center text-[9px] md:text-xs font-bold text-gray-400 mb-1.5 md:mb-3">[Deep Sea Port]</div>
            <p className="text-[10px] md:text-xs font-bold text-gray-700 line-clamp-1">Matarbari Port</p>
            <span className="mt-1 md:mt-2 px-1.5 md:px-2 py-0.5 md:py-1 bg-amber-100 text-[8px] md:text-[10px] text-amber-800 font-bold rounded-xl md:rounded-full">Ongoing</span>
          </div>
        </div>
      </div>

      <div className="bg-transparent md:bg-white py-2 md:p-5 md:rounded-xl md:border md:border-gray-200 md:shadow-sm border-0 px-4 md:px-0">
        <div className="border-b border-gray-100 md:border-gray-100 md:border-b pb-3 mb-4 flex justify-between items-center">
          <h3 className="text-[12px] md:text-sm font-bold md:text-gray-500 text-bd-green uppercase tracking-wider flex items-center gap-1.5">
            <span className="md:hidden w-1 h-3.5 bg-bd-red inline-block rounded-sm"></span>
            Government e-Services
          </h3>
          <a href="#" className="text-[10px] md:text-xs text-bd-green hover:underline font-bold">All e-Services</a>
        </div>

        <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap gap-2 md:gap-3 text-[11px] md:text-xs mb-4 scrollbar-hide">
          <button className="px-2.5 py-1 md:px-4 md:py-1.5 bg-bd-green text-white rounded-xl md:rounded-full font-bold">Popular Services</button>
          <button className="px-2.5 py-1 md:px-4 md:py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl md:rounded-full">New Services</button>
          <button className="px-2.5 py-1 md:px-4 md:py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl md:rounded-full">Mobile Services</button>
          <button className="px-2.5 py-1 md:px-4 md:py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl md:rounded-full">Office Services</button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-blue-500 hover:bg-blue-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <Laptop className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Digital Center</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-blue-500 hover:bg-blue-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <PenLine className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Online App</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-emerald-500 hover:bg-emerald-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Education</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-teal-500 hover:bg-teal-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <IdCard className="w-5 h-5 md:w-6 md:h-6 text-teal-600 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Online Reg</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-emerald-500 hover:bg-emerald-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <Leaf className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Agriculture</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-purple-500 hover:bg-purple-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <Scale className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Recruitment</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-purple-500 hover:bg-purple-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <Book className="w-5 h-5 md:w-6 md:h-6 text-purple-500 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Passport & Visa</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-orange-500 hover:bg-orange-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <School className="w-5 h-5 md:w-6 md:h-6 text-orange-500 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Admission</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-orange-500 hover:bg-orange-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <Receipt className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Utility Bills</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-purple-500 hover:bg-purple-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Exam Results</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-emerald-500 hover:bg-emerald-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <FileText className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Income Tax</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-blue-500 hover:bg-blue-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <Car className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Vehicle Support</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-blue-500 hover:bg-blue-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <IdCard className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">NID Card</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-teal-500 hover:bg-teal-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <Stethoscope className="w-5 h-5 md:w-6 md:h-6 text-teal-600 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Health Support</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-pink-500 hover:bg-pink-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <UserPlus className="w-5 h-5 md:w-6 md:h-6 text-pink-500 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Women Dev</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-blue-500 hover:bg-blue-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Youth Dev</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-red-500 hover:bg-red-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <Rocket className="w-5 h-5 md:w-6 md:h-6 text-red-500 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Startup BD</span>
          </a>
          <a href="#" className="p-2 md:py-4 border border-gray-100 md:border-gray-200 rounded-xl md:rounded-2xl hover:border-blue-500 hover:bg-blue-50/20 transition-all flex flex-col items-center text-center justify-center min-h-[75px] md:min-h-[90px]">
            <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mb-1.5 md:mb-2" />
            <span className="text-[10px] md:text-[11px] font-semibold text-gray-600 leading-tight">Ask FAQ</span>
          </a>
        </div>
      </div>
    </div>
  );
}
