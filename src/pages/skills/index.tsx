import { SKILLS } from "./contants";
import { motion } from "framer-motion";
import Skill from "./skill";

const Skills = () => {
  return (
    <div className="flex flex-col w-full gap-8 px-4 py-10 ">
      {/* <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-white text-center"
      >
        Skills
      </motion.h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {SKILLS.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            key={index}
            className="relative bg-gradient-to-br from-gray-800 to-purple-900 border border-purple-500/50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Skill {...skill}>
              {skill.content}
            </Skill>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;