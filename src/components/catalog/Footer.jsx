import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-chocolate-dark text-center">
      <div className="max-w-7xl mx-auto">
        <img
          src="/favicon.png"
          alt="Sweet Soul"
          className="w-32 h-auto object-contain mx-auto mb-3"
        />
        <p className="font-display text-2xl text-primary-foreground/80 mb-1">Sweet Soul</p>
        <p className="font-display italic text-gold/60 text-base mb-3">adoce sua alma</p>
        <p className="text-primary-foreground/40 text-sm font-light">
          © 2026 — Sweet Soul. Feito com amor e chocolate.
        </p>
      </div>
    </footer>
  );
}