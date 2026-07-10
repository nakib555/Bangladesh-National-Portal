import { Landmark, Network, Map, MapPin, Home, TreePine } from 'lucide-react';

export default function GovtAtGlance() {
  return (
    <div className="bg-white py-4 select-none border-0">
      <div className="flex justify-between items-center mb-3 border-b pb-1.5 border-gray-100 md:border-0 md:pb-0">
        <h3 className="text-[12px] md:text-[10px] font-bold text-bd-green md:text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1 h-3.5 bg-bd-red inline-block rounded-sm md:hidden"></span>
          Government at a Glance
        </h3>
        <a href="#" className="text-[10px] text-bd-green font-bold hover:underline">View All</a>
      </div>
      <div className="grid grid-cols-3 text-center">
        <div className="p-2 flex flex-col items-center justify-center border-b border-r border-gray-100">
          <Landmark className="text-bd-green w-5 h-5 md:w-3.5 md:h-3.5 mb-1.5" />
          <span className="block text-xl md:text-base font-bold text-gray-800">57</span>
          <span className="text-[10px] md:text-[9px] text-gray-500 leading-tight font-medium mt-1">Ministries &<br /> Divisions</span>
        </div>
        <div className="p-2 flex flex-col items-center justify-center border-b border-r border-gray-100">
          <Network className="text-bd-green w-5 h-5 md:w-3.5 md:h-3.5 mb-1.5" />
          <span className="block text-xl md:text-base font-bold text-gray-800">81</span>
          <span className="text-[10px] md:text-[9px] text-gray-500 leading-tight font-medium mt-1">Directorates</span>
        </div>
        <div className="p-2 flex flex-col items-center justify-center border-b border-gray-100">
          <Map className="text-bd-green w-5 h-5 md:w-3.5 md:h-3.5 mb-1.5" />
          <span className="block text-xl md:text-base font-bold text-gray-800">8</span>
          <span className="text-[10px] md:text-[9px] text-gray-500 leading-tight font-medium mt-1">Divisions</span>
        </div>
        <div className="p-2 flex flex-col items-center justify-center border-r border-gray-100 pt-3">
          <MapPin className="text-bd-green w-5 h-5 md:w-3.5 md:h-3.5 mb-1.5" />
          <span className="block text-xl md:text-base font-bold text-gray-800">64</span>
          <span className="text-[10px] md:text-[9px] text-gray-500 leading-tight font-medium mt-1">Districts</span>
        </div>
        <div className="p-2 flex flex-col items-center justify-center border-r border-gray-100 pt-3">
          <Home className="text-bd-green w-5 h-5 md:w-3.5 md:h-3.5 mb-1.5" />
          <span className="block text-xl md:text-base font-bold text-gray-800">497</span>
          <span className="text-[10px] md:text-[9px] text-gray-500 leading-tight font-medium mt-1">Upazilas</span>
        </div>
        <div className="p-2 flex flex-col items-center justify-center pt-3">
          <TreePine className="text-bd-green w-5 h-5 md:w-3.5 md:h-3.5 mb-1.5" />
          <span className="block text-xl md:text-base font-bold text-gray-800">4,599</span>
          <span className="text-[10px] md:text-[9px] text-gray-500 leading-tight font-medium mt-1">Unions</span>
        </div>
      </div>
    </div>
  );
}
