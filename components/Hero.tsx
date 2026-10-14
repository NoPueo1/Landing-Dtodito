"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { MessageCircle, UtensilsCrossed, Sparkles, Flame, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0c0a] pt-24 pb-16 px-6">
      {/* Background with real sushi photo blurred & darkened */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tabla-sushi.jpg"
          alt="D'Toditos Sushi Variado"
          fill
          priority
          className="object-cover opacity-15 filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0a]/80 via-[#0a0c0a]/90 to-[#0a0c0a]" />
      </div>

      {/* Decorative neon green & orange ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full bg-[#22c55e]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-[#f97316]/10 blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Top pill badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121c14] border border-[#22c55e]/40 text-[#4ade80] text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-green-950/30"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#22c55e]" />
          <span>Sushi &amp; Bajón Premium</span>
        </motion.div>

        {/* Central Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-6"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-3 border-[#22c55e] shadow-2xl shadow-green-600/30">
            <Image
              src="/images/logo.jpg"
              alt="D'Toditos Sushi"
              fill
              className="object-cover"
              sizes="180px"
              priority
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-none"
        >
          D&apos;TODITOS <span className="text-[#22c55e]">SUSHI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-gray-300 text-base sm:text-xl font-medium mb-8 max-w-xl"
        >
          Promos gigantes, Sushi Burgers, Rolls sin arroz, Salchipapas crujientes y Tortas para celebrar.
        </motion.p>

        {/* Highlights Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 text-xs sm:text-sm font-semibold text-gray-300"
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141a15] border border-[#233326]">
            <CheckCircle2 className="w-4 h-4 text-[#22c55e]" /> Promos de 20 a 140 pzas
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141a15] border border-[#233326]">
            <Flame className="w-4 h-4 text-[#f97316]" /> Salchipapas &amp; Chorrillanas
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141a15] border border-[#233326]">
            <CheckCircle2 className="w-4 h-4 text-[#22c55e]" /> Pedidos por WhatsApp
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-black font-black text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-green-600/30 hover:scale-105 active:scale-95"
          >
            <UtensilsCrossed className="w-5 h-5 text-black stroke-[2.5]" />
            <span>Ver Carta y Precios</span>
          </a>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#141c16] hover:bg-[#1d2b20] border border-[#22c55e]/50 hover:border-[#22c55e] text-white font-bold text-base px-7 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 text-[#22c55e]" />
            <span>Hablar por WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* Neon Line Separator */}
      <div className="absolute bottom-0 inset-x-0">
        <div className="neon-line max-w-4xl mx-auto" />
      </div>
    </section>
  );
}
