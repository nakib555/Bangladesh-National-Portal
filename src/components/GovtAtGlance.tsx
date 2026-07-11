import { Landmark, Network, Map, MapPin, Home, TreePine } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function GovtAtGlance() {
  const { t } = useLanguage();

  return (
    <div className="bg-transparent md:bg-white py-2 md:p-5 md:rounded-2xl md:border md:border-slate-100 md:shadow-md md:hover:shadow-lg transition-shadow duration-300 select-none border-0 px-4 md:px-0">
      <div className="flex justify-between items-center mb-3 border-b pb-2 border-slate-100 md:border-b md:border-slate-100 md:pb-3 md:mb-4">
        <h3 className="text-[12px] md:text-sm font-bold text-bd-green uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1 h-3.5 bg-bd-red inline-block rounded-sm md:hidden"></span>
          {t('govAtGlance')}
        </h3>
        <a href="#" className="text-[10px] md:text-xs text-bd-green font-bold hover:underline">{t('viewAll')}</a>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 text-center">
        <div className="p-2 md:py-2 md:px-1 flex flex-col items-center justify-center border-b md:border-b-0 border-r border-gray-100">
          <Landmark className="text-bd-green w-5 h-5 md:w-7 md:h-7 mb-1.5 md:mb-2" />
          <span className="block text-xl md:text-[22px] font-bold text-gray-800 md:text-black">{t('num57')}</span>
          <span className="text-[10px] md:text-[11px] text-gray-500 md:text-gray-600 leading-tight font-medium mt-1 whitespace-pre-line">{t('ministriesDivisions')}</span>
        </div>
        <div className="p-2 md:py-2 md:px-1 flex flex-col items-center justify-center border-b md:border-b-0 border-r border-gray-100">
          <Network className="text-bd-green w-5 h-5 md:w-7 md:h-7 mb-1.5 md:mb-2" />
          <span className="block text-xl md:text-[22px] font-bold text-gray-800 md:text-black">{t('num81')}</span>
          <span className="text-[10px] md:text-[11px] text-gray-500 md:text-gray-600 leading-tight font-medium mt-1">{t('directoratesCount')}</span>
        </div>
        <div className="p-2 md:py-2 md:px-1 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
          <Map className="text-bd-green w-5 h-5 md:w-7 md:h-7 mb-1.5 md:mb-2" />
          <span className="block text-xl md:text-[22px] font-bold text-gray-800 md:text-black">{t('num8')}</span>
          <span className="text-[10px] md:text-[11px] text-gray-500 md:text-gray-600 leading-tight font-medium mt-1">{t('divisionsCount')}</span>
        </div>
        <div className="p-2 md:py-2 md:px-1 flex flex-col items-center justify-center border-r border-gray-100 pt-3 md:pt-2">
          <MapPin className="text-bd-green w-5 h-5 md:w-7 md:h-7 mb-1.5 md:mb-2" />
          <span className="block text-xl md:text-[22px] font-bold text-gray-800 md:text-black">{t('num64')}</span>
          <span className="text-[10px] md:text-[11px] text-gray-500 md:text-gray-600 leading-tight font-medium mt-1">{t('districtsCount')}</span>
        </div>
        <div className="p-2 md:py-2 md:px-1 flex flex-col items-center justify-center border-r border-gray-100 pt-3 md:pt-2">
          <Home className="text-bd-green w-5 h-5 md:w-7 md:h-7 mb-1.5 md:mb-2" />
          <span className="block text-xl md:text-[22px] font-bold text-gray-800 md:text-black">{t('num497')}</span>
          <span className="text-[10px] md:text-[11px] text-gray-500 md:text-gray-600 leading-tight font-medium mt-1">{t('upazilasCount')}</span>
        </div>
        <div className="p-2 md:py-2 md:px-1 flex flex-col items-center justify-center pt-3 md:pt-2">
          <TreePine className="text-bd-green w-5 h-5 md:w-7 md:h-7 mb-1.5 md:mb-2" />
          <span className="block text-xl md:text-[22px] font-bold text-gray-800 md:text-black">{t('num4599')}</span>
          <span className="text-[10px] md:text-[11px] text-gray-500 md:text-gray-600 leading-tight font-medium mt-1">{t('unionsCount')}</span>
        </div>
      </div>
    </div>
  );
}
