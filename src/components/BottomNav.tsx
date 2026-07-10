import { Home, FileText, Search, MoreHorizontal, FileSpreadsheet } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 px-2 z-50 rounded-t-2xl shadow-[0_-8px_15px_rgba(0,0,0,0.05)] pb-safe">
      <button className="flex flex-col items-center text-gray-500 gap-1 w-16 hover:text-bd-green transition-colors">
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-medium">Home</span>
      </button>
      <button className="flex flex-col items-center text-gray-500 gap-1 w-16 hover:text-bd-green transition-colors">
        <FileText className="w-5 h-5" />
        <span className="text-[10px] font-medium">Services</span>
      </button>
      <button className="flex flex-col items-center text-gray-500 gap-1 w-16 hover:text-bd-green transition-colors">
        <Search className="w-5 h-5" />
        <span className="text-[10px] font-medium">Search</span>
      </button>
      <button className="flex flex-col items-center text-bd-green gap-1 w-16">
        <div className="border-[1.5px] border-bd-green rounded-md p-[3px] bg-emerald-50">
          <FileSpreadsheet className="w-[18px] h-[18px]" />
        </div>
        <span className="text-[10px] font-bold">Notices</span>
      </button>
      <button className="flex flex-col items-center text-gray-500 gap-1 w-16 hover:text-bd-green transition-colors">
        <MoreHorizontal className="w-5 h-5" />
        <span className="text-[10px] font-medium">More</span>
      </button>
    </div>
  );
}
