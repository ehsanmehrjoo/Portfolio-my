import { motion } from "framer-motion";
import ProfileImage from "@/assets/profile.png";

const paragraph1 =
  "As a front-end developer, I go beyond just fetching and displaying data. While CRUD operations are essential, what truly makes a front-end developer valuable is their ability to create seamless, efficient, and visually appealing user experiences. A website is often the face of a brand, and I strive to ensure that every project I work on delivers both functionality and a strong visual identity.";

const paragraph2 =
  "Throughout my experience, I've developed and optimized applications like The Wild Oasis, a hotel booking platform with authentication for over 1000 users, and Fast React Pizza, a restaurant order management system handling hundreds of daily transactions. Leveraging technologies like React, JavaScript, and Redux Toolkit, I ensure scalability, performance, and maintainability. Additionally, I emphasize clean and efficient code to create products that are both high-performing and enjoyable to use.";

const paragraph3 =
  "I believe in smart problem-solving. Instead of relying on excessive libraries, I carefully analyze the task at hand and implement the most efficient solutions. Whether it's optimizing API calls, improving state management, or ensuring responsive design, I focus on writing structured, maintainable code that enhances both user experience and developer collaboration.";

const About = () => {
  return (
    <div className="p-3 text-2xl font-medium flex flex-col gap-6 text-primary sm:mt-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0.25,
        }}
        className="flex flex-col lg:flex-row gap-5 items-center "
      >
        <img src={ProfileImage} className="w-72 h-72 rounded-full border-8" alt="Profile" />
        <p>{paragraph1}</p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 0.75,
        }}
      >
        {paragraph2}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.25,
          delay: 1.25,
        }}
      >
        {paragraph3}
      </motion.p>
    </div>
  );
};

export default About;
