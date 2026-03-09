import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo/sweetsoul-logo-4k.png";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const glowOffset = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const ringOffset = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const scrollToCatalog = () => {
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,236,205,0.44),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,214,150,0.2),transparent_38%),linear-gradient(135deg,#4f2413_0%,#744024_52%,#61331d_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(205,145,49,0.18)_0%,rgba(205,145,49,0.06)_45%,rgba(205,145,49,0.2)_100%)]" />
      
      <motion.div
        className="absolute top-20 right-8 w-64 h-64 rounded-full bg-gold/30 blur-3xl"
        style={{ y: glowOffset }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 -left-12 w-[24rem] h-[24rem] rounded-full bg-amber-200/20 blur-3xl"
        style={{ y: ringOffset }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-gold/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <img
            src={logo}
            alt="Sweet Soul Logo"
            className="w-52 sm:w-64 h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="inline-block text-gold text-sm font-body tracking-[0.34em] uppercase mb-3">
            Páscoa 2026
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-3 drop-shadow-[0_3px_14px_rgba(30,14,7,0.36)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Catálogo de
          <span className="block italic text-gold">Ovos de Páscoa</span>
        </motion.h1>

        <motion.p
          className="text-gold font-display italic text-xl sm:text-2xl mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
        >
          Sweet Soul, edição especial
        </motion.p>

        <motion.p
          className="text-white/92 text-lg sm:text-xl font-light leading-relaxed max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Descubra nossa coleção premium com casca perfeita por fora e recheios
          irresistiveis por dentro.
        </motion.p>

        <motion.button
          onClick={scrollToCatalog}
          className="inline-flex items-center gap-3 bg-[#f1bf4a] hover:bg-[#f5cb64] text-[#3a1a0e] px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver Catálogo
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/75"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}