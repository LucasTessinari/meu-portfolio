import { motion } from "framer-motion";
import { Github, Linkedin, ChevronRight } from "lucide-react";
import { fadeUpVariant, staggerContainerVariant } from "../data";
import { customSmoothScroll } from "../utils/scroll";

export default function Hero() {
  return (
    <section
      id="sobre"
      className="relative min-h-[100svh] flex items-center justify-center px-4 sm:px-6 pt-24 md:pt-20"
    >
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
      />

      <motion.div
        className="z-10 text-center max-w-4xl w-full"
        initial="hidden"
        animate="visible"
        variants={staggerContainerVariant}
      >
        <motion.div
          variants={fadeUpVariant}
          className="inline-block mb-4 md:mb-6 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-semibold tracking-wider"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></span>
          Disponível para novas oportunidades
        </motion.div>

        <motion.h1
          variants={fadeUpVariant}
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white mb-4 md:mb-6 tracking-tight leading-tight"
        >
          Lucas{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x block sm:inline">
            Tessinari
          </span>
        </motion.h1>

        <motion.h2
          variants={fadeUpVariant}
          className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-400 mb-6 md:mb-8 px-2"
        >
          Desenvolvedor Front-End & Full Stack.
        </motion.h2>

        <motion.p
          variants={fadeUpVariant}
          className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-4"
        >
          Construo interfaces modernas, escaláveis e de alta performance.
          Especialista no ecossistema{" "}
          <b className="text-slate-200">React e Node.js</b>.
        </motion.p>

        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 w-full max-w-md sm:max-w-none mx-auto px-4 sm:px-0"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projetos"
            onClick={(e) => customSmoothScroll(e, "projetos")}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Ver Projetos <ChevronRight size={18} />
          </motion.a>
          <div className="flex gap-4 w-full sm:w-auto justify-center">
            {[
              {
                icon: <Github size={24} />,
                link: "https://github.com/lucastessinari",
              },
              {
                icon: <Linkedin size={24} />,
                link: "https://linkedin.com/in/lucastessinari",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(59,130,246,0.2)",
                  borderColor: "rgba(59,130,246,0.5)",
                }}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-slate-300 transition-colors flex-1 sm:flex-none flex justify-center"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
