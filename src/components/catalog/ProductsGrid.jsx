import React from "react";
import { motion } from "framer-motion";
import products from "./productsData";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  return (
    <section id="catalogo" className="py-20 sm:py-28 px-6 bg-catalog-noise">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold text-sm font-body tracking-[0.32em] uppercase">
            Coleção Completa
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mt-4 mb-4">
            Sabores Que Encantam
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-lg mx-auto">
            Deslize para o lado para ver o ovo inteiro e o recheio de cada
            sabor com detalhes.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="w-12 h-px bg-gold/40" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}