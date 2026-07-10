import { FileText, Megaphone, CalendarDays, Flag, User, DownloadCloud, BookOpen, Film, ArrowRight } from 'lucide-react';

export default function NoticesAndShortcuts() {
  return (
    <>
      <section className="max-w-[1440px] mx-auto w-full px-4 xl:px-4 py-4 grid grid-cols-1">
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">Ministries & Offices Shortcuts</h3>
          <a href="#" className="text-xs text-bd-green font-bold hover:underline">View All</a>
        </div>
        <div className="bg-white py-4 md:p-5 md:rounded-xl md:border md:border-gray-200 md:shadow-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="bg-white pt-2 pb-4 md:p-2 flex flex-col space-y-3.5 hover:bg-gray-50/50 transition-colors border-0">
            <h4 className="text-[13px] font-bold text-gray-800">Citizen Charter</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed">Official process guarantees and structural timeline matrix details.</p>
            <div className="mt-auto pt-2">
              <a href="#" className="text-[10px] text-bd-green font-bold hover:underline flex items-center">View More <ArrowRight className="w-3 h-3 ml-1" /></a>
            </div>
          </div>
          <div className="bg-white py-4 md:p-2 md:pl-6 flex flex-col space-y-3.5 hover:bg-gray-50/50 transition-colors border-0">
            <h4 className="text-[13px] font-bold text-gray-800">Downloads</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed">Download official forms, documents, manuals and guidelines.</p>
            <div className="mt-auto pt-2">
              <a href="#" className="text-[10px] text-bd-green font-bold hover:underline flex items-center">View More <ArrowRight className="w-3 h-3 ml-1" /></a>
            </div>
          </div>
          <div className="bg-white py-4 md:p-2 md:pl-6 flex flex-col space-y-3.5 hover:bg-gray-50/50 transition-colors border-0">
            <h4 className="text-[13px] font-bold text-gray-800">Publications</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed">Browse reports, official gazettes, statistics, and directories.</p>
            <div className="mt-auto pt-2">
              <a href="#" className="text-[10px] text-bd-green font-bold hover:underline flex items-center">View More <ArrowRight className="w-3 h-3 ml-1" /></a>
            </div>
          </div>
          <div className="bg-white pt-4 pb-2 md:p-2 md:pl-6 flex flex-col space-y-3.5 hover:bg-gray-50/50 transition-colors border-0">
            <h4 className="text-[13px] font-bold text-gray-800">Photo Gallery</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed">Explore photos of events, activities and development projects.</p>
            <div className="mt-auto pt-2">
              <a href="#" className="text-[10px] text-bd-green font-bold hover:underline flex items-center">View More <ArrowRight className="w-3 h-3 ml-1" /></a>
            </div>
          </div>
          <div className="bg-white pt-4 pb-2 md:p-2 md:pl-6 flex flex-col space-y-3.5 hover:bg-gray-50/50 transition-colors border-0">
            <h4 className="text-[13px] font-bold text-gray-800">Video Gallery</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed">Watch videos on government activities, achievements and services.</p>
            <div className="mt-auto pt-2">
              <a href="#" className="text-[10px] text-bd-green font-bold hover:underline flex items-center">View More <ArrowRight className="w-3 h-3 ml-1" /></a>
            </div>
          </div>
          <div className="bg-white pt-4 pb-2 md:p-2 md:pl-6 flex flex-col space-y-3.5 hover:bg-gray-50/50 transition-colors border-0">
            <h4 className="text-[13px] font-bold text-gray-800">Social Media</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed">Stay connected through our official social media channels.</p>
            <div className="mt-auto pt-2 flex gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">f</div>
              <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px]">▶</div>
              <div className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-[10px]">t</div>
              <div className="w-6 h-6 rounded-full bg-blue-700 text-white flex items-center justify-center text-[10px]">in</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
