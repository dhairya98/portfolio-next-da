import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs-text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary text-primaryDark capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:[w-90%] md:w-full">
        <motion.div
          ref={ref}
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light  md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Netenrich Inc."
            time="2023-Present"
            address="HYD, IN"
            companyLink="https://netenrich.com/platform"
            work="Played a pivotal role in a rapidly growing CyberSecurity Product within the IT sector known as Resolution Intelligence Cloud. On top of this, Proficiently designed and developed new features using ReactJS in accordancewith UX design provided, enhanced existing ones, and delivered solutionsaligned with customer and Product Owner requirements."
          />
          <Details
            position="Software Engineer"
            company="Tech Mahindra Ltd."
            time="2021-2023"
            address="UP, IN"
            companyLink="https://www.techmahindra.com/"
            work="Working with App and Dev Teams to develop, maintain the web pages and totroubleshoot issues using technologies like Linux, Azure and ReactJS."
          />
          <Details
            position="Intern"
            company="Tech Mahindra Ltd."
            time="2021-2021"
            address="Remote"
            companyLink="https://www.techmahindra.com/"
            work="Provided 24/7/365 on-call support for any major incidents, outages, weekendreleases and/or upgrade events; worked effectively both independently and aspart of a team; highly adept for troubleshooting issues at system level andmaintained SLA with 100% efficiency."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

// Software Engineer @Google
// 2022-Present | Mountain View, CA
// Worked on a team responsible for developing new features for Google's
// search engine, including improving the accuracy and relevance of search results and
// developing new tools for data analysis and visualization.
