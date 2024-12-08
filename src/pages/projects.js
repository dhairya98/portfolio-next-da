import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/flipkart-admin-dashboard.png";
import project2 from "../../public/images/projects/twitter-clone.png";
import project3 from "../../public/images/projects/airbnb-clone.png";
import project4 from "../../public/images/projects/facebook-clone.png";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const projects = () => {
  const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
      <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
        <div className="absolute top-0 -right-3 -z-10  w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg dark:text-dark dark:bg-light sm:px-4 sm:text-base">
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    );
  };

  const Project = ({ type, title, img, link, github }) => {
    return (
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light ">
        <div className="absolute top-0 -right-3 -z-10  w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg">
          <FramerImage src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base sm:text-sm">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl md:text-base sm:text-sm xs:text-[0.5rem]">
              {title}
            </h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold hover:underline dark:text-light md:text-base">
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    );
  };
  return (
    <>
      <Head>
        <title>Dhairya Anchal | Projects Page</title>
        <meta name="description" content="any-description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-60 flex flex-column items-center justify-center  dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Flipkart Admin Dashboard"
                summary="A comprehensive Admin Dashboard application built with React, Context API, React Router, and Ant Design. It includes features such as a dashboard overview, inventory management, order tracking, and a customer list."
                img={project1}
                type="Featured Project"
                link="https://flipkart-dashboard.web.app/"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Airbnb Clone"
                summary="A simple frontend Airbnb clone featuring date range selection and React Routing for seamless navigation between pages."
                img={project3}
                type="Project"
                link="https://airbnb-clone-fef76.web.app/"
                github="https://github.com/dhairya98/Airbnb-Clone"
              />
            </div>
            {/* <div className="col-span-6  sm:col-span-12">
              <Project
                title="Twitter Clone"
                img={project2}
                type="Project"
                link="https://twitter-clone-7755c.web.app/"
                github="https://github.com/dhairya98/Twitter-Clone"
              />
            </div> */}
            <div className="col-span-12">
              <FeaturedProject
                title="Facebook starter clone"
                summary="A Facebook clone that allows users to log in, create new accounts, add posts, and leave comments, all seamlessly synced with an intelligent Firestore database."
                img={project4}
                type="Featured Project"
                link="https://facebook-4ae4e.web.app/login"
                github="https://github.com/dhairya98/Facebook-Clone"
              />
            </div>
            {/* <div className="col-span-6  sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                img={project1}
                type="Project"
                link="/"
                github="/"
              />
            </div> */}
          </div>
          <AnimatedText
            text="Note: Some projects may show a safety warning when visiting. No
            worries, as these are hosted on Firebase—you can log in to
            explore them! If you'd still not prefer, then feel free to check out my code
            directly on GitHub—it’s completely safe and open for review. 😊"
            className="!text-primary mt-16 !text-sm dark:!text-primaryDark"
          />
        </Layout>
      </main>
    </>
  );
};

export default projects;
