import { FileText, Megaphone, CalendarDays, Flag, User, DownloadCloud, BookOpen, Film, ArrowRight } from 'lucide-react';

export default function NoticesAndShortcuts() {
  return (
    <>
      <section className="max-w-7xl mx-auto w-full px-4 py-4 grid grid-cols-1 lg:grid-cols-12 gap-6 select-none bg-white">
        
        <div className="lg:col-span-8 bg-white py-5">
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

        <div className="lg:col-span-4 space-y-3 flex flex-col justify-between">
          <a href="#" className="flex justify-between items-center p-3 rounded-xl border border-purple-200 bg-purple-50/50 hover:bg-purple-50 transition-colors">
            <div>
              <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block">Tender Notices</span>
              <span className="text-[9px] text-purple-600 block mt-0.5">View All active tenders</span>
            </div>
            <FileText className="text-purple-600 w-5 h-5" />
          </a>
          <a href="#" className="flex justify-between items-center p-3 rounded-xl border border-blue-200 bg-blue-50/50 hover:bg-blue-50 transition-colors">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">Recent Circulars</span>
              <span className="text-[9px] text-blue-600 block mt-0.5">Government notices and rules</span>
            </div>
            <Megaphone className="text-blue-600 w-5 h-5" />
          </a>
          <a href="#" className="flex justify-between items-center p-3 rounded-xl border border-amber-200 bg-amber-50/50 hover:bg-amber-50 transition-colors">
            <div>
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">National Events</span>
              <span className="text-[9px] text-amber-600 block mt-0.5">Key national holidays & events</span>
            </div>
            <CalendarDays className="text-amber-600 w-5 h-5" />
          </a>
          <a href="#" className="flex justify-between items-center p-3 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
            <div>
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">Government Campaigns</span>
              <span className="text-[9px] text-emerald-600 block mt-0.5">Active information campaigns</span>
            </div>
            <Flag className="text-bd-green w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto w-full px-4 py-4 grid grid-cols-1 md:grid-cols-4 gap-4 bg-white">
        <div className="bg-white py-4 flex items-start space-x-3.5 hover:shadow-sm transition-shadow border-0">
          <div className="bg-bd-light-bg p-2.5 rounded-xl text-bd-green"><User className="w-6 h-6" /></div>
          <div>
            <h4 className="text-xs font-bold text-gray-800">Citizen Charter</h4>
            <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">Official process guarantees and structural timeline matrix details.</p>
            <a href="#" className="text-[9px] text-bd-green font-bold hover:underline block mt-1.5 flex items-center">View Charter <ArrowRight className="w-3 h-3 ml-1 inline" /></a>
          </div>
        </div>
        <div className="bg-white py-4 flex items-start space-x-3.5 hover:shadow-sm transition-shadow border-0">
          <div className="bg-bd-light-bg p-2.5 rounded-xl text-bd-green"><DownloadCloud className="w-6 h-6" /></div>
          <div>
            <h4 className="text-xs font-bold text-gray-800">Downloads</h4>
            <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">Download official forms, documents, manuals and guidelines.</p>
            <a href="#" className="text-[9px] text-bd-green font-bold hover:underline block mt-1.5 flex items-center">Go to Files <ArrowRight className="w-3 h-3 ml-1 inline" /></a>
          </div>
        </div>
        <div className="bg-white py-4 flex items-start space-x-3.5 hover:shadow-sm transition-shadow border-0">
          <div className="bg-bd-light-bg p-2.5 rounded-xl text-bd-green"><BookOpen className="w-6 h-6" /></div>
          <div>
            <h4 className="text-xs font-bold text-gray-800">Publications</h4>
            <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">Browse reports, official gazettes, statistics, and directories.</p>
            <a href="#" className="text-[9px] text-bd-green font-bold hover:underline block mt-1.5 flex items-center">View Books <ArrowRight className="w-3 h-3 ml-1 inline" /></a>
          </div>
        </div>
        <div className="bg-white py-4 flex items-start space-x-3.5 hover:shadow-sm transition-shadow border-0">
          <div className="bg-bd-light-bg p-2.5 rounded-xl text-bd-green"><Film className="w-6 h-6" /></div>
          <div>
            <h4 className="text-xs font-bold text-gray-800">Media Gallery</h4>
            <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">Official high-resolution photos, documentaries, and press conferences.</p>
            <a href="#" className="text-[9px] text-bd-green font-bold hover:underline block mt-1.5 flex items-center">Open Gallery <ArrowRight className="w-3 h-3 ml-1 inline" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
