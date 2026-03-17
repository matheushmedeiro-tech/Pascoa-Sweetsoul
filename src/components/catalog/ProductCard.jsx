import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { MessageCircle } from "lucide-react";

const NUTELLA_IDS = new Set(["kinder-bueno", "ferrero-rocher", "kit-degustacao"]);
const WHATSAPP_NUMBER = "49998222727";

export default function ProductCard({ product, index }) {
  const hasNutella = NUTELLA_IDS.has(product.id);
  const isUnavailable = Boolean(product.unavailable);

  const qualitySeals = [
    ...(hasNutella ? ["Nutella® Original"] : []),
    "Produção Artesanal",
  ];

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
    [product.imageInteiro, product.imageMetade, product.name],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
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

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de encomendar o ovo ${product.name} por ${product.price}.`,
  );

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: "easeOut" }}
    >
      <article
        className={`glass-card rounded-3xl p-4 sm:p-5 shadow-[0_22px_45px_-24px_rgba(35,17,9,0.55)] transition-all duration-300 ${
          isUnavailable ? "opacity-70" : ""
        }`}
      >
        <div className="relative mb-4">
          {product.tag && (
            <motion.span
              className="absolute top-3 left-3 z-10 bg-gold text-chocolate-dark text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + index * 0.1 }}
            >
              {product.tag}
            </motion.span>
          )}

          {isUnavailable && (
            <span className="absolute top-3 right-3 z-10 bg-chocolate-dark/90 text-white text-[10px] sm:text-xs font-semibold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full">
              Esgotado
            </span>
          )}

          <div className="lg:hidden">
            <div className="relative overflow-hidden rounded-2xl touch-pan-y select-none" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide) => (
                  <div key={slide.alt} className="relative min-w-0 flex-[0_0_100%] aspect-[4/5] bg-secondary">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform ${
                        isUnavailable ? "grayscale saturate-0" : ""
                      } ${
                        selectedIndex === 1 && slide.isInside ? "scale-105" : "scale-100"
                      }`}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/8 to-transparent" />

                    {slide.isInside && hasNutella && (
                      <div
                        className={`absolute bottom-4 left-4 transition-all duration-300 ${
                          selectedIndex === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                        }`}
                      >
                        <span className="text-white text-[11px] sm:text-xs tracking-[0.14em] uppercase bg-black/45 backdrop-blur-sm px-3 py-2 rounded-full">
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
                    key={`${product.id}-dot-${dotIndex}`}
                    type="button"
                    aria-label={`Ir para imagem ${dotIndex + 1} de ${slides.length}`}
                    onClick={() => emblaApi?.scrollTo(dotIndex)}
                    className="p-0.5"
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
            className="hidden lg:block"
            onMouseEnter={() => setDesktopFlipped(true)}
            onMouseLeave={() => setDesktopFlipped(false)}
            onClick={() => setDesktopFlipped((prev) => !prev)}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <motion.img
                src={product.imageInteiro}
                alt={`${product.name} - ovo inteiro`}
                className={`absolute inset-0 h-full w-full object-cover ${isUnavailable ? "grayscale saturate-0" : ""}`}
                animate={{ opacity: desktopFlipped ? 0 : 1, scale: desktopFlipped ? 1.05 : 1 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                loading="lazy"
                decoding="async"
              />
              <motion.img
                src={product.imageMetade}
                alt={`${product.name} - ovo aberto com recheio`}
                className={`absolute inset-0 h-full w-full object-cover ${isUnavailable ? "grayscale saturate-0" : ""}`}
                animate={{ opacity: desktopFlipped ? 1 : 0, scale: desktopFlipped ? 1.05 : 1 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/8 to-transparent" />
              {hasNutella && (
                <motion.div
                  className="absolute bottom-4 left-4"
                  animate={{ opacity: desktopFlipped ? 1 : 0, y: desktopFlipped ? 0 : 8 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="text-white text-xs tracking-[0.14em] uppercase bg-black/45 backdrop-blur-sm px-3 py-2 rounded-full">
                    Recheado com Nutella® original
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2 px-1">
          <h3 className="font-display text-[2rem] leading-none text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm font-light leading-relaxed">{product.description}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {qualitySeals.map((seal) => (
              <span
                key={`${product.id}-${seal}`}
                className="text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-chocolate-mid bg-white/65 border border-gold/35 rounded-full px-2.5 py-1"
              >
                {seal}
              </span>
            ))}
          </div>

          <p className="text-gold font-display text-2xl font-semibold pt-1">{product.price}</p>

          {isUnavailable ? (
            <button
              type="button"
              disabled
              className="mt-1 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-muted px-5 py-3 text-sm font-semibold tracking-wide text-muted-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              Produto indisponível
            </button>
          ) : (
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/30"
            >
              <MessageCircle className="h-4 w-4" />
              Pedir pelo WhatsApp
            </a>
          )}
        </div>
      </article>
    </motion.div>
  );
}
