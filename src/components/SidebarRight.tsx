import { Phone, MoreHorizontal, FileText, Megaphone, CalendarDays, Flag } from 'lucide-react';
import GovtAtGlance from './GovtAtGlance';
import { useLanguage } from '../context/LanguageContext';

export default function SidebarRight() {
  const { lang, t } = useLanguage();

  // Helper to translate digits dynamically when language is Bengali
  const formatNumber = (numStr: string) => {
    if (lang !== 'bn') return numStr;
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return numStr.replace(/\d/g, (d) => bnDigits[parseInt(d)]);
  };

  const hotlines = [
    { number: "999", labelKey: "hotlineEmergency" },
    { number: "333", labelKey: "hotlineGovt" },
    { number: "102", labelKey: "hotlineFire" },
    { number: "109", labelKey: "hotlineWomen" },
    { number: "1098", labelKey: "hotlineChild" },
    { number: "106", labelKey: "hotlineCorruption" },
    { number: "16122", labelKey: "hotlineLand" },
    { number: "16445", labelKey: "hotlinePassport" },
    { number: "16999", labelKey: "hotlineElectricity" },
    { number: "16699", labelKey: "hotlineLegal" },
    { number: "16131", labelKey: "hotlinePension" },
  ];

  return (
    <>
      <GovtAtGlance />
      
      <div className="bg-transparent md:bg-white mt-0 lg:mt-0 py-2 md:p-5 md:rounded-2xl md:border md:border-slate-100 md:shadow-md md:hover:shadow-lg transition-shadow duration-300 border-0 w-full">
        <div className="flex justify-between items-center gap-2 mb-3 border-b border-gray-100 md:border-b-0 pb-2 md:pb-0">
          <h3 className="text-[10px] min-[360px]:text-[11px] min-[400px]:text-[12px] md:text-sm font-bold uppercase tracking-wider text-bd-red flex items-center gap-1 md:gap-1.5 shrink-0">
            <span className="w-1 h-3.5 bg-bd-red inline-block rounded-sm md:hidden"></span>
            {t('hotlineTitle')}
          </h3>
          <a href="#" className="text-[10px] md:text-xs text-bd-green font-bold hover:underline shrink-0">{t('viewAll')}</a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 text-[10px] md:text-xs">
          {hotlines.map((hotline, idx) => (
            <div key={idx} className="flex items-start p-1.5 md:p-2.5 border border-red-100/30 md:border-slate-100 rounded-xl md:rounded-lg bg-red-50/10 md:bg-white md:shadow-sm md:hover:shadow-md md:hover:border-emerald-100 transition-all duration-300">
              <Phone className="text-bd-red md:text-bd-green mr-1.5 md:mr-2.5 mt-0.5 w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
              <div>
                <p className="font-extrabold text-gray-800 md:text-black text-[11px] md:text-[13px] leading-tight md:mb-0.5">
                  {formatNumber(hotline.number)}
                </p>
                <p className="text-[8px] md:text-[11px] text-gray-400 md:text-gray-600 font-medium leading-tight">
                  {t(hotline.labelKey)}
                </p>
              </div>
            </div>
          ))}
          
          <div className="flex items-center p-1.5 md:p-2.5 border border-slate-200 md:border-slate-100 rounded-xl md:rounded-lg bg-gray-50/50 md:bg-gray-50 cursor-pointer hover:bg-gray-100 md:shadow-sm md:hover:shadow-md transition-all duration-300">
            <div className="bg-gray-200 md:bg-gray-300 rounded-full p-1 md:p-1.5 mr-2 md:mr-3 text-black font-black">
              <MoreHorizontal className="w-4 h-4" />
            </div>
            <span className="font-bold text-gray-500 md:text-black md:text-[12px] text-[10px] leading-tight">
              {t('hotlineMore')}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-6 mt-4 md:mt-6">
        <div className="xl:col-span-7 bg-white py-4 md:py-5 px-4 md:px-5 md:rounded-2xl md:border md:border-slate-100 md:shadow-md md:hover:shadow-lg transition-shadow duration-300">
          <div className="flex border-b border-gray-100 pb-3 mb-4 text-[12px] md:text-[11px] font-bold md:font-semibold gap-4 uppercase tracking-wider text-gray-400 md:text-gray-500 overflow-x-auto scrollbar-hide">
            <button className="pb-2 border-b-2 border-bd-green text-bd-green font-bold shrink-0 flex items-center gap-1.5">
              <span className="md:hidden w-1 h-3.5 bg-bd-red inline-block rounded-sm"></span>
              {t('notices')}
            </button>
            <button className="pb-2 text-gray-400 hover:text-gray-700 shrink-0">{t('news')}</button>
            <button className="pb-2 text-gray-400 hover:text-gray-700 shrink-0">{t('announcements')}</button>
            <button className="pb-2 text-gray-400 hover:text-gray-700 shrink-0">{t('events')}</button>
            <button className="pb-2 text-gray-400 hover:text-gray-700 shrink-0">{t('campaigns')}</button>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 text-xs items-start">
              <div className="bg-bd-green text-white text-center px-2 py-1.5 rounded-xl min-w-[48px] shadow-sm">
                <span className="block text-sm font-extrabold leading-none">{formatNumber("10")}</span>
                <span className="text-[8px] uppercase font-bold text-emerald-200">{lang === 'bn' ? 'জুলাই' : 'Jul'}</span>
              </div>
              <div>
                <a href="#" className="hover:text-bd-green hover:underline font-semibold text-gray-800 leading-snug block">
                  {t('notice1')}
                </a>
                <span className="text-[10px] text-gray-400 font-medium">
                  {t('mopa')}{" "}
                  <span className="bg-bd-red text-white font-bold text-[8px] px-1 py-0.5 rounded-xl ml-1 uppercase">
                    {t('newBadge')}
                  </span>
                </span>
              </div>
            </div>
            <div className="flex gap-3 text-xs items-start">
              <div className="bg-bd-green text-white text-center px-2 py-1.5 rounded-xl min-w-[48px] shadow-sm">
                <span className="block text-sm font-extrabold leading-none">{formatNumber("09")}</span>
                <span className="text-[8px] uppercase font-bold text-emerald-200">{lang === 'bn' ? 'জুলাই' : 'Jul'}</span>
              </div>
              <div>
                <a href="#" className="hover:text-bd-green hover:underline font-semibold text-gray-800 leading-snug block">
                  {t('notice2')}
                </a>
                <span className="text-[10px] text-gray-400 font-medium">
                  {t('pwd')}{" "}
                  <span className="bg-bd-red text-white font-bold text-[8px] px-1 py-0.5 rounded-xl ml-1 uppercase">
                    {t('newBadge')}
                  </span>
                </span>
              </div>
            </div>
            <div className="flex gap-3 text-xs items-start">
              <div className="bg-bd-green text-white text-center px-2 py-1.5 rounded-xl min-w-[48px] shadow-sm">
                <span className="block text-sm font-extrabold leading-none">{formatNumber("08")}</span>
                <span className="text-[8px] uppercase font-bold text-emerald-200">{lang === 'bn' ? 'জুলাই' : 'Jul'}</span>
              </div>
              <div>
                <a href="#" className="hover:text-bd-green hover:underline font-semibold text-gray-800 leading-snug block">
                  {t('notice3')}
                </a>
                <span className="text-[10px] text-gray-400 font-medium">
                  {t('mora')}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="xl:col-span-5 space-y-3.5 flex flex-col justify-between bg-white px-4 md:px-5 py-5 md:rounded-2xl md:border md:border-slate-100 md:shadow-md md:hover:shadow-lg transition-shadow duration-300">
          <a href="#" className="flex justify-between items-center p-3.5 rounded-xl border border-purple-200 bg-purple-50/50 shadow-sm hover:shadow-md hover:bg-purple-50 hover:border-purple-300 transition-all duration-300">
            <div>
              <span className="text-[11px] md:text-xs font-bold text-purple-900 uppercase tracking-wider block">
                {t('tenderNotices')}
              </span>
              <span className="text-[9px] text-purple-600 block mt-0.5">
                {t('tenderDesc')}
              </span>
            </div>
            <FileText className="text-purple-600 w-5 h-5" />
          </a>
          <a href="#" className="flex justify-between items-center p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 shadow-sm hover:shadow-md hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
            <div>
              <span className="text-[11px] md:text-xs font-bold text-blue-900 uppercase tracking-wider block">
                {t('recentCirculars')}
              </span>
              <span className="text-[9px] text-blue-600 block mt-0.5">
                {t('circularsDesc')}
              </span>
            </div>
            <Megaphone className="text-blue-600 w-5 h-5" />
          </a>
          <a href="#" className="flex justify-between items-center p-3.5 rounded-xl border border-amber-200 bg-amber-50/50 shadow-sm hover:shadow-md hover:bg-amber-50 hover:border-amber-300 transition-all duration-300">
            <div>
              <span className="text-[11px] md:text-xs font-bold text-amber-900 uppercase tracking-wider block">
                {t('nationalEvents')}
              </span>
              <span className="text-[9px] text-amber-600 block mt-0.5">
                {t('eventsDesc')}
              </span>
            </div>
            <CalendarDays className="text-amber-600 w-5 h-5" />
          </a>
          <a href="#" className="flex justify-between items-center p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/50 shadow-sm hover:shadow-md hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300">
            <div>
              <span className="text-[11px] md:text-xs font-bold text-emerald-900 uppercase tracking-wider block">
                {t('govtCampaigns')}
              </span>
              <span className="text-[9px] text-emerald-600 block mt-0.5">
                {t('campaignsDesc')}
              </span>
            </div>
            <Flag className="text-bd-green w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
}
