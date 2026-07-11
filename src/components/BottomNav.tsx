import { Home, FileText, Search, MoreHorizontal, FileSpreadsheet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BottomNav() {
  const { t } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 px-2 z-50 rounded-t-2xl shadow-[0_-8px_15px_rgba(0,0,0,0.05)] pb-safe">
      <button className="flex flex-col items-center text-gray-500 gap-1 w-16 hover:text-bd-green transition-colors cursor-pointer">
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-medium">{t('home')}</span>
      </button>
      <button className="flex flex-col items-center text-gray-500 gap-1 w-16 hover:text-bd-green transition-colors cursor-pointer">
        <FileText className="w-5 h-5" />
        <span className="text-[10px] font-medium">{t('services')}</span>
      </button>
      <button className="flex flex-col items-center text-gray-500 gap-1 w-16 hover:text-bd-green transition-colors cursor-pointer">
        <Search className="w-5 h-5" />
        <span className="text-[10px] font-medium">{t('search')}</span>
      </button>
      <button className="flex flex-col items-center text-bd-green gap-1 w-16 cursor-pointer">
        <div className="border-[1.5px] border-bd-green rounded-md p-[3px] bg-emerald-50">
          <FileSpreadsheet className="w-[18px] h-[18px]" />
        </div>
        <span className="text-[10px] font-bold">{t('notices')}</span>
      </button>
      <button className="flex flex-col items-center text-gray-500 gap-1 w-16 hover:text-bd-green transition-colors cursor-pointer">
        <MoreHorizontal className="w-5 h-5" />
        <span className="text-[10px] font-medium">{t('more')}</span>
      </button>
    </div>
  );
}
