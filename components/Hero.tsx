"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { MessageCircle, UtensilsCrossed } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d] px-6">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 bg-[#0d0d0d]">
        <Image
          src="/images/tabla-sushi.jpg"
          alt="D'Toditos Sushi"
          fill
          priority
          className="object-cover opacity-20 filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d0d0d]" />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-green-700/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-green-600/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto pt-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/images/logo.jpg"
            alt="D'Toditos Sushi Logo"
            width={200}
            height={200}
            className="rounded-full shadow-2xl shadow-green-900/40 border-2 border-white/10"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#22c55e] text-sm tracking-[0.3em] uppercase font-semibold mb-4"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-5xl sm:text-7xl font-black tracking-tight mb-4 leading-none"
        >
          D&apos;TODITOS
          <br />
          <span className="text-[#22c55e]">SUSHI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-gray-400 text-lg mb-10"
        >
          Delivery en{" "}
          <span className="text-white font-semibold">{siteConfig.location}</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <motion.button
            onClick={() =>
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto min-w-[220px] flex items-center justify-center gap-3 bg-[#22c55e] hover:bg-[#16a34a] text-black font-extrabold text-lg px-8 py-4 rounded-full shadow-lg shadow-green-900/40 transition-all duration-300 cursor-pointer"
          >
            <UtensilsCrossed className="w-5 h-5 stroke-[2.5]" />
            Ver Menú
          </motion.button>

          <motion.a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto min-w-[220px] flex items-center justify-center gap-3 bg-[#161616] hover:bg-[#222222] border border-white/20 hover:border-white/40 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 text-[#22c55e]" />
            Pedir por WhatsApp
          </motion.a>
        </motion.div>

        {/* Schedule badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm"
        >
          🕐 {siteConfig.schedule}
        </motion.div>
      </div>
    </section>
  );
}
