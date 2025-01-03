import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log("Router", router);

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}>
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  console.log("Router", router);
  const handleClick = () => {
    toggle();
    router.push(href || "/");
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2 light:text-light`}
      onClick={handleClick}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark light:bg-light`}>
        &nbsp;
      </span>
    </button>
  );
};
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5 transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}></span>
      </button>

      <div className="flex w-full justify-between items-center lg:hidden">
        <nav>
          <CustomLink
            href="/"
            title="Home"
            className="mr-4"
            toggle={handleClick}
          />
          <CustomLink
            href="/about"
            title="About"
            className="mx-4"
            toggle={handleClick}
          />
          <CustomLink
            href="/projects"
            title="Projects"
            className="mx-4"
            toggle={handleClick}
          />
          {/* <CustomLink
            href="/articles"
            title="Articles"
            className="ml-4"
            toggle={handleClick}
          /> */}
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://x.com/dhairya_anchal"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1">
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://www.github.com/dhairya98"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1">
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/dhairya-anchal"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1">
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://in.pinterest.com/dhairyaanchal/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full sm:mx-1">
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://dribbble.com/dhairya-anchal"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3 sm:mx-1">
            <DribbbleIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}>
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
            {/* <CustomMobileLink
              href="/articles"
              title="Articles"
              toggle={handleClick}
            /> */}
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://x.com/dhairya_anchal"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3">
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://www.github.com/dhairya98"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3">
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/dhairya-anchal"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3">
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://in.pinterest.com/dhairyaanchal/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full">
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://dribbble.com/dhairya-anchal"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3">
              <DribbbleIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-6 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}>
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      )}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
