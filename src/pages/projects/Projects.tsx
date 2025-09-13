import DashboardDark from "@/assets/projects/Dashboard-Dark.png";
import Clientweb from "@/assets/projects/client-web.png";
import FastReactPizza from "@/assets/projects/fast-react-pizza.png";
import Shop from "@/assets/projects/shop.png";
import ReactIcon from "@/assets/skills/react.svg?react";
import ReduxIcon from "@/assets/skills/redux.svg?react";
import HTMLIcon from "@/assets/skills/html.svg?react";
import CSSIcon from "@/assets/skills/css.svg?react";
import TSIcon from "@/assets/skills/typescript.svg?react";
import TailwindIcon from "@/assets/skills/ui_lib/Tailwind.svg?react";
import ShadcnIcon from "@/assets/skills/ui_lib/Shadcn.svg"; 
import NextIcon from "@/assets/skills/next.svg?react";
import ReactQueryIcon from "@/assets/skills/api/react-query-logo.png";
import ZustandIcon from "@/assets/skills/state_managers/zustand.svg?react";
import i18n from "@/i18n";

 


  const projectEn = [
  {
    image: Clientweb, // تصویر بخش کاربری پروژه
    title: "The Wild Oasis - User Panel",
    text: "The user panel of The Wild Oasis, built with Next.js, React, and Tailwind CSS, provides a seamless booking experience. Users can browse available rooms, filter by location, price, and amenities, and make reservations in real time. The interface is optimized for speed with server-side rendering (SSR) and static site generation (SSG), ensuring a smooth user experience.",
    liveLink: "https://the-wild-oasis-client-three.vercel.app/", 
    gitHubLink: "https://github.com/ehsanmehrjoo/the-wild-oasis-client",
    skills: [
      <HTMLIcon />,
      <CSSIcon />,
      <TailwindIcon />,
      <ReactIcon />,
      <NextIcon />,
    ],
    haveTest: undefined,  
},

{
    image: DashboardDark, // تصویر بخش ادمین پروژه
    title: "The Wild Oasis - Admin Panel",
    text: "The admin panel of The Wild Oasis is built using React, JavaScript, and Supabase. It provides real-time room management, user authentication, and dashboard analytics. Admins can manage bookings, update room availability, and view reports. Security best practices, lazy loading, and API optimizations ensure smooth performance.",
    liveLink: "https://thewildoasis-1.netlify.app/", 
    gitHubLink: "https://github.com/ehsanmehrjoo/TheWildOasis",
    skills: [
      <HTMLIcon />,
      <CSSIcon />,
      <ReactIcon />,
      <img src={ReactQueryIcon} alt="react query" />,
      <TailwindIcon />,
    ],
    haveTest: undefined,  
},
{
  image: FastReactPizza, // تصویر سیستم مدیریت رستوران
  title: "Fast React Pizza - Restaurant Management System",
  text: "Built a responsive pizza ordering system with React, handling 200+ daily orders with real-time updates. Integrated dynamic cart functionality, improved order accuracy by 30%, and ensured seamless backend communication via REST APIs with 99.9% uptime. Optimized performance using React hooks and advanced state management, supporting up to 1,000 concurrent users. Designed an intuitive UI/UX, increasing usability and satisfaction by 30%.",
  liveLink: "https://fast-react-pizza-co-2.netlify.app/", 
  gitHubLink: "https://github.com/ehsanmehrjoo/Fast-React-Pizza",
  skills: [
    <HTMLIcon />,
    <CSSIcon />,
    <ReactIcon />,
    <ReduxIcon />,
    <TailwindIcon />,
  ],
  haveTest: undefined,
}
,


  {
    image: Shop,
    title: "Shop",
    text: "a Shop website usign fakestoreapi.com data build with Next.js and have different kinds of rendering (SSR, SSG, CSR). actions like add a product to cart is handled by zustand and cart page is handled with react query to get and cache data(CSR). the home page and shop page is static(SSG) and single product page is server side render (SSR). and with some tricks the website feels fast (top loading skeletons), and static routes feel dynamic (progress bar loading)",
    liveLink: "https://jorfi-shop.vercel.app/",
    gitHubLink: "#",
    skills: [
      <HTMLIcon />,
      <CSSIcon />,
      <TSIcon />,
      <img src={ShadcnIcon} alt="shadcn" />,
      <TailwindIcon />,
      <NextIcon />,
      <ZustandIcon />,
      <ReactIcon />,
      <img src={ReactQueryIcon} alt="react query" />,
    ],
  },
 
];

const projectFa = [
  {
    image: Clientweb,
    title: "The Wild Oasis - بخش کاربری",
    text: "بخش کاربری The Wild Oasis با استفاده از Next.js، React و Tailwind CSS ساخته شده و تجربه‌ای روان برای رزرو اتاق‌ها ارائه می‌دهد. کاربران می‌توانند اتاق‌های موجود را مشاهده، براساس مکان، قیمت و امکانات فیلتر کرده و به صورت لحظه‌ای رزرو انجام دهند. رابط کاربری با استفاده از رندر سمت سرور (SSR) و تولید سایت ایستا (SSG) بهینه شده است.",
    liveLink: "https://the-wild-oasis-client-three.vercel.app/",
    gitHubLink: "https://github.com/ehsanmehrjoo/the-wild-oasis-client",
    skills: [<HTMLIcon />, <CSSIcon />, <TailwindIcon />, <ReactIcon />, <NextIcon />],
    haveTest: undefined,
  },
  {
    image: DashboardDark,
    title: "The Wild Oasis - پنل ادمین",
    text: "پنل مدیریت The Wild Oasis با استفاده از React، JavaScript و Supabase ساخته شده است. این پنل امکاناتی مانند مدیریت لحظه‌ای اتاق‌ها، احراز هویت کاربران و تحلیل داشبورد را فراهم می‌کند. ادمین‌ها می‌توانند رزروها را مدیریت کرده، موجودی اتاق‌ها را به‌روزرسانی کرده و گزارش‌ها را مشاهده کنند. رعایت اصول امنیتی، بارگذاری تنبل و بهینه‌سازی API باعث عملکرد روان سیستم شده‌اند.",
    liveLink: "https://thewildoasis-1.netlify.app/",
    gitHubLink: "https://github.com/ehsanmehrjoo/TheWildOasis",
    skills: [<HTMLIcon />, <CSSIcon />, <ReactIcon />, <img src={ReactQueryIcon} alt="react query" />, <TailwindIcon />],
    haveTest: undefined,
  },
  {
    image: FastReactPizza,
    title: "Fast React Pizza - سیستم مدیریت رستوران",
    text: "سیستم سفارش‌گیری پیتزا با React پیاده‌سازی شده و قادر به پردازش بیش از ۲۰۰ سفارش روزانه با به‌روزرسانی لحظه‌ای است. دارای سبد خرید پویا، بهبود ۳۰٪ دقت سفارش‌ها، و ارتباط پایدار با بک‌اند از طریق REST API با آپ‌تایم ۹۹.۹٪ است. همچنین، با استفاده از هوک‌ها و مدیریت وضعیت پیشرفته، عملکرد بهینه شده و تا ۱۰۰۰ کاربر همزمان را پشتیبانی می‌کند. رابط کاربری/تجربه کاربری (UI/UX) نیز به شکلی طراحی شده که رضایت کاربران را تا ۳۰٪ افزایش داده است.",
    liveLink: "https://fast-react-pizza-co-2.netlify.app/",
    gitHubLink: "https://github.com/ehsanmehrjoo/Fast-React-Pizza",
    skills: [<HTMLIcon />, <CSSIcon />, <ReactIcon />, <ReduxIcon />, <TailwindIcon />],
    haveTest: undefined,
  },
  {
    image: Shop,
    title: "فروشگاه",
    text: "وب‌سایت فروشگاهی با استفاده از داده‌های fakestoreapi.com و فریم‌ورک Next.js ساخته شده است. از روش‌های مختلف رندر مانند SSR، SSG و CSR استفاده می‌کند. عملیات‌هایی مثل افزودن به سبد خرید با Zustand مدیریت می‌شوند و صفحه سبد خرید با React Query داده‌ها را دریافت و کش می‌کند (CSR). صفحه خانه و فروشگاه ایستا هستند (SSG) و صفحه محصول تکی با SSR رندر می‌شود. همچنین با تکنیک‌هایی مانند اسکلت‌بارگذاری بالا و نوار پیشرفت، تجربه کاربری سریع و روان ارائه می‌دهد.",
    liveLink: "https://jorfi-shop.vercel.app/",
    gitHubLink: "#",
    skills: [
      <HTMLIcon />,
      <CSSIcon />,
      <TSIcon />,
      <img src={ShadcnIcon} alt="shadcn" />,
      <TailwindIcon />,
      <NextIcon />,
      <ZustandIcon />,
      <ReactIcon />,
      <img src={ReactQueryIcon} alt="react query" />,
    ],
  },
];

const projectDe = [
  {
    image: Clientweb,
    title: "The Wild Oasis - Benutzerbereich",
    text: "Der Benutzerbereich von The Wild Oasis wurde mit Next.js, React und Tailwind CSS erstellt und bietet ein nahtloses Buchungserlebnis. Nutzer können verfügbare Zimmer durchsuchen, nach Standort, Preis und Ausstattung filtern und in Echtzeit reservieren. Die Benutzeroberfläche ist durch Server Side Rendering (SSR) und statische Seitengenerierung (SSG) für hohe Geschwindigkeit optimiert.",
    liveLink: "https://the-wild-oasis-client-three.vercel.app/",
    gitHubLink: "https://github.com/ehsanmehrjoo/the-wild-oasis-client",
    skills: [<HTMLIcon />, <CSSIcon />, <TailwindIcon />, <ReactIcon />, <NextIcon />],
    haveTest: undefined,
  },
  {
    image: DashboardDark,
    title: "The Wild Oasis - Admin-Bereich",
    text: "Das Admin-Panel von The Wild Oasis wurde mit React, JavaScript und Supabase entwickelt. Es bietet Echtzeit-Zimmerverwaltung, Benutzer-Authentifizierung und Dashboard-Analysen. Administratoren können Buchungen verwalten, Verfügbarkeiten aktualisieren und Berichte einsehen. Sicherheitspraktiken, Lazy Loading und API-Optimierungen sorgen für eine reibungslose Leistung.",
    liveLink: "https://thewildoasis-1.netlify.app/",
    gitHubLink: "https://github.com/ehsanmehrjoo/TheWildOasis",
    skills: [<HTMLIcon />, <CSSIcon />, <ReactIcon />, <img src={ReactQueryIcon} alt="react query" />, <TailwindIcon />],
    haveTest: undefined,
  },
  {
    image: FastReactPizza,
    title: "Fast React Pizza - Restaurant-Management-System",
    text: "Ein responsives Pizzabestellsystem, das mit React entwickelt wurde und über 200 Bestellungen pro Tag in Echtzeit verarbeitet. Dynamischer Warenkorb, 30 % verbesserte Bestellgenauigkeit, stabile Backend-Kommunikation über REST APIs (99,9 % Uptime). Leistungsoptimierung durch React Hooks und fortgeschrittenes State Management für bis zu 1.000 gleichzeitige Benutzer. Intuitives UI/UX Design steigert die Nutzerzufriedenheit um 30 %. ",
    liveLink: "https://fast-react-pizza-co-2.netlify.app/",
    gitHubLink: "https://github.com/ehsanmehrjoo/Fast-React-Pizza",
    skills: [<HTMLIcon />, <CSSIcon />, <ReactIcon />, <ReduxIcon />, <TailwindIcon />],
    haveTest: undefined,
  },
  {
    image: Shop,
    title: "Shop",
    text: "Eine Shop-Website, die Daten von fakestoreapi.com nutzt und mit Next.js gebaut wurde. Sie unterstützt verschiedene Rendering-Methoden (SSR, SSG, CSR). Funktionen wie Produkt zum Warenkorb hinzufügen werden mit Zustand verwaltet. Die Warenkorbseite verwendet React Query zum Abrufen und Cachen der Daten (CSR). Die Start- und Shop-Seiten sind statisch (SSG), während die Produktdetailseite serverseitig gerendert wird (SSR). Durch Lade-Skelette und Ladebalken fühlt sich die Website schnell und dynamisch an.",
    liveLink: "https://jorfi-shop.vercel.app/",
    gitHubLink: "#",
    skills: [
      <HTMLIcon />,
      <CSSIcon />,
      <TSIcon />,
      <img src={ShadcnIcon} alt="shadcn" />,
      <TailwindIcon />,
      <NextIcon />,
      <ZustandIcon />,
      <ReactIcon />,
      <img src={ReactQueryIcon} alt="react query" />,
    ],
  },
];
export const Projects = i18n.language === "fa"? projectFa: i18n.language === "de"? projectDe : projectEn;




