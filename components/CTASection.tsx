"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MessageCircle, ShoppingBag, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 px-6 overflow-hidden bg-black">
      {/* Background with real food photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rolls-variados.jpg"
          alt="D'Toditos Sushi Variado"
          fill
          className="object-cover opacity-15 filter blur-xs"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      {/* Neon green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#22c55e]/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-2 border-[#22c55e] shadow-xl shadow-green-600/30">
            <Image
              src="/images/logo.jpg"
              alt="D'Toditos Sushi"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-4xl sm:text-6xl font-black mb-4 leading-tight"
        >
          ¿Antojo de Sushi o de un buen Bajón? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
            Te lo tenemos todo listo.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-base sm:text-xl mb-10 max-w-xl mx-auto"
        >
          Tablas gigantes, sushi burgers crujientes, salchipapas y postres. Haz tu pedido y disfruta en minutos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-black font-black text-base px-9 py-4 rounded-full transition-all duration-300 shadow-xl shadow-green-600/30 hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
            <span>Armar Mi Pedido</span>
          </a>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#141d16] hover:bg-[#1c291f] border border-[#22c55e]/50 hover:border-[#22c55e] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 text-[#22c55e]" />
            <span>WhatsApp Directo</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
