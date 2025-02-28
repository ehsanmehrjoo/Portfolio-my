import { motion } from "framer-motion";

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

// components
import ProjectCard from "./project-card";

const PROJECTS = [
  {
    image: Clientweb, // تصویر بخش کاربری پروژه
    title: "The Wild Oasis - User Panel",
    text: "The user panel of The Wild Oasis, built with Next.js, React, and Tailwind CSS, provides a seamless booking experience. Users can browse available rooms, filter by location, price, and amenities, and make reservations in real time. The interface is optimized for speed with server-side rendering (SSR) and static site generation (SSG), ensuring a smooth user experience.",
    liveLink: "https://the-wild-oasis-website.vercel.app/", 
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

const Projects = () => {
  return (
    <div className="text-primary px-3 space-y-10 mt-5">
      {PROJECTS.map((project, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: (index + 0.5) / 3,
          }}
          key={index}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
