import { motion } from "framer-motion";
import { Layout, Code2, Github, ExternalLink } from "lucide-react";
import { projectsData, fadeUpVariant, staggerContainerVariant } from "../data";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="py-16 md:py-24 px-4 sm:px-6 max-w-5xl mx-auto"
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
            className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3"
          >
            <Layout className="text-blue-500" size={28} /> Projetos em Destaque
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <div className="bg-slate-900/80 border border-slate-700/50 hover:border-blue-500/50 shadow-xl rounded-xl h-full transition-all duration-300">
                <div className="p-5 md:p-6 h-full flex flex-col justify-between group">
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        <Code2 size={24} />
                      </div>
                      <div className="flex gap-3">
                        {project.github && (
                          <motion.a
                            whileHover={{ y: -2, color: "#fff" }}
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400"
                          >
                            <Github size={20} />
                          </motion.a>
                        )}
                        {project.link && (
                          <motion.a
                            whileHover={{ y: -2, color: "#60a5fa" }}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400"
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1.5 bg-slate-950 text-slate-300 rounded-md border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
