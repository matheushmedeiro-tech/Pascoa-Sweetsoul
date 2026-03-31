import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "49998222727";

export default function OrderCTA() {
  return (
    <section className="py-24 sm:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-chocolate-dark via-chocolate-mid to-primary" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold text-sm font-body tracking-[0.3em] uppercase">
            Esgotado
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-foreground mt-4 mb-6 leading-tight">
            Todos os ovos foram vendidos! <span className="italic text-gold">Muito obrigado</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg font-light leading-relaxed max-w-lg mx-auto mb-10">
            Nossa produção de Páscoa 2026 está oficialmente esgotada.<br/>
            Agradecemos de coração a todos que confiaram, compartilharam e adoçaram a vida com a gente.<br/>
            Que sua Páscoa seja repleta de alegria, amor e muitos momentos doces! <span role="img" aria-label="coelho">🐰</span>
          </p>
          <button
            disabled
            className="inline-flex items-center gap-3 bg-gray-400 text-white px-10 py-5 rounded-full font-body font-semibold text-base tracking-wide opacity-70 cursor-not-allowed"
          >
            <MessageCircle className="w-5 h-5" />
            Esgotado
          </button>
        </motion.div>
      </div>
    </section>
  );
}