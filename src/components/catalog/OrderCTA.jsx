import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "49998222727";

export default function OrderCTA() {
  return (
    <section className="py-24 sm:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-chocolate-dark via-chocolate-mid to-primary" />

          <button
            disabled
            className="inline-flex items-center gap-3 bg-gray-400 text-white px-10 py-5 rounded-full font-body font-semibold text-base tracking-wide opacity-70 cursor-not-allowed"
          >
            <MessageCircle className="w-5 h-5" />
            Esgotado
          </button>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold text-sm font-body tracking-[0.3em] uppercase">
            Encomendas
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-primary-foreground mt-4 mb-6 leading-tight">
            Faça seu pedido{" "}
            <span className="italic text-gold">agora</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg font-light leading-relaxed max-w-lg mx-auto mb-10">
            Encomende pelo WhatsApp e garanta os ovos da linha 2026. Produção
            limitada com retirada ou entrega agendada.
          </p>

          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido de ovos de Páscoa artesanais.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-10 py-5 rounded-full font-body font-semibold text-base tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5" />
            Pedir pelo WhatsApp
          </motion.a>

          <p className="text-primary-foreground/40 text-sm mt-6 font-light">
            Entregas em toda a região • Pagamento via PIX, cartão ou dinheiro
          </p>
        </motion.div>
      </div>
    </section>
  );
}