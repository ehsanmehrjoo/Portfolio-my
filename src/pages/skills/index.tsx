// constants
import { SKILLS } from "./contants";

// components
import { motion } from "framer-motion";
import Skill from "./skill";

const Skills = () => {
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {SKILLS.map((skill, index) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: (index + 1) / 5,
            }}
            key={index}
            className="text-primary border-2 border-primary p-4 rounded-2xl"
          >
            <Skill key={index} {...skill}>
              {skill.content}
            </Skill>
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
