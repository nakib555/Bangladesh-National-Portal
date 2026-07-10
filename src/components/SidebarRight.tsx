import { Phone, MoreHorizontal, FileText, Megaphone, CalendarDays, Flag } from 'lucide-react';
import GovtAtGlance from './GovtAtGlance';

export default function SidebarRight() {
  return (
    <>
      <GovtAtGlance />
      
      <div className="bg-transparent md:bg-white mt-0 lg:mt-0 py-2 md:p-4 md:rounded-xl md:border md:border-gray-200 md:shadow-sm border-0 w-full">
        <div className="flex justify-between items-center mb-3 border-b border-gray-100 md:border-b-0 pb-2 md:pb-0">
          <h3 className="text-[12px] md:text-sm font-bold uppercase tracking-wider text-bd-red flex items-center gap-1.5">
            <span className="w-1 h-3.5 bg-bd-red inline-block rounded-sm md:hidden"></span>
            Emergency Hotline Numbers
          </h3>
          <a href="#" className="text-[10px] md:text-xs text-bd-green font-bold hover:underline">View All</a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 text-[10px] md:text-xs">
          <div className="flex items-start p-1.5 md:p-2.5 border border-red-100/50 md:border-gray-100 rounded-xl md:rounded-lg bg-red-50/20 md:bg-white">
            <Phone className="text-bd-red md:text-bd-green mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4" />
            <div>
              <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">999</p>
              <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-none md:leading-tight">Emergency</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 md:p-2.5 border border-red-100/50 md:border-gray-100 rounded-xl md:rounded-lg bg-red-50/20 md:bg-white">
            <Phone className="text-bd-red md:text-bd-green mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4" />
            <div>
              <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">333</p>
              <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-none md:leading-tight">Government<br className="hidden md:block" /> Information</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 md:p-2.5 border border-red-100/50 md:border-gray-100 rounded-xl md:rounded-lg bg-red-50/20 md:bg-white">
            <Phone className="text-bd-red mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4" />
            <div>
              <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">102</p>
              <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-none md:leading-tight">Fire Service</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 md:p-2.5 border border-red-100/50 md:border-gray-100 rounded-xl md:rounded-lg bg-red-50/20 md:bg-white">
            <Phone className="text-bd-red mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4" />
            <div>
              <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">109</p>
              <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-none md:leading-tight">Women & Child<br className="hidden md:block" /> Helpline</p>
            </div>
          </div>
          
          <div className="flex items-start p-1.5 md:p-2.5 border border-red-100/50 md:border-gray-100 rounded-xl md:rounded-lg bg-red-50/20 md:bg-white">
            <Phone className="text-bd-red mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4" />
            <div>
              <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">1098</p>
              <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-none md:leading-tight">Child Helpline</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 md:p-2.5 border border-red-100/50 md:border-gray-100 rounded-xl md:rounded-lg bg-red-50/20 md:bg-white">
            <Phone className="text-bd-red mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4" />
            <div>
              <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">106</p>
              <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-none md:leading-tight">Anti-Corruption</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 md:p-2.5 border border-red-100/50 md:border-gray-100 rounded-xl md:rounded-lg bg-red-50/20 md:bg-white">
            <Phone className="text-bd-red mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4" />
            <div>
              <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">16122</p>
              <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-none md:leading-tight">Smart Land<br className="hidden md:block" /> Service</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 md:p-2.5 border border-red-100/50 md:border-gray-100 rounded-xl md:rounded-lg bg-red-50/20 md:bg-white">
            <Phone className="text-bd-red mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4" />
            <div>
              <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">16445</p>
              <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-none md:leading-tight">Passport<br className="hidden md:block" /> Hotline</p>
            </div>
          </div>
          
          <div className="flex items-start p-1.5 md:p-2.5 border border-red-100/50 md:border-gray-100 rounded-xl md:rounded-lg bg-red-50/20 md:bg-white">
            <Phone className="text-bd-red mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4" />
            <div>
              <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">16999</p>
              <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-none md:leading-tight">Electricity</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 md:p-2.5 border border-red-100/50 md:border-gray-100 rounded-xl md:rounded-lg bg-red-50/20 md:bg-white">
            <Phone className="text-bd-red mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4" />
            <div>
              <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">16699</p>
              <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-none md:leading-tight">Legal Aid</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 md:p-2.5 border border-red-100/50 md:border-gray-100 rounded-xl md:rounded-lg bg-red-50/20 md:bg-white">
            <Phone className="text-bd-red mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4" />
            <div>
              <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">16131</p>
              <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-none md:leading-tight">Universal<br className="hidden md:block" /> Pension</p>
            </div>
          </div>
          
          <div className="flex items-center p-1.5 md:p-2.5 border border-gray-200 md:border-gray-100 rounded-xl md:rounded-lg bg-gray-50/50 md:bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
            <div className="bg-gray-200 md:bg-gray-300 rounded-full p-1 md:p-1.5 mr-2 md:mr-3 text-black font-black">
              <MoreHorizontal className="w-4 h-4 md:w-4 md:h-4" />
            </div>
            <span className="font-bold text-gray-500 md:text-black md:text-[12px] text-[10px] leading-tight">More<br className="hidden md:block" /> Hotlines</span>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6 mt-4 md:mt-6">
        <div className="xl:col-span-7 bg-white py-4 md:py-5 px-4 md:px-5 md:rounded-xl md:border md:border-gray-200 md:shadow-sm">
          <div className="flex border-b border-gray-100 pb-3 mb-4 text-[12px] md:text-[11px] font-bold md:font-semibold gap-4 uppercase tracking-wider text-gray-400 md:text-gray-500 overflow-x-auto scrollbar-hide">
            <button className="pb-2 border-b-2 border-bd-green text-bd-green font-bold shrink-0 flex items-center gap-1.5">
              <span className="md:hidden w-1 h-3.5 bg-bd-red inline-block rounded-sm"></span>
              Notices
            </button>
            <button className="pb-2 text-gray-400 hover:text-gray-700 shrink-0">News</button>
            <button className="pb-2 text-gray-400 hover:text-gray-700 shrink-0">Announcements</button>
            <button className="pb-2 text-gray-400 hover:text-gray-700 shrink-0">Events</button>
            <button className="pb-2 text-gray-400 hover:text-gray-700 shrink-0">Campaigns</button>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 text-xs items-start">
              <div className="bg-bd-green text-white text-center px-2 py-1.5 rounded-xl min-w-[48px] shadow-sm">
                <span className="block text-sm font-extrabold leading-none">10</span>
                <span className="text-[8px] uppercase font-bold text-emerald-200">Jul</span>
              </div>
              <div>
                <a href="#" className="hover:text-bd-green hover:underline font-semibold text-gray-800 leading-snug block">Circular on Government Office Timing During Summer Season</a>
                <span className="text-[10px] text-gray-400 font-medium">Ministry of Public Administration <span className="bg-bd-red text-white font-bold text-[8px] px-1 py-0.5 rounded-xl ml-1 uppercase">New</span></span>
              </div>
            </div>
            <div className="flex gap-3 text-xs items-start">
              <div className="bg-bd-green text-white text-center px-2 py-1.5 rounded-xl min-w-[48px] shadow-sm">
                <span className="block text-sm font-extrabold leading-none">09</span>
                <span className="text-[8px] uppercase font-bold text-emerald-200">Jul</span>
              </div>
              <div>
                <a href="#" className="hover:text-bd-green hover:underline font-semibold text-gray-800 leading-snug block">e-Tender Notice: Structural Development and Infrastructure Construction</a>
                <span className="text-[10px] text-gray-400 font-medium">Public Works Department <span className="bg-bd-red text-white font-bold text-[8px] px-1 py-0.5 rounded-xl ml-1 uppercase">New</span></span>
              </div>
            </div>
            <div className="flex gap-3 text-xs items-start">
              <div className="bg-bd-green text-white text-center px-2 py-1.5 rounded-xl min-w-[48px] shadow-sm">
                <span className="block text-sm font-extrabold leading-none">08</span>
                <span className="text-[8px] uppercase font-bold text-emerald-200">Jul</span>
              </div>
              <div>
                <a href="#" className="hover:text-bd-green hover:underline font-semibold text-gray-800 leading-snug block">Circular Regarding Pilgrim Registration for Holy Hajj 2025</a>
                <span className="text-[10px] text-gray-400 font-medium">Ministry of Religious Affairs</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="xl:col-span-5 space-y-3 flex flex-col justify-between bg-white px-4 md:px-5 py-4 md:py-5 md:rounded-xl md:border md:border-gray-200 md:shadow-sm">
          <a href="#" className="flex justify-between items-center p-3 pt-3 ml-[10px] rounded-xl border border-purple-200 bg-purple-50/50 hover:bg-purple-50 transition-colors">
            <div>
              <span className="text-[11px] md:text-xs font-bold text-purple-900 uppercase tracking-wider block">Tender Notices</span>
              <span className="text-[9px] text-purple-600 block mt-0.5">View All active tenders</span>
            </div>
            <FileText className="text-purple-600 w-5 h-5" />
          </a>
          <a href="#" className="flex justify-between items-center p-3 ml-[10px] rounded-xl border border-blue-200 bg-blue-50/50 hover:bg-blue-50 transition-colors">
            <div>
              <span className="text-[11px] md:text-xs font-bold text-blue-900 uppercase tracking-wider block">Recent Circulars</span>
              <span className="text-[9px] text-blue-600 block mt-0.5">Government notices and rules</span>
            </div>
            <Megaphone className="text-blue-600 w-5 h-5" />
          </a>
          <a href="#" className="flex justify-between items-center p-3 ml-[10px] rounded-xl border border-amber-200 bg-amber-50/50 hover:bg-amber-50 transition-colors">
            <div>
              <span className="text-[11px] md:text-xs font-bold text-amber-900 uppercase tracking-wider block">National Events</span>
              <span className="text-[9px] text-amber-600 block mt-0.5">Key national holidays & events</span>
            </div>
            <CalendarDays className="text-amber-600 w-5 h-5" />
          </a>
          <a href="#" className="flex justify-between items-center p-3 ml-[10px] rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
            <div>
              <span className="text-[11px] md:text-xs font-bold text-emerald-900 uppercase tracking-wider block">Government Campaigns</span>
              <span className="text-[9px] text-emerald-600 block mt-0.5">Active information campaigns</span>
            </div>
            <Flag className="text-bd-green w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
}
// TEMP APPEND
