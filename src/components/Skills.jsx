import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { skillsData, fadeUpVariant, staggerContainerVariant } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariant}
      >
        <div className="text-center mb-12 md:mb-16">
          <motion.h3
            variants={fadeUpVariant}
            className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3"
          >
            <Code2 className="text-blue-500" /> Arsenal Técnico
          </motion.h3>
          <motion.p variants={fadeUpVariant} className="text-slate-400 px-4">
            Tecnologias que utilizo para construir produtos digitais.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  borderColor: "rgba(59,130,246,0.5)",
                }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md transition-all shadow-xl cursor-default"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 md:mb-5">
                  <IconComponent size={24} />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                  {skill.name}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {skill.tools}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
