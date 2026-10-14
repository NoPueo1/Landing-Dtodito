"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { siteConfig } from "@/data/siteConfig";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rolls-variados.jpg"
          alt="D'Toditos Sushi"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      {/* Green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-900/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/images/logo.jpg"
            alt="D'Toditos Sushi"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-8 shadow-2xl shadow-green-900/40 border border-green-500/20"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl sm:text-6xl font-black mb-4"
        >
          ¿Con hambre? <br />
          <span className="text-[#22c55e]">Te lo solucionamos.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-400 text-xl mb-10"
        >
          Sushi y comida rápida, delivery directo en Quillón.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#16a34a] hover:bg-[#15803d] text-white font-extrabold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-xl shadow-green-950/40 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-6 h-6 stroke-[2.2]" />
            Pedir ahora
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border border-white/20 hover:border-white/50 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
          >
            <InstagramIcon className="w-6 h-6" />
            Seguirnos en IG
          </a>
        </motion.div>
      </div>
    </section>
  );
}
