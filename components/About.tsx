"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const badges = [
  { label: "Delivery Quillón" },
  { label: "Rolls al momento" },
  { label: "Sushi Burgers" },
  { label: "Salchipapas & Bajón" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" ref={ref} className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#222]">
            <Image
              src="/images/sushi-burger.jpg"
              alt="D'Toditos Sushi Quillón"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-[#22c55e] text-black font-extrabold px-6 py-3 rounded-xl shadow-xl text-sm border border-green-400/30">
            D&apos;Toditos Sushi
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Section label */}
          <p className="text-[#22c55e] text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            Nuestra historia
          </p>

          <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
            Sushi y bajón
            <br />
            <span className="text-[#22c55e]">en Quillón</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Somos <strong className="text-white">D&apos;Toditos Sushi</strong>, un
            equipo de Quillón que combina el mejor sushi fresco con el bajón más
            contundente. Rolls elaborados con ingredientes de primera, sushi burgers
            apanadas, salchipapas crujientes y promos armadas para compartir. Sin
            vueltas — buen sushi, buen precio, directo en tu puerta.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {badges.map((b) => (
              <span
                key={b.label}
                className="px-4 py-2 bg-[#161616] border border-[#2a2a2a] rounded-full text-sm text-gray-300"
              >
                {b.label}
              </span>
            ))}
          </div>

          {/* Quick info */}
          <div className="pt-4 border-t border-[#222] flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#22c55e] shrink-0" />
              <span>Quillón · Delivery y Retiro</span>
            </div>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#22c55e] hover:text-white transition-colors underline underline-offset-4"
            >
              Ver novedades en Instagram →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
