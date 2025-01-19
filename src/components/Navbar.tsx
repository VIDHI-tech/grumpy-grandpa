"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Coin", href: "#coin" },
    { name: "Community", href: "#community" },
    { name: "Hall of Fame", href: "#halloffame" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Rewards", href: "#rewards" },
    { name: "Whitepaper", href: "#whitepaper" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="text-white px-3 xl:px-6 py-4 fixed top-0 w-full z-50 bg-black bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 xl:bg-opacity-50 flex flex-col gap-5 lg:block"
    >
      <div className="max-w-5xl w-full xl:container mx-auto flex justify-between items-center gap-5">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img
            src="/assets/logo.png"
            alt="Grumpy Logo"
            className="w-36 2xl:w-52"
          />
        </motion.div>

        {/* Desktop */}
        <ul className="hidden lg:flex justify-between text-lg md:text-xs xl:text-base 2xl:text-lg uppercase w-full max-w-4xl">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={link.href}
                className="font-extralight text-xs lg:text-sm tracking-wide hover:text-red-500"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <AnimatedButton />
        </div>

        {/* Mobile */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900 text-white p-4 rounded-lg mt-2"
          >
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="block hover:text-red-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-4 -translate-x-2">
              <AnimatedButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const AnimatedButton = () => {
  return (
    <motion.button
      initial={{ y: 0, x: 0 }}
      whileHover={{ y: 3, x: 3 }}
      // duration of animation
      transition={{ duration: 0.2 }}
      className="relative font-semibold text-nowrap bg-[#C62D24] hover:bg-red-700 text-white text-xs xl:text-base py-3 px-2 xl:px-4 rounded-3xl border-2 border-black shadow-[2.5px_2.5px_0px_0px_rgba(0,_0,_0,_1)] hover:shadow-[0.5px_0.5px_0px_0px_rgba(0,_0,_0,_1)] lg:shadow-[3.5px_3.5px_0px_0px_rgba(0,_0,_0,_1)] lg:hover:shadow-[1px_1px_0px_0px_rgba(0,_0,_0,_1)] transition-shadow duration-200"
    >
      Pre-sale Coming Soon
    </motion.button>
  );
};

export default Navbar;
