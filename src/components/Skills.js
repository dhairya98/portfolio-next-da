import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <>
      <motion.div
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark cursor-pointer absolute py-3 px-6 dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold sm:hidden"
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}>
        {name}
      </motion.div>
      {/* <div
        className="flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark cursor-pointer py-3 px-6 dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:text-dark xs:dark:text-light xs:font-bold lg:!hidden xl:!hidden md:!hidden 2xl:!hidden"
        // whileHover={{ scale: 1.05 }}
        // initial={{ x: 0, y: 0 }}
        // whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
        // transition={{ duration: 2 }}
        // viewport={{ once: true }}
      >
        {name}
      </div> */}
    </>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-none">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-5 shadow-dark cursor-pointer dark:text-dark dark:bg-light xs:hidden sm:hidden lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-8vw" />
        <Skill name="HTML" x="-20vw" y="-2vw" />
        <Skill name="Javascript" x="9vw" y="-8vw" />
        <Skill name="ReactJS" x="20vw" y="6vw" />
        <Skill name="Typescript" x="0vw" y="12vw" />
        <Skill name="NextJS" x="12vw" y="-0vw" />
        <Skill name="Framer Motion" x="18vw" y="-18vw" />
        <Skill name="Firebase" x="-22vw" y="-18vw" />
        <Skill name="Figma" x="-7vw" y="20vw" />
        <Skill name="Web design" x="28vw" y="12vw" />
        <Skill name="TailwindCSS" x="32vw" y="-8vw" />
        <Skill name="Problem Solving" x="-20vw" y="5vw" />
        <Skill name="Sendgrid" x="6vw" y="20vw" />
        <Skill name="Ant Design" x="-25vw" y="14vw" />
        <Skill name="Redux" x="-29vw" y="-2vw" />
        <Skill name="Context API" x="25vw" y="18vw" />
        <Skill name="React Query" x="-15vw" y="-13vw" />
        <ol className="text-dark shadow-dark cursor-pointer px-6 hidden sm:flex xs:flex sm:flex-col xs:flex-col sm:p-0 xs:p-0">
          <li>CSS</li>
          <li>HTML</li>
          <li>Javascript</li>
          <li>ReactJS</li>
          <li>Typescript</li>
          <li>NextJS</li>
          <li>Framer Motion</li>
          <li>Firebase</li>
          <li>Figma</li>
          <li>Web design</li>
          <li>TailwindCSS</li>
          <li>Problem Solving</li>
          <li>Sendgrid</li>
          <li>Ant Design</li>
          <li>Redux</li>
          <li>Context API</li>
          <li>React Query</li>
        </ol>
      </div>
    </>
  );
};

export default Skills;
