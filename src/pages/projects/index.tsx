import { motion } from "framer-motion";

 import {Projects as ProjectsApi} from "@/pages/projects/Projects"

// components
import ProjectCard from "./project-card";

 

const Projects = () => {
  return (
    <div className="text-primary px-3 space-y-10 mt-5">
      {ProjectsApi.map((project, index) => (
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
