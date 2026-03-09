import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import {
  experienceData,
  fadeUpVariant,
  staggerContainerVariant,
} from "../data";

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900/20 border-y border-slate-800/50 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
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
              <Briefcase className="text-blue-500" /> Trajetória Profissional
            </motion.h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.15rem] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-blue-900/50 before:to-transparent">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500/50 bg-slate-950 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 cursor-pointer mt-1 md:mt-0"
                >
                  <Briefcase size={16} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-5 md:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/30 shadow-xl"
                >
                  <h4 className="font-bold text-lg md:text-xl text-white mb-1">
                    {exp.role}
                  </h4>
                  <span className="text-blue-400 font-semibold text-sm mb-3 block flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    {exp.company}{" "}
                    <span className="hidden sm:inline text-slate-500 font-normal">
                      •
                    </span>{" "}
                    <span className="text-slate-500 font-normal">
                      {exp.period}
                    </span>
                  </span>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
