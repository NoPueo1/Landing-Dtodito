"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { menuData, MenuItem } from "@/data/menu";
import { ShoppingBag, Check, Search, Sparkles, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export default function Menu() {
  const [active, setActive] = useState("promos");
  const [search, setSearch] = useState("");
  const [added, setAdded] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { add } = useCart();

  const activeCategory = menuData.find((c) => c.id === active) || menuData[0];

  const handleAdd = (item: MenuItem, catId: string) => {
    add({
      id: `${catId}-${item.name}`,
      name: item.name,
      price: item.price,
      pieces: item.pieces,
      unit: item.unit,
    });
    setAdded(item.name);
    setTimeout(() => setAdded(null), 1200);
  };

  // Filter items by search query if typed
  const isSearching = search.trim().length > 0;
  const searchResults = isSearching
    ? menuData.flatMap((cat) =>
        cat.items
          .filter(
            (i) =>
              i.name.toLowerCase().includes(search.toLowerCase()) ||
              (i.description && i.description.toLowerCase().includes(search.toLowerCase()))
          )
          .map((i) => ({ ...i, categoryId: cat.id, categoryLabel: cat.label }))
      )
    : [];

  return (
    <section id="menu" ref={ref} className="py-24 px-6 bg-[#080a08] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121c14] border border-[#22c55e]/30 text-[#4ade80] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#22c55e]" />
            Carta Oficial D&apos;Toditos
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-3">Nuestro Menú</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
            Elige tus favoritos, arma tu pedido en el carrito y envíalo listo a WhatsApp
          </p>
          <div className="neon-line w-28 mx-auto mt-5" />
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 absolute left-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar rolls, burger, promo, salchipapas..."
              className="w-full pl-11 pr-10 py-3 rounded-full bg-[#111713] border border-[#1f2a21] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3.5 text-gray-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (only when not searching) */}
        {!isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
          >
            {menuData.map((cat) => {
              const isSelected = active === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 border shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-[#22c55e] border-[#22c55e] text-black shadow-lg shadow-green-600/30 scale-105"
                      : "bg-[#111613] border-[#1e2720] text-gray-400 hover:border-[#22c55e]/50 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </motion.div>
        )}

        {/* Subtitle / hint */}
        {!isSearching && activeCategory.subtitle && (
          <p className="text-center text-xs text-gray-400 mb-8 max-w-md mx-auto">
            {activeCategory.subtitle}
          </p>
        )}

        {/* Items Grid */}
        <AnimatePresence mode="wait">
          {isSearching ? (
            <motion.div
              key="search-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {searchResults.length === 0 ? (
                <div className="text-center py-16 text-gray-500">
                  <p className="text-lg">No encontramos productos con &ldquo;{search}&rdquo;</p>
                  <p className="text-sm mt-1">Prueba con otra palabra o revisa las pestañas de categorías.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                  {searchResults.map((item, i) => {
                    const wasAdded = added === item.name;
                    return (
                      <div
                        key={item.name}
                        className="rounded-2xl p-5 bg-[#111613] border border-[#1e2821] hover:border-[#22c55e]/60 transition-all duration-300 card-glow flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[11px] font-black uppercase text-[#4ade80] tracking-wider">
                              {item.categoryLabel}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-[#f97316]/15 text-[#fb923c] border border-[#f97316]/30 uppercase">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="font-extrabold text-lg text-white mb-1.5">{item.name}</h3>
                          {item.description && (
                            <p className="text-xs text-gray-400 leading-relaxed mb-4">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
                          <span className="text-xl font-black text-white">
                            {formatPrice(item.price)}
                          </span>
                          <button
                            onClick={() => handleAdd(item, item.categoryId)}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer ${
                              wasAdded
                                ? "bg-[#22c55e] text-black scale-95"
                                : "bg-[#18231b] hover:bg-[#22c55e] border border-[#22c55e]/40 hover:border-[#22c55e] text-[#4ade80] hover:text-black"
                            }`}
                          >
                            {wasAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                <span>¡Agregado!</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="w-3.5 h-3.5" />
                                <span>Agregar</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {activeCategory.items.map((item, i) => {
                  const wasAdded = added === item.name;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.35 }}
                      className="group relative rounded-2xl p-5 sm:p-6 bg-[#111613] border border-[#1e2821] hover:border-[#22c55e]/60 transition-all duration-300 card-glow flex flex-col justify-between"
                    >
                      {/* Optional Item Thumbnail */}
                      {item.image && (
                        <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 border border-[#1f2821]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}

                      <div>
                        {/* Badges / pieces */}
                        <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                          {item.badge && (
                            <span className="text-[10px] font-black px-2.5 py-1 rounded bg-[#22c55e]/15 text-[#4ade80] border border-[#22c55e]/30 tracking-wider uppercase">
                              {item.badge}
                            </span>
                          )}
                          {item.pieces && !item.badge && (
                            <span className="text-[10px] font-black px-2.5 py-1 rounded bg-[#f97316]/15 text-[#fb923c] border border-[#f97316]/30 tracking-wider uppercase">
                              {item.pieces} {item.unit || "piezas"}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-extrabold text-lg sm:text-xl text-white mb-2 leading-snug">
                          {item.name}
                        </h3>

                        {/* Description */}
                        {item.description && (
                          <p className="text-xs text-gray-400 leading-relaxed mb-5">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* Footer card */}
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-500 font-semibold uppercase">
                            Precio
                          </span>
                          <span className="text-xl sm:text-2xl font-black text-white">
                            {formatPrice(item.price)}
                          </span>
                        </div>

                        <button
                          onClick={() => handleAdd(item, activeCategory.id)}
                          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer shadow-md ${
                            wasAdded
                              ? "bg-[#22c55e] text-black scale-95 shadow-green-500/30"
                              : "bg-[#17231a] hover:bg-[#22c55e] border border-[#22c55e]/40 hover:border-[#22c55e] text-[#4ade80] hover:text-black hover:scale-105"
                          }`}
                        >
                          {wasAdded ? (
                            <>
                              <Check className="w-4 h-4 stroke-[3]" />
                              <span>¡Agregado!</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-4 h-4" />
                              <span>Agregar</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
