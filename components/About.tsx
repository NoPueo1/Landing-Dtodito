"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Sparkles, HeartHandshake, Zap, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const highlights = [
  {
    icon: Zap,
    title: "El Verdadero Bajón",
    desc: "Sushi apanado al momento, papas doradas y combinaciones contundentes.",
  },
  {
    icon: Sparkles,
    title: "Variedad Única",
    desc: "Desde promos de 100 y 140 piezas hasta sushi keto sin arroz y ramos de regalo.",
  },
  {
    icon: HeartHandshake,
    title: "Hecho con Pasión",
    desc: "Ingredientes frescos, atención cercana y el mejor sazón en cada pedido.",
  },
  {
    icon: Clock,
    title: "Directo a tu Puerta",
    desc: "Retiro en local y servicio de delivery rápido por WhatsApp.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" ref={ref} className="py-24 px-6 bg-[#0a0c0a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-[#1e2620] shadow-2xl shadow-green-950/20 group">
            <Image
              src="/images/sushi-burger.jpg"
              alt="Sushi Burger D'Toditos"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-black uppercase tracking-wider text-[#4ade80] bg-[#121c14]/90 px-3 py-1 rounded-full border border-[#22c55e]/30 inline-block mb-1">
                Especialidad de la casa
              </span>
              <h3 className="text-xl font-black text-white">Sushi Burgers &amp; Tablas Gigantes</h3>
            </div>
          </div>

          {/* Floating Pill */}
          <div className="absolute -bottom-4 -right-4 bg-[#121c14] text-[#4ade80] border border-[#22c55e]/40 font-black px-5 py-2.5 rounded-2xl shadow-xl text-xs sm:text-sm flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-ping" />
            100% Fresco y al instante
          </div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="order-1 lg:order-2"
        >
          <p className="text-[#22c55e] text-xs tracking-[0.25em] uppercase font-black mb-3">
            Conócenos
          </p>

          <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
            En D&apos;Toditos tenemos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
              todo lo que te gusta
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            Nacimos con una idea clara: no tienes que elegir entre el mejor sushi y el mejor bajón. En{" "}
            <strong className="text-white">D&apos;Toditos Sushi</strong> te armamos promos gigantes para tus juntas,
            sushi burgers apanadas, rolls keto sin arroz, y para cuando el antojo pide más: salchipapas, chorrillanas,
            hamburguesas y fresas con crema.
          </p>

          {/* Grid of features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#111613] border border-[#1d2720] flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#22c55e]" />
                    <h3 className="font-bold text-sm text-white">{h.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-normal">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
