"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { href: "#menu", label: "Carta & Menú" },
  { href: "#galeria", label: "Fotos Reales" },
  { href: "#como-pedir", label: "¿Cómo Pedir?" },
  { href: "#nosotros", label: "Nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 py-3.5 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0c0a]/95 backdrop-blur-md border-b border-[#1e2620] shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#22c55e] shadow-lg shadow-green-500/20 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-white text-base sm:text-lg leading-tight">
                D&apos;TODITOS <span className="text-[#22c55e]">SUSHI</span>
              </span>
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase -mt-0.5">
                Delivery &amp; Retiro
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#4ade80] text-sm font-semibold transition-colors duration-200 animated-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA & Cart Action */}
          <div className="flex items-center gap-3">
            {count > 0 ? (
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-extrabold text-sm px-4 py-2 rounded-full transition-all duration-300 shadow-lg shadow-green-600/30 cursor-pointer active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 text-black stroke-[2.5]" />
                <span>Ver Pedido ({count})</span>
              </button>
            ) : (
              <a
                href="#menu"
                className="hidden sm:inline-flex items-center gap-2 bg-[#17231a] hover:bg-[#203225] border border-[#22c55e]/50 text-[#4ade80] text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 hover:border-[#22c55e]"
              >
                Ver Carta
              </a>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg bg-[#141a15] border border-[#1e2620]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5 text-[#22c55e]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#0d120f]/98 border-b border-[#1e2620] px-6 py-6 md:hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-gray-200 hover:text-[#4ade80] py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="#menu"
                  onClick={() => setOpen(false)}
                  className="w-full text-center bg-[#22c55e] text-black font-extrabold py-3 rounded-xl shadow-lg shadow-green-600/30"
                >
                  Ver Menú Completo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
