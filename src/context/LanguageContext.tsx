import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'bn' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  bn: {
    // Top Bar & Header
    govtTitle: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
    a2i: "তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ (a2i)",
    apps: "বাংলাদেশ Gov পোর্টাল অ্যাপস",
    screenReader: "স্ক্রিন রিডার",
    highContrast: "উচ্চ বৈপরীত্য",
    nationalPortal: "বাংলাদেশ জাতীয় তথ্য বাতায়ন",
    nationalPortalDesc: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের জাতীয় তথ্য বাতায়ন",
    searchPlaceholder: "সেবা, অফিস বা তথ্য খুঁজুন...",
    searchBtn: "অনুসন্ধান",
    popularSearches: "জনপ্রিয় অনুসন্ধান:",
    nid: "এনআইডি",
    passport: "পাসপোর্ট",
    tax: "আয়কর",
    land: "ভূমি",
    brta: "বিআরটিএ",
    visa: "ভিসা",
    myPortal: "আমার পোর্টাল",

    // Navigation
    navAbout: "বাংলাদেশ সম্পর্কে",
    navGovt: "সরকার",
    navServices: "ই-সেবাসমূহ",
    navMinistries: "মন্ত্রণালয় ও বিভাগ",
    navOffices: "দপ্তর ও সংস্থা",
    navCitizen: "সিটিজেন কর্নার",
    navBusiness: "ব্যবসা কর্নার",
    navForeigners: "বিদেশী কর্নার",
    navMedia: "মিডিয়া কর্নার",
    navContact: "যোগাযোগ",

    // Main Feed Sections
    megaProjects: "মেগা প্রজেক্টসমূহ",
    viewAll: "সব দেখুন",
    eServicesTitle: "সরকারি ই-সেবাসমূহ",
    alleServices: "সকল ই-সেবা",
    popularServicesTab: "জনপ্রিয় সেবাসমূহ",
    newServicesTab: "নতুন সেবাসমূহ",
    mobileServicesTab: "মোবাইল সেবাসমূহ",
    officeServicesTab: "দপ্তর ভিত্তিক সেবা",
    faq: "সাধারণ জিজ্ঞাসা",
    askQuestion: "প্রশ্ন করুন",

    // 6 Large Shortcuts
    charterTitle: "সিটিজেন চার্টার",
    charterDesc: "সরকারি সেবা প্রদানের প্রতিশ্রুতি ও নির্ধারিত সময়সীমা বিস্তারিত বিবরণ।",
    downloadTitle: "ডাউনলোড ফরম",
    downloadDesc: "প্রয়োজনীয় সরকারি আবেদন ফরম, ম্যানুয়াল ও নির্দেশিকা ডাউনলোড করুন।",
    pubTitle: "প্রকাশনাসমূহ",
    pubDesc: "সরকারি গেজেট, বার্ষিক প্রতিবেদন, বাজেট ও পরিসংখ্যান পর্যালোচনা করুন।",
    photoTitle: "ছবি গ্যালারি",
    photoDesc: "গুরুত্বপূর্ণ ইভেন্ট, উন্নয়ন প্রকল্প ও জাতীয় দিবসের আলোকচিত্রসমূহ।",
    videoTitle: "ভিডিও গ্যালারি",
    videoDesc: "সরকারি কার্যক্রম, ডকুমেন্টারি ও সচেতনতামূলক ভিডিও চিত্রসমূহ।",
    socialTitle: "সামাজিক যোগাযোগ",
    socialDesc: "আমাদের অফিসিয়াল চ্যানেলের মাধ্যমে আপডেট থাকুন ও সংযুক্ত থাকুন।",
    viewMore: "বিস্তারিত দেখুন",

    // Mega Projects Names
    padmaBridge: "পদ্মা বহুমুখী সেতু",
    metroRail: "ঢাকা মেট্রো রেল",
    rooppur: "রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্র",
    expressway: "ঢাকা এলিভেটেড এক্সপ্রেসওয়ে",
    matarbari: "মহেশখালী মাতারবাড়ী গভীর সমুদ্র বন্দর",
    statusCompleted: "সম্পন্ন",
    statusOngoing: "চলমান",

    // Services Names
    digitalCenter: "ডিজিটাল সেন্টার",
    onlineApp: "অনলাইন আবেদন",
    nidServices: "এনআইডি সেবা",
    passportVisa: "পাসপোর্ট ও ভিসা",
    brtaServices: "বিআরটিএ সেবা",
    landServices: "ভূমি সেবা",
    landInfo: "খতিয়ান ও নামজারী",
    taxServices: "ট্যাক্স রিটার্ন",
    education: "শিক্ষা বোর্ড ও ফলাফল",
    healthSupport: "টেলিমেডিসিন ও স্বাস্থ্য",
    recruitment: "সরকারি চাকুরির আবেদন",
    incomeTax: "আয়কর সেবা",
    drivingLicense: "ড্রাইভিং লাইসেন্স",
    tradeLicense: "ট্রেড লাইসেন্স",
    tinServices: "টি আই এন সেবা",
    socialServices: "সামাজিক নিরাপত্তা",
    womenDev: "মহিলা বিষয়ক অধিদপ্তর",
    youthDev: "যুব উন্নয়ন অধিদপ্তর",
    upServices: "ইউনিয়ন পরিষদ সেবা",
    municipalInfo: "পৌরসভা তথ্য",
    postalCourier: "ডাক ও কুরিয়ার সেবা",
    challan: "এ-চালান সেবা",
    livestock: "প্রাণিসম্পদ সেবা",
    pdsSupport: "ওএমএস ও খাদ্য সহায়তা",
    banking: "ব্যাংকিং সেবা",
    commerce: "বাণিজ্যিক নিবন্ধন",
    tourism: "বাংলাদেশ পর্যটন",
    ecoTourism: "ইকো ট্যুরিজম",
    radioTv: "বেতার ও টিভি সম্প্রচার",
    forms: "আবেদন ফরমসমূহ",
    publications: "সরকারি প্রকাশনা",
    aiTools: "কৃত্রিম বুদ্ধিমত্তা সেবা",
    innovation: "উদ্ভাবনী উদ্যোগ",
    ictServices: "আইসিটি সেবা",
    startupBd: "স্টার্টআপ বাংলাদেশ",

    // Banner Slide 1 (Artistic Bangladesh Image Slide)
    slide1Badge: "সরকারি তথ্য বাতায়ন",
    slide1TitleBn: "সোনার বাংলা গড়ার প্রত্যয়",
    slide1TitleEn: "বাংলাদেশ জাতীয় তথ্য বাতায়ন",
    slide1SubtitleBn: "একটি ঠিকানায় সব সরকারি সেবা ও তথ্য",
    slide1SubtitleEn: "Welcome to the Digital Gateway of Bangladesh",
    slide1Btn: "সেবাসমূহ দেখুন",

    // Banner Slide 2 (Language Day SVG Slide)
    slide2Badge: "২১শে ফেব্রুয়ারি",
    slide2TitleBn: "মায়ের ভাষার মর্যাদা রাখবো আমি",
    slide2TitleEn: "আন্তর্জাতিক মাতৃভাষা দিবস",
    slide2SubtitleBn: "১৯৫২ সালের মহান ভাষা শহীদদের প্রতি বিনম্র শ্রদ্ধা",
    slide2SubtitleEn: "In Honor of the Language Martyrs of 1952",
    slide2Btn: "বিস্তারিত জানুন",

    // Ministries section
    ministriesTitle: "মন্ত্রণালয় ও বিভাগের শর্টকাটসমূহ",
    viewAllDepts: "সকল মন্ত্রণালয় ও বিভাগ দেখুন",
    bangabhaban: "রাষ্ট্রপতির কার্যালয়",
    bangabhabanDesc: "বঙ্গভবন অফিসিয়াল পোর্টাল",
    pmo: "প্রধানমন্ত্রীর কার্যালয়",
    pmoDesc: "পিএমও প্রশাসনিক তথ্য কেন্দ্র",
    cabinet: "মন্ত্রিপরিষদ বিভাগ",
    cabinetDesc: "সরকারের ক্যাবিনেট সিদ্ধান্তসমূহ",
    mopa: "জনপ্রশাসন মন্ত্রণালয়",
    mopaDesc: "সরকারি কর্মকর্তাদের বদলি ও নিয়োগ",
    moha: "স্বরাষ্ট্র মন্ত্রণালয়",
    mohaDesc: "জাতীয় নিরাপত্তা ও আইন-শৃঙ্খলা",
    mofa: "পররাষ্ট্র মন্ত্রণালয়",
    mofaDesc: "বহিঃসম্পর্ক, দূতাবাস ও ভিসা সেবা",
    mof: "অর্থ মন্ত্রণালয়",
    mofDesc: "বাজেট, ট্রেজারি ও অর্থনৈতিক উন্নয়ন",
    moi: "তথ্য ও সম্প্রচার মন্ত্রণালয়",
    moiDesc: "জাতীয় প্রেস ও গণমাধ্যম পোর্টাল",
    moedu: "শিক্ষা মন্ত্রণালয়",
    moeduDesc: "বিদ্যালয়, কলেজ ও পরীক্ষা বোর্ড",
    mohpw: "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়",
    mohpwDesc: "চিকিৎসা সেবা ও হাসপাতাল পোর্টাল",
    moa: "কৃষি মন্ত্রণালয়",
    moaDesc: "কৃষক সহায়তা ও ফসল চাষবাস তথ্য",
    molj: "আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়",
    moljDesc: "আইনি পরামর্শ ও সংসদীয় ধারা",

    // Bottom Navigation
    home: "হোম",
    services: "সেবাসমূহ",
    search: "অনুসন্ধান",
    notices: "নোটিশসমূহ",
    more: "অন্যান্য",

    // Government at a Glance
    govAtGlance: "এক নজরে সরকার",
    ministriesDivisions: "মন্ত্রণালয় ও বিভাগ",
    directoratesCount: "অধিদপ্তর ও অন্যান্য",
    divisionsCount: "বিভাগ",
    districtsCount: "জেলা",
    upazilasCount: "উপজেলা",
    unionsCount: "ইউনিয়ন",
    num57: "৫৭",
    num81: "৮১",
    num8: "৮",
    num64: "৬৪",
    num497: "৪৯৭",
    num4599: "৪,৫৯৯",

    // Sidebar Right Hotlines, Notices, & Campaigns
    hotlineTitle: "জরুরি হটলাইন নম্বরসমূহ",
    hotlineEmergency: "জরুরি সেবা",
    hotlineGovt: "সরকারি তথ্য ও সেবা",
    hotlineFire: "ফায়ার সার্ভিস",
    hotlineWomen: "নারী ও শিশু নির্যাতন প্রতিরোধ",
    hotlineChild: "শিশু সহায়ক হেল্পলাইন",
    hotlineCorruption: "দুদক হেল্পলাইন",
    hotlineLand: "স্মার্ট ভূমি সেবা",
    hotlinePassport: "পাসপোর্ট হেল্পলাইন",
    hotlineElectricity: "বিদ্যুৎ হেল্পলাইন",
    hotlineLegal: "সরকারি আইন সহায়তা",
    hotlinePension: "সর্বজনীন পেনশন",
    hotlineMore: "আরও হেল্পলাইন",
    news: "সংবাদ",
    announcements: "ঘোষণা",
    events: "কর্মসূচি",
    campaigns: "প্রচারণা",
    newBadge: "নতুন",
    notice1: "গ্রীষ্মকালীন সময়ে সরকারি অফিসের সময়সূচি সংক্রান্ত প্রজ্ঞাপন",
    notice2: "ই-টেন্ডার বিজ্ঞপ্তি: অবকাঠামোগত উন্নয়ন ও নির্মাণ কাজ",
    notice3: "পবিত্র হজ ২০২৫ এর নিবন্ধন সংক্রান্ত বিজ্ঞপ্তি",
    pwd: "গণপূর্ত অধিদপ্তর",
    mora: "ধর্ম বিষয়ক মন্ত্রণালয়",
    tenderNotices: "টেন্ডার বিজ্ঞপ্তি",
    tenderDesc: "সকল সক্রিয় দরপত্র দেখুন",
    recentCirculars: "সাম্প্রতিক প্রজ্ঞাপন",
    circularsDesc: "সরকারি নোটিশ ও বিধিমালা",
    nationalEvents: "জাতীয় ইভেন্টসমূহ",
    eventsDesc: "গুরুত্বপূর্ণ ছুটির দিন ও অনুষ্ঠান",
    govtCampaigns: "সরকারি ক্যাম্পেইন",
    campaignsDesc: "সক্রিয় তথ্য ও উন্নয়ন প্রচারণা",
  },
  en: {
    // Top Bar & Header
    govtTitle: "Government of the People's Republic of Bangladesh",
    a2i: "Access to Information (a2i)",
    apps: "Bangladesh Gov Portal Apps",
    screenReader: "Screen Reader",
    highContrast: "High Contrast",
    nationalPortal: "Bangladesh National Portal",
    nationalPortalDesc: "National Portal of the Government of the People's Republic of Bangladesh",
    searchPlaceholder: "Search services, offices, information...",
    searchBtn: "Search",
    popularSearches: "Popular Searches:",
    nid: "NID",
    passport: "Passport",
    tax: "Tax",
    land: "Land",
    brta: "BRTA",
    visa: "Visa",
    myPortal: "My Portal",

    // Navigation
    navAbout: "About Bangladesh",
    navGovt: "Government",
    navServices: "e-Services",
    navMinistries: "Ministries & Divisions",
    navOffices: "Offices",
    navCitizen: "Citizen Corner",
    navBusiness: "Business Corner",
    navForeigners: "Foreigners Corner",
    navMedia: "Media Corner",
    navContact: "Contact Us",

    // Main Feed Sections
    megaProjects: "Mega Projects",
    viewAll: "View All",
    eServicesTitle: "Government e-Services",
    alleServices: "All e-Services",
    popularServicesTab: "Popular Services",
    newServicesTab: "New Services",
    mobileServicesTab: "Mobile Services",
    officeServicesTab: "Office Services",
    faq: "FAQ",
    askQuestion: "Ask Question",

    // 6 Large Shortcuts
    charterTitle: "Citizen Charter",
    charterDesc: "Official process guarantees and structural timeline matrix details.",
    downloadTitle: "Downloads",
    downloadDesc: "Download official forms, documents, manuals, and guidelines.",
    pubTitle: "Publications",
    pubDesc: "Browse reports, official gazettes, statistics, and directories.",
    photoTitle: "Photo Gallery",
    photoDesc: "Explore photos of events, activities, and development projects.",
    videoTitle: "Video Gallery",
    videoDesc: "Watch videos on government activities, achievements, and services.",
    socialTitle: "Social Media",
    socialDesc: "Stay connected through our official channels.",
    viewMore: "View More",

    // Mega Projects Names
    padmaBridge: "Padma Bridge",
    metroRail: "Dhaka Metro Rail",
    rooppur: "Rooppur Power Plant",
    expressway: "Dhaka Elevated",
    matarbari: "Matarbari Port",
    statusCompleted: "Completed",
    statusOngoing: "Ongoing",

    // Services Names
    digitalCenter: "Digital Center",
    onlineApp: "Online Application",
    nidServices: "NID Services",
    passportVisa: "Passport & Visa",
    brtaServices: "BRTA Services",
    landServices: "Land Services",
    landInfo: "Land Info",
    taxServices: "Tax Services",
    education: "Education Board",
    healthSupport: "Health Support",
    recruitment: "Recruitment",
    incomeTax: "Income Tax",
    drivingLicense: "Driving License",
    tradeLicense: "Trade License",
    tinServices: "TIN Services",
    socialServices: "Social Services",
    womenDev: "Women Dev",
    youthDev: "Youth Dev",
    upServices: "UP Services",
    municipalInfo: "Municipal Info",
    postalCourier: "Postal & Courier",
    challan: "Challan Service",
    livestock: "Livestock Care",
    pdsSupport: "PDS Support",
    banking: "Banking Portal",
    commerce: "Commerce",
    tourism: "Tourism Portal",
    ecoTourism: "Eco Tourism",
    radioTv: "Radio & TV",
    forms: "App Forms",
    publications: "Publications",
    aiTools: "AI Tools",
    innovation: "Innovation",
    ictServices: "ICT Services",
    startupBd: "Startup BD",

    // Banner Slide 1 (Artistic Bangladesh Image Slide)
    slide1Badge: "GOVT.BD PORTAL",
    slide1TitleBn: "সোনার বাংলা গড়ার প্রত্যয়",
    slide1TitleEn: "Bangladesh National Portal",
    slide1SubtitleBn: "বাংলাদেশ জাতীয় তথ্য বাতায়ন",
    slide1SubtitleEn: "All Government Information and Services in One Address",
    slide1Btn: "Explore Services",

    // Banner Slide 2 (Language Day SVG Slide)
    slide2Badge: "21 February",
    slide2TitleBn: "মায়ের ভাষার মর্যাদা রাখবো আমি",
    slide2TitleEn: "International Mother Language Day",
    slide2SubtitleBn: "আন্তর্জাতিক মাতৃভাষা দিবস",
    slide2SubtitleEn: "In Honor of the Language Martyrs of 1952",
    slide2Btn: "Learn More",

    // Ministries section
    ministriesTitle: "Ministries & Offices Shortcuts",
    viewAllDepts: "View All Departments",
    bangabhaban: "President's Office",
    bangabhabanDesc: "Bangabhaban Official Portal",
    pmo: "Prime Minister's Office",
    pmoDesc: "PMO Administrative Center",
    cabinet: "Cabinet Division",
    cabinetDesc: "Government Cabinet Decisions",
    mopa: "Ministry of Public Admin",
    mopaDesc: "Public Services & Officers",
    moha: "Ministry of Home Affairs",
    mohaDesc: "National Security & Law",
    mofa: "Ministry of Foreign Affairs",
    mofaDesc: "External Diplomacy & Visa",
    mof: "Ministry of Finance",
    mofDesc: "Budget, Treasury & Economy",
    moi: "Ministry of Information",
    moiDesc: "National Press & Media",
    moedu: "Ministry of Education",
    moeduDesc: "Schools, Colleges & Exams",
    mohpw: "Ministry of Health",
    mohpwDesc: "Medical Facilities & Care",
    moa: "Ministry of Agriculture",
    moaDesc: "Farmers Support & Crops",
    molj: "Ministry of Law & Justice",
    moljDesc: "Legal Systems & Parliament",

    // Bottom Navigation
    home: "Home",
    services: "Services",
    search: "Search",
    notices: "Notices",
    more: "More",

    // Government at a Glance
    govAtGlance: "Government at a Glance",
    ministriesDivisions: "Ministries &\nDivisions",
    directoratesCount: "Directorates",
    divisionsCount: "Divisions",
    districtsCount: "Districts",
    upazilasCount: "Upazilas",
    unionsCount: "Unions",
    num57: "57",
    num81: "81",
    num8: "8",
    num64: "64",
    num497: "497",
    num4599: "4,599",

    // Sidebar Right Hotlines, Notices, & Campaigns
    hotlineTitle: "Emergency Hotline Numbers",
    hotlineEmergency: "Emergency",
    hotlineGovt: "Government Information",
    hotlineFire: "Fire Service",
    hotlineWomen: "Women & Child Helpline",
    hotlineChild: "Child Helpline",
    hotlineCorruption: "Anti-Corruption",
    hotlineLand: "Smart Land Service",
    hotlinePassport: "Passport Hotline",
    hotlineElectricity: "Electricity",
    hotlineLegal: "Legal Aid",
    hotlinePension: "Universal Pension",
    hotlineMore: "More Hotlines",
    news: "News",
    announcements: "Announcements",
    events: "Events",
    campaigns: "Campaigns",
    newBadge: "New",
    notice1: "Circular on Government Office Timing During Summer Season",
    notice2: "e-Tender Notice: Structural Development and Infrastructure Construction",
    notice3: "Circular Regarding Pilgrim Registration for Holy Hajj 2025",
    pwd: "Public Works Department",
    mora: "Ministry of Religious Affairs",
    tenderNotices: "Tender Notices",
    tenderDesc: "View All active tenders",
    recentCirculars: "Recent Circulars",
    circularsDesc: "Government notices and rules",
    nationalEvents: "National Events",
    eventsDesc: "Key national holidays & events",
    govtCampaigns: "Government Campaigns",
    campaignsDesc: "Active information campaigns",
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('gov_bd_portal_lang');
    return (saved === 'bn' || saved === 'en') ? saved : 'en';
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('gov_bd_portal_lang', newLang);
  };

  const t = (key: string): string => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
