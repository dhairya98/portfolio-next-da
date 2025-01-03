import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovinImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    console.log("Event Page x", event.pageX, event.pageY);
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    console.log("Event Page y", event.pageX, event.pageY);
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}>
      <h2 className="capitalize text-xl font-semibold hover:underline  sm:self-start sm:p-0 xs:text-sm">
        {title}
      </h2>
      <FramerImage
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        style={{ x: x, y: y }}
        ref={imgRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      />
    </Link>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10  w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold mt-4 my-2 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col  sm:self-start sm:p-0 xs:text-sm">
      <MovinImg
        title={title}
        img={img}
        link={link}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:p-0 xs:text-sm sm:mx-auto">
        {date}
      </span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Dhairya Anchal | About Page</title>
        <meta
          name="description"
          content="I am a passionate frontend developer specializing in React.js, dedicated to creating dynamic, responsive, and user-friendly web applications. With a strong foundation in JavaScript, CSS, and modern frontend technologies, I thrive on turning complex ideas into visually appealing and highly functional user interfaces."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words can change the world!"
            className="mb-16  lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch
"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch
"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs"
              img={article3}
              date="Novemver 30, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs"
              img={article3}
              date="Novemver 30, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs"
              img={article3}
              date="Novemver 30, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs"
              img={article3}
              date="Novemver 30, 2024"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs"
              img={article3}
              date="Novemver 30, 2024"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
