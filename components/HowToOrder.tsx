"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Utensils, ShoppingBag, MessageCircle, Bike } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Utensils,
    title: "Elige tus favoritos",
    description:
      "Explora la carta y agrega tus promociones, sushi burgers, rolls sin arroz o salchipapas al carrito.",
  },
  {
    step: "02",
    icon: ShoppingBag,
    title: "Revisa tu pedido",
    description:
      "Ajusta cantidades, elige si prefieres Delivery o Retiro en local, e ingresa notas especiales.",
  },
  {
    step: "03",
    icon: MessageCircle,
    title: "Envía a WhatsApp",
    description:
      "Tu pedido se autocompila en un mensaje claro y ordenado listo para enviar a nuestro WhatsApp.",
  },
  {
    step: "04",
    icon: Bike,
    title: "¡Recibe y disfruta!",
    description:
      "Preparamos todo al instante con ingredientes frescos y te lo entregamos rápido.",
  },
];

export default function HowToOrder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-pedir" ref={ref} className="py-24 px-6 bg-[#080a08] relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#22c55e] text-xs tracking-[0.25em] uppercase font-black mb-3">
            Simple y al grano
          </p>
          <h2 className="text-4xl sm:text-5xl font-black mb-3">¿Cómo Pedir?</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
            Sin formularios engorrosos ni registros largos. En 4 pasos tu comida va en camino.
          </p>
          <div className="neon-line w-24 mx-auto mt-5" />
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative text-center p-6 rounded-2xl bg-[#111613] border border-[#1e2821] hover:border-[#22c55e]/50 transition-colors group card-glow flex flex-col justify-between"
              >
                <div>
                  {/* Step icon */}
                  <div className="relative inline-block mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#162118] border border-[#233526] flex items-center justify-center text-[#22c55e] mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#22c55e] text-black text-xs font-black flex items-center justify-center shadow-lg shadow-green-600/40">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg mb-2 text-white">{s.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
