import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "../data";
import { customSmoothScroll } from "../utils/scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, id) => {
    setIsOpen(false); // Fecha o menu mobile ao clicar
    customSmoothScroll(e, id);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-lg border-b border-slate-800/50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#sobre"
          onClick={(e) => handleNavClick(e, "sobre")}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 cursor-pointer"
        >
          LT.
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300 items-center">
          {navigationLinks.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              whileHover={{ y: -2, color: "#60a5fa" }}
              className="transition-colors cursor-pointer"
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(37,99,235,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            href="mailto:tessinarilucas@gmail.com"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)]"
          >
            Contato
          </motion.a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-slate-300 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#020617] border-b border-slate-800/50 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6 text-center">
              {navigationLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-slate-300 font-medium text-lg hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="mailto:tessinarilucas@gmail.com"
                className="w-full py-3 bg-blue-600 text-white rounded-lg text-base font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)] mt-2"
              >
                Entrar em Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
