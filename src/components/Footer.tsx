import { Facebook, Twitter, Youtube, Linkedin, Bot } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#362f25] text-white/80 text-[11px] py-12 mt-12 px-4 border-t-4 border-bd-red relative select-none">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 mb-8">
          
          <div>
            <h5 className="font-bold border-b border-white/10 pb-1 mb-3 text-white">Important Links</h5>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:underline hover:text-white">President's Office</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Prime Minister's Office</a></li>
              <li><a href="#" className="hover:underline hover:text-white">National Web Portal</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Cabinet Division</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold border-b border-white/10 pb-1 mb-3 text-white">Govt Offices</h5>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:underline hover:text-white">Bangladesh Post</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Bangladesh Gazette</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Election Commission</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Judiciary Portal</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold border-b border-white/10 pb-1 mb-3 text-white">Help & Support</h5>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:underline hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:underline hover:text-white">User Manuals</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Developer Site Map</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold border-b border-white/10 pb-1 mb-3 text-white">Legal & Policy</h5>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:underline hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Copyright Policy</a></li>
              <li><a href="#" className="hover:underline hover:text-white">Hyperlink Policy</a></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h5 className="font-bold border-b border-white/10 pb-1 mb-3 text-white">About Central Portal</h5>
            <p className="leading-relaxed text-white/70 mb-4">
              The national portal represents a unified electronic infrastructure for central services. Developed and maintained under the administrative support of the Cabinet Division and ICT Wing.
            </p>
            <div className="flex items-center space-x-3 text-base">
              <span className="text-xs text-white/50">Follow Us:</span>
              <a href="#" className="hover:text-white"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto border-t border-white/10 pt-6 text-center md:flex md:justify-between text-[10px] text-white/40">
          <div className="space-y-1 md:space-y-0 md:space-x-4">
            <span>© 2026 Bangladesh National Portal. All Rights Reserved.</span>
            <span className="hidden md:inline">•</span>
            <span>Sitemap</span>
            <span className="hidden md:inline">•</span>
            <span>Accessibility Statement</span>
          </div>
          <div className="mt-2 md:mt-0">
            <span>Last Updated: 10 July 2026</span>
            <span className="mx-2">|</span>
            <span>Implementation: Cabinet Division, ICT Wing</span>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-emerald-500 text-white pl-4 pr-3 py-2.5 rounded-full shadow-lg border border-emerald-400 hover:bg-emerald-600 transition-all cursor-pointer">
        <div className="text-right">
          <p className="text-[8px] uppercase tracking-wider font-bold text-emerald-100">Need Help?</p>
          <p className="text-[11px] font-bold leading-none">Ask Sarkar AI</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-emerald-600 border border-emerald-300">
          <Bot className="w-4 h-4" />
        </div>
      </div>
    </>
  );
}
