"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Sparkles } from "lucide-react";

interface GalleryPhoto {
  src: string;
  alt: string;
  title: string;
  tag: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/ramo-de-sushi-regalo.jpg",
    alt: "Ramo de Sushi D'Toditos",
    title: "Ramo de Sushi para Regalo",
    tag: "Exclusivo",
  },
  {
    src: "/images/sushi-burger-gigante-apanada.jpg",
    alt: "Sushi Burger D'Toditos",
    title: "Sushi Burger Doble Crujiente",
    tag: "Favorito",
  },
  {
    src: "/images/salchipapas-bajon-crujiente.jpg",
    alt: "Salchipapas con Papas Fritas",
    title: "Salchipapas y Bajones",
    tag: "Bajón",
  },
  {
    src: "/images/fresas-con-crema-postre.jpg",
    alt: "Fresas con Crema D'Toditos",
    title: "Fresas con Crema Artesanal",
    tag: "Postres",
  },
  {
    src: "/images/gohan-bowl-flor-palta.jpg",
    alt: "Gohan Bowl D'Toditos",
    title: "Gohan Bowl con Flor de Palta",
    tag: "Bowls",
  },
  {
    src: "/images/rolls-sin-arroz-keto-salmon.jpg",
    alt: "Roll Sin Arroz Keto",
    title: "Rolls Sin Arroz (Keto)",
    tag: "Sin Arroz",
  },
  {
    src: "/images/tabla-sushi-promos-mixtas.jpg",
    alt: "Promociones Mixtas de Sushi",
    title: "Promos Mixtas de 20 a 140 Pzas",
    tag: "Promos",
  },
  {
    src: "/images/tabla-sushi-degustacion-familiar.jpg",
    alt: "Tablas de Sushi D'Toditos",
    title: "Armado de Tablas y Tortas",
    tag: "Celebración",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<number | null>(null);

  const currentPhoto = selected !== null ? galleryPhotos[selected] : null;

  return (
    <section id="galeria" ref={ref} className="py-24 px-6 bg-[#0a0c0a] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121c14] border border-[#22c55e]/30 text-[#4ade80] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#22c55e]" />
            Fotos Reales de Nuestros Platos
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-3">Galería D&apos;Toditos</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
            Así preparamos y entregamos cada uno de tus pedidos. Sin filtros, puro sabor.
          </p>
          <div className="neon-line w-28 mx-auto mt-5" />
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.45 }}
            >
              <div
                onClick={() => setSelected(i)}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-[#121613] border border-[#1e2720] hover:border-[#22c55e]/60 transition-all duration-300 cursor-pointer shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-black uppercase text-[#4ade80] tracking-wider mb-0.5">
                    {photo.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {photo.title}
                  </h4>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#111713] rounded-3xl overflow-hidden border border-[#22c55e]/30 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-square sm:aspect-[4/3] w-full">
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              <div className="p-5 sm:p-6 bg-[#0e1310] border-t border-[#1e2720] flex items-center justify-between">
                <div>
                  <span className="text-xs font-black uppercase text-[#4ade80] tracking-wider block mb-1">
                    {currentPhoto.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    {currentPhoto.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded-xl bg-[#1c261f] hover:bg-[#253329] text-xs font-bold text-gray-200 transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
