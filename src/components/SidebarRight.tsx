import { Phone, MoreHorizontal } from 'lucide-react';
import GovtAtGlance from './GovtAtGlance';

export default function SidebarRight() {
  return (
    <>
      <div className="hidden lg:block">
        <GovtAtGlance />
      </div>

      <div className="bg-white mt-0 lg:mt-6 py-4 border-0">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Emergency Hotlines</h3>
          <a href="#" className="text-[9px] text-bd-green font-bold hover:underline">View All</a>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="flex items-start p-1.5 border border-red-100/50 rounded-xl bg-red-50/20">
            <Phone className="text-bd-red mr-1.5 mt-0.5 w-3.5 h-3.5" />
            <div>
              <p className="font-extrabold text-gray-800 text-[11px] leading-tight">999</p>
              <p className="text-[8px] text-gray-400 leading-none">Emergency</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 border border-red-100/50 rounded-xl bg-red-50/20">
            <Phone className="text-bd-red mr-1.5 mt-0.5 w-3.5 h-3.5" />
            <div>
              <p className="font-extrabold text-gray-800 text-[11px] leading-tight">333</p>
              <p className="text-[8px] text-gray-400 leading-none">Govt Info</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 border border-red-100/50 rounded-xl bg-red-50/20">
            <Phone className="text-bd-red mr-1.5 mt-0.5 w-3.5 h-3.5" />
            <div>
              <p className="font-extrabold text-gray-800 text-[11px] leading-tight">102</p>
              <p className="text-[8px] text-gray-400 leading-none">Fire Service</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 border border-red-100/50 rounded-xl bg-red-50/20">
            <Phone className="text-bd-red mr-1.5 mt-0.5 w-3.5 h-3.5" />
            <div>
              <p className="font-extrabold text-gray-800 text-[11px] leading-tight">109</p>
              <p className="text-[8px] text-gray-400 leading-none">Women/Child</p>
            </div>
          </div>
          
          <div className="flex items-start p-1.5 border border-red-100/50 rounded-xl bg-red-50/20">
            <Phone className="text-bd-red mr-1.5 mt-0.5 w-3.5 h-3.5" />
            <div>
              <p className="font-extrabold text-gray-800 text-[11px] leading-tight">1098</p>
              <p className="text-[8px] text-gray-400 leading-none">Child Helpline</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 border border-red-100/50 rounded-xl bg-red-50/20">
            <Phone className="text-bd-red mr-1.5 mt-0.5 w-3.5 h-3.5" />
            <div>
              <p className="font-extrabold text-gray-800 text-[11px] leading-tight">106</p>
              <p className="text-[8px] text-gray-400 leading-none">Anti-Corruption</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 border border-red-100/50 rounded-xl bg-red-50/20">
            <Phone className="text-bd-red mr-1.5 mt-0.5 w-3.5 h-3.5" />
            <div>
              <p className="font-extrabold text-gray-800 text-[11px] leading-tight">16122</p>
              <p className="text-[8px] text-gray-400 leading-none">Smart Land</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 border border-red-100/50 rounded-xl bg-red-50/20">
            <Phone className="text-bd-red mr-1.5 mt-0.5 w-3.5 h-3.5" />
            <div>
              <p className="font-extrabold text-gray-800 text-[11px] leading-tight">16445</p>
              <p className="text-[8px] text-gray-400 leading-none">Passport Help</p>
            </div>
          </div>
          
          <div className="flex items-start p-1.5 border border-red-100/50 rounded-xl bg-red-50/20">
            <Phone className="text-bd-red mr-1.5 mt-0.5 w-3.5 h-3.5" />
            <div>
              <p className="font-extrabold text-gray-800 text-[11px] leading-tight">16999</p>
              <p className="text-[8px] text-gray-400 leading-none">Electricity</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 border border-red-100/50 rounded-xl bg-red-50/20">
            <Phone className="text-bd-red mr-1.5 mt-0.5 w-3.5 h-3.5" />
            <div>
              <p className="font-extrabold text-gray-800 text-[11px] leading-tight">16699</p>
              <p className="text-[8px] text-gray-400 leading-none">Legal Aid</p>
            </div>
          </div>
          <div className="flex items-start p-1.5 border border-red-100/50 rounded-xl bg-red-50/20">
            <Phone className="text-bd-red mr-1.5 mt-0.5 w-3.5 h-3.5" />
            <div>
              <p className="font-extrabold text-gray-800 text-[11px] leading-tight">16131</p>
              <p className="text-[8px] text-gray-400 leading-none">Pension Help</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-1.5 border border-gray-200 rounded-xl bg-gray-50/50 cursor-pointer hover:bg-gray-100 transition-colors">
            <MoreHorizontal className="text-gray-400 w-4 h-4 mr-2" />
            <span className="font-bold text-gray-500 text-[10px]">More List</span>
          </div>
        </div>
      </div>
    </>
  );
}
