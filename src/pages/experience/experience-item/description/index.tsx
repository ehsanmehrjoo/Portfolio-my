import { motion } from "framer-motion";
import TimeLine from "./timeline";

const Description = () => {
  return (
    <div className="mt-8 ml-4 flex flex-col md:flex-row gap-3 md:gap-10">
      <TimeLine />
      <div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.25,
          }}
          className="text-5xl font-bold"
        >
          The Wild Oasis 
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.5,
          }}
          className="text-4xl font-bold"
        >
          Full-Stack Developer  
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.75,
          }}
          className="w-full mt-2 text-xl"
        >
         Designed and engineered a comprehensive hotel booking platform, including both a client-facing website (built with Next.js) and an admin dashboard. The platform enables real-time reservation and room management for over 150 daily active users.

        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 1,
          }}
          className="flex gap-2 items-center mt-1"
        >
          <span className="w-[3px] h-[3px] rounded-full bg-primary"></span>
          <p className="text-sm">
          - Next.js - React - JavaScript - Supabase - CSS - Tailwind CSS - React Query - React Router - Authentication - API Optimization - Dynamic Filtering - UI/UX Improvements - CSS-in-JS (Styled Components)  
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
