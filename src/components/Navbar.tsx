"use client"

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
      className="bg-gray-950 bg-opacity-60 text-white px-3 xl:px-6 py-4 fixed top-0 w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
           
        >
          <img src="/assets/logo.png" alt="Grumpy Logo" className="w-36 2xl:w-60" />
        </motion.div>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-6 text-lg md:text-xs xl:text-base 2xl:text-lg uppercase">
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href={link.href} className="hover:text-red-500">
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:block">
          <AnimatedButton />
        </div>

        {/* Mobile */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl"
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
            className="md:hidden bg-gray-900 text-white p-4 rounded-lg mt-2"
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
            <div className="mt-4">
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
    <motion.div
      className="relative"
      initial={{ y: 0 }}
      whileHover={{ y: 5 }}
    >
      <motion.div
        className="absolute inset-0 bg-black rounded-full"
        initial={{ 
          opacity: 0.9, 
          height: '100%', 
          width: '100%', 
          top: '10%' 
        }}
        whileHover={{ 
          opacity: 0.6, 
          height: '120%', 
          width: '110%', 
          top: '-10%' 
        }}
        style={{
          left: '-5%',
          zIndex: -1
        }}
      />
      <motion.button
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        className="relative bg-[#C62D24] hover:bg-red-700 text-white text-xs xl:text-base py-2 px-2 xl:px-4 rounded-3xl"
      >
        Pre-sale Coming Soon
      </motion.button>
    </motion.div>
  );
};

export default Navbar;

