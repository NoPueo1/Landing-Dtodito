"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  label: string;
}

const galleryItems: GalleryItem[] = [
  { src: "/images/ramo-sushi.jpg", alt: "Ramo de Sushi D'Toditos", label: "Ramo de sushi personalizado" },
  { src: "/images/sushi-burger.jpg", alt: "Sushi Burger D'Toditos", label: "Sushi burger crujiente" },
  { src: "/images/salchipapas.jpg", alt: "Salchipapas D'Toditos", label: "Salchipapas y bajones" },
  { src: "/images/fresas-con-crema.jpg", alt: "Fresas con Crema D'Toditos", label: "Fresas con crema artesanal" },
  { src: "/images/gohan-bowl.jpg", alt: "Gohan Bowl D'Toditos", label: "Gohan bowl con palta" },
  { src: "/images/rolls-sin-arroz.jpg", alt: "Rolls Sin Arroz Keto", label: "Rolls keto sin arroz" },
  { src: "/images/promo-rolls.jpg", alt: "Promociones de Sushi", label: "Promos para compartir" },
  { src: "/images/tabla-sushi.jpg", alt: "Tablas de Sushi D'Toditos", label: "Tablas y eventos especiales" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);
  const selectedItem = selected !== null ? galleryItems[selected] : null;

  return (
    <section id="galeria" ref={ref} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[#22c55e] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            Visual
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">La experiencia</h2>
          <div className="neon-line w-24 mx-auto" />
        </motion.div>

        {/* Grid 4 columnas balanceado — 8 fotos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <div
                onClick={() => setSelected(i)}
                className="relative rounded-2xl overflow-hidden aspect-square cursor-pointer group bg-[#141414] border border-[#242424] hover:border-[#22c55e]/50 transition-colors"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-bold text-xs">{item.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10 cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-square w-full max-w-2xl mx-auto">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">{selectedItem.label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
