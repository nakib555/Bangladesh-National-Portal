import { 
  Landmark, Award, Briefcase, Users, Shield, Globe, Landmark as Coins, Megaphone, 
  GraduationCap, Stethoscope, Leaf, Scale, ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NoticesAndShortcuts() {
  const { t } = useLanguage();

  const offices = [
    { key: "bangabhaban", descKey: "bangabhabanDesc", icon: Landmark, color: "text-amber-600", bg: "bg-amber-50" },
    { key: "pmo", descKey: "pmoDesc", icon: Award, color: "text-emerald-600", bg: "bg-emerald-50" },
    { key: "cabinet", descKey: "cabinetDesc", icon: Briefcase, color: "text-blue-600", bg: "bg-blue-50" },
    { key: "mopa", descKey: "mopaDesc", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
    { key: "moha", descKey: "mohaDesc", icon: Shield, color: "text-red-600", bg: "bg-red-50" },
    { key: "mofa", descKey: "mofaDesc", icon: Globe, color: "text-teal-600", bg: "bg-teal-50" },
    { key: "mof", descKey: "mofDesc", icon: Coins, color: "text-amber-700", bg: "bg-amber-50" },
    { key: "moi", descKey: "moiDesc", icon: Megaphone, color: "text-indigo-600", bg: "bg-indigo-50" },
    { key: "moedu", descKey: "moeduDesc", icon: GraduationCap, color: "text-emerald-600", bg: "bg-emerald-50" },
    { key: "mohpw", descKey: "mohpwDesc", icon: Stethoscope, color: "text-rose-600", bg: "bg-rose-50" },
    { key: "moa", descKey: "moaDesc", icon: Leaf, color: "text-green-600", bg: "bg-green-50" },
    { key: "molj", descKey: "moljDesc", icon: Scale, color: "text-purple-700", bg: "bg-purple-50" },
  ];

  return (
    <section className="max-w-[1440px] mx-auto w-full px-4 xl:px-6 py-6 select-none">
      <div className="flex items-center justify-between mb-5 px-1 border-b border-gray-100 pb-3">
        <h3 className="text-xs md:text-sm font-black uppercase tracking-wider text-[#006a4e] flex items-center gap-2 font-display">
          <span className="w-1.5 h-4 bg-[#da291c] inline-block rounded-sm"></span>
          {t('ministriesTitle')}
        </h3>
        <a href="#" className="text-[11px] text-[#006a4e] hover:text-emerald-800 font-extrabold flex items-center gap-1 hover:underline">
          <span>{t('viewAllDepts')}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {offices.map((office, idx) => {
          const IconComponent = office.icon;
          return (
            <a 
              key={idx} 
              href="#" 
              className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 hover:bg-emerald-50/5 transition-all duration-300 flex flex-col items-center text-center justify-between group h-full"
            >
              <div className={`w-9 h-9 rounded-lg ${office.bg} ${office.color} flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform duration-200`}>
                <IconComponent className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-[11px] font-black text-gray-800 group-hover:text-[#006a4e] transition-colors leading-tight mb-1">
                  {t(office.key)}
                </h4>
                <p className="text-[9px] text-gray-400 font-medium leading-normal line-clamp-2">
                  {t(office.descKey)}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
