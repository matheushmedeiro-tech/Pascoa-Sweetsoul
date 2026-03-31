import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import products from "./productsData";

const WHATSAPP_NUMBER = "49998222727";
const NUTELLA_IDS = new Set(["kinder-bueno", "ferrero-rocher", "kit-degustacao"]);

function FeaturedCard({ product, reverse }) {
  const hasNutella = NUTELLA_IDS.has(product.id);
  // Corrige erro: slides não definida
  const slides = useMemo(
    () => [
      {
        src: product.imageInteiro,
        alt: `${product.name} - ovo inteiro`,
        isInside: false,
      },
      {
        src: product.imageMetade,
        alt: `${product.name} - ovo aberto com recheio`,
        isInside: true,
      },
    ],
    [product.imageInteiro, product.imageMetade, product.name]
  );
        <button
          disabled
          className="inline-flex items-center gap-2 bg-gray-400 text-white px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide uppercase opacity-70 cursor-not-allowed"
        >
          Esgotado
        </button>

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [desktopFlipped, setDesktopFlipped] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <motion.div
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="w-full lg:w-1/2 relative">
        {product.tag && (
          <span className="absolute top-5 left-5 z-10 bg-gold text-chocolate-dark text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full">
            {product.tag}
          </span>
        )}

        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-3xl touch-pan-y select-none" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide) => (
                <div key={slide.alt} className="relative min-w-0 flex-[0_0_100%] aspect-square bg-secondary">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out will-change-transform ${
                      selectedIndex === 1 && slide.isInside ? "scale-[1.04]" : "scale-100"
                    }`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/26 via-transparent to-transparent" />
                  {slide.isInside && hasNutella && (
                    <div
                      className={`absolute bottom-6 left-6 transition-all duration-300 ${
                        selectedIndex === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                    >
                      <span className="text-white bg-black/40 backdrop-blur-sm text-xs tracking-widest uppercase px-4 py-2 rounded-full">
                        Recheado com Nutella® original
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 flex items-center gap-1.5">
              {slides.map((_, dotIndex) => (
                <button
                  key={`${product.id}-featured-dot-${dotIndex}`}
                  type="button"
                  aria-label={`Ir para imagem ${dotIndex + 1} de ${slides.length}`}
                  className="p-0.5"
                  onClick={() => emblaApi?.scrollTo(dotIndex)}
                >
                  <span
                    className={`block h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                      selectedIndex === dotIndex ? "bg-white scale-125" : "bg-white/85 scale-100"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="hidden lg:block cursor-pointer"
          onMouseEnter={() => setDesktopFlipped(true)}
          onMouseLeave={() => setDesktopFlipped(false)}
          onClick={() => setDesktopFlipped((prev) => !prev)}
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary">
            <motion.img
              src={product.imageInteiro}
              alt={`${product.name} - inteiro`}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ opacity: desktopFlipped ? 0 : 1, scale: desktopFlipped ? 1.04 : 1 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              loading="lazy"
              decoding="async"
            />
            <motion.img
              src={product.imageMetade}
              alt={`${product.name} - recheio`}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{ opacity: desktopFlipped ? 1 : 0, scale: desktopFlipped ? 1.04 : 1 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/26 via-transparent to-transparent" />
            {hasNutella && (
              <motion.div
                className="absolute bottom-6 left-6"
                animate={{ opacity: desktopFlipped ? 1 : 0, y: desktopFlipped ? 0 : 8 }}
                transition={{ duration: 0.35 }}
              >
                <span className="text-white bg-black/40 backdrop-blur-sm text-xs tracking-widest uppercase px-4 py-2 rounded-full">
                  Recheado com Nutella® original
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-6">
        <div>
          <span className="text-gold text-sm font-body tracking-[0.25em] uppercase">Destaque</span>
          <h3 className="font-display text-4xl sm:text-5xl text-foreground mt-3">{product.name}</h3>
        </div>
        <p className="text-muted-foreground text-lg font-light leading-relaxed">{product.description}</p>
        <p className="text-gold font-display text-3xl font-semibold">{product.price}</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de encomendar o ovo ${product.name} por ${product.price}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg"
        >
          Pedir pelo WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

export default function FeaturedSection() {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="py-20 sm:py-28 px-6 bg-cream/70">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold text-sm font-body tracking-[0.3em] uppercase">Seleção Especial</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mt-4 mb-4">
            Favoritos da Temporada
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-12 h-px bg-gold/40" />
            <div className="w-2 h-2 rounded-full bg-gold/60" />
            <div className="w-12 h-px bg-gold/40" />
          </div>
        </motion.div>

        <div className="space-y-24 sm:space-y-32">
          {featured.map((product, index) => (
            <FeaturedCard key={product.id} product={product} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
