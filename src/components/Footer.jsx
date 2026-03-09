import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-800/50 pt-16 md:pt-20 pb-8 md:pb-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight">
          Vamos construir o futuro?
        </h2>
        <p className="text-slate-400 mb-8 md:mb-10 text-base md:text-lg max-w-2xl mx-auto">
          Estou sempre aberto a conversar sobre tecnologia, desenvolvimento web
          e novas oportunidades no ecossistema Front-End.
        </p>
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 30px rgba(37,99,235,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          href="mailto:tessinarilucas@gmail.com"
          className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 md:px-10 py-4 md:py-5 bg-blue-600 text-white rounded-xl font-bold text-base md:text-lg"
        >
          <Mail size={24} /> Entrar em Contato Agora
        </motion.a>

        <div className="mt-16 md:mt-20 pt-8 border-t border-slate-800/50 text-slate-500 text-xs md:text-sm flex flex-col items-center px-4">
          <p className="font-medium text-center">
            © 2026 Lucas Tessinari. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-center">
            Engenharia e Design criados com React, Tailwind v4 e Framer Motion.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
