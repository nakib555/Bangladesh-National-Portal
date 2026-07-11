import { Facebook, Twitter, Youtube, Linkedin, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <>
      <footer className="bg-[#362f25] text-white/80 text-[11px] py-12 mt-12 px-4 border-t-4 border-bd-red relative select-none">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-6 mb-8">
          
          <div>
            <h5 className="font-bold border-b border-white/10 pb-1 mb-3 text-white">
              {lang === 'bn' ? 'গুরুত্বপূর্ণ লিংক' : 'Important Links'}
            </h5>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'রাষ্ট্রপতির কার্যালয়' : "President's Office"}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'প্রধানমন্ত্রীর কার্যালয়' : "Prime Minister's Office"}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'জাতীয় ওয়েব পোর্টাল' : 'National Web Portal'}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'মন্ত্রিপরিষদ বিভাগ' : 'Cabinet Division'}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold border-b border-white/10 pb-1 mb-3 text-white">
              {lang === 'bn' ? 'সরকারি দপ্তরসমূহ' : 'Govt Offices'}
            </h5>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'বাংলাদেশ ডাক' : 'Bangladesh Post'}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'বাংলাদেশ গেজেট' : 'Bangladesh Gazette'}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'নির্বাচন কমিশন' : 'Election Commission'}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'বিচার বিভাগীয় পোর্টাল' : 'Judiciary Portal'}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold border-b border-white/10 pb-1 mb-3 text-white">
              {lang === 'bn' ? 'সহায়তা ও যোগাযোগ' : 'Help & Support'}
            </h5>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'সাধারণ জিজ্ঞাসা' : 'FAQ'}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'ব্যবহারকারী নির্দেশিকা' : 'User Manuals'}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'সাইট ম্যাপ' : 'Developer Site Map'}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'যোগাযোগ করুন' : 'Contact Support'}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold border-b border-white/10 pb-1 mb-3 text-white">
              {lang === 'bn' ? 'আইনি ও নীতিমালা' : 'Legal & Policy'}
            </h5>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'ব্যবহারের শর্তাবলী' : 'Terms of Use'}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'গোপনীয়তার নীতিমালা' : 'Privacy Policy'}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'কপিরাইট নীতিমালা' : 'Copyright Policy'}</a></li>
              <li><a href="#" className="hover:underline hover:text-white">{lang === 'bn' ? 'হাইপারলিংক নীতিমালা' : 'Hyperlink Policy'}</a></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h5 className="font-bold border-b border-white/10 pb-1 mb-3 text-white">
              {lang === 'bn' ? 'কেন্দ্রীয় পোর্টাল সম্পর্কে' : 'About Central Portal'}
            </h5>
            <p className="leading-relaxed text-white/70 mb-4">
              {lang === 'bn' 
                ? 'জাতীয় তথ্য বাতায়ন গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের কেন্দ্রীয় ই-সেবা ও তথ্য কাঠামোর একটি সমন্বিত প্ল্যাটফর্ম। এটি মন্ত্রিপরিষদ বিভাগ এবং তথ্য ও যোগাযোগ প্রযুক্তি বিভাগের প্রশাসনিক সহায়তায় পরিচালিত।' 
                : 'The national portal represents a unified electronic infrastructure for central services. Developed and maintained under the administrative support of the Cabinet Division and ICT Wing.'
              }
            </p>
            <div className="flex items-center space-x-3 text-base">
              <span className="text-xs text-white/50">{lang === 'bn' ? 'অনুসরণ করুন:' : 'Follow Us:'}</span>
              <a href="#" className="hover:text-white"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto border-t border-white/10 pt-6 text-center md:flex md:justify-between text-[10px] text-white/40">
          <div className="space-y-1 md:space-y-0 md:space-x-4">
            <span>
              {lang === 'bn' 
                ? '© ২০২৬ বাংলাদেশ জাতীয় তথ্য বাতায়ন। সর্বস্বত্ব সংরক্ষিত।' 
                : '© 2026 Bangladesh National Portal. All Rights Reserved.'
              }
            </span>
            <span className="hidden md:inline">•</span>
            <span>{lang === 'bn' ? 'সাইটম্যাপ' : 'Sitemap'}</span>
            <span className="hidden md:inline">•</span>
            <span>{lang === 'bn' ? 'প্রবেশযোগ্যতার বিবৃতি' : 'Accessibility Statement'}</span>
          </div>
          <div className="mt-2 md:mt-0">
            <span>
              {lang === 'bn' ? 'সর্বশেষ আপডেট: ১০ জুলাই ২০২৬' : 'Last Updated: 10 July 2026'}
            </span>
            <span className="mx-2">|</span>
            <span>
              {lang === 'bn' ? 'পরিকল্পনা ও বাস্তবায়নে: মন্ত্রিপরিষদ বিভাগ, এটুআই' : 'Implementation: Cabinet Division, ICT Wing'}
            </span>
          </div>
        </div>
      </footer>

      {/* Sarkar AI Floating Widget */}
      <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 flex items-center justify-center bg-emerald-500 text-white rounded-full shadow-lg border border-emerald-400 hover:bg-emerald-600 transition-all cursor-pointer w-12 h-12 md:w-auto md:h-auto md:pl-4 md:pr-3 md:py-2.5">
        <div className="hidden md:block text-right md:mr-2.5">
          <p className="text-[8px] uppercase tracking-wider font-bold text-emerald-100">
            {lang === 'bn' ? 'সহায়তা প্রয়োজন?' : 'Need Help?'}
          </p>
          <p className="text-[11px] font-bold leading-none">
            {lang === 'bn' ? 'সরকার এআই কে জিজ্ঞাসা করুন' : 'Ask Sarkar AI'}
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-emerald-600 border border-emerald-300 shrink-0">
          <Bot className="w-4 h-4" />
        </div>
      </div>
    </>
  );
}
