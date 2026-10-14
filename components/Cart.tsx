"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle, MapPin, Store, FileText } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/data/siteConfig";
import { formatPrice } from "@/lib/utils";

export default function Cart() {
  const {
    items,
    remove,
    updateQty,
    clear,
    total,
    count,
    isOpen,
    setIsOpen,
    orderType,
    setOrderType,
    address,
    setAddress,
    notes,
    setNotes,
  } = useCart();

  const buildWhatsAppMsg = () => {
    const lines = items.map(
      (i) =>
        `• ${i.name}${i.pieces ? ` (${i.pieces} ${i.unit || "piezas"})` : ""} x${i.quantity} — ${formatPrice(i.price * i.quantity)}`
    );

    let msg = `¡Hola D'Toditos Sushi! 🍣 Quiero hacer el siguiente pedido:\n\n`;
    msg += lines.join("\n");
    msg += `\n\n💰 Total estimado: ${formatPrice(total)}`;
    msg += `\n📍 Modalidad: ${orderType === "delivery" ? "Delivery a Domicilio" : "Retiro en Local"}`;

    if (orderType === "delivery" && address.trim()) {
      msg += `\n🏠 Dirección de entrega: ${address.trim()}`;
    }

    if (notes.trim()) {
      msg += `\n📝 Notas adicionales: ${notes.trim()}`;
    }

    return encodeURIComponent(msg);
  };

  const handleConfirm = () => {
    const url = `https://api.whatsapp.com/send/?phone=${siteConfig.phone}&text=${buildWhatsAppMsg()}&type=phone_number&app_absent=0`;
    window.open(url, "_blank");
    clear();
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating cart trigger */}
      <AnimatePresence>
        {count > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-black font-black px-5 py-3.5 rounded-full shadow-2xl shadow-green-600/40 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
            <span className="text-sm">Ver Pedido</span>
            <span className="bg-black text-[#22c55e] text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">
              {count}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#0e120f] border-l border-[#1f2821] flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#1f2821] bg-[#0b0e0c]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#18231a] flex items-center justify-center text-[#22c55e]">
                    <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-base text-white">Tu Pedido</h2>
                    <p className="text-xs text-gray-400">
                      {count} {count === 1 ? "producto" : "productos"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List & Options */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-20 text-gray-500">
                    <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30 text-[#22c55e]" />
                    <p className="text-base font-semibold text-gray-400">Tu carrito está vacío</p>
                    <p className="text-xs text-gray-500 mt-1">Explora la carta y agrega tus favoritos.</p>
                  </div>
                ) : (
                  <>
                    {/* Items */}
                    <div className="space-y-2.5">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#131915] border border-[#1e2720]"
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-sm text-white truncate">{item.name}</h4>
                            <p className="text-xs text-[#4ade80] font-medium">
                              {formatPrice(item.price)}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQty(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-lg bg-[#1c261f] hover:bg-[#253329] text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-sm font-extrabold text-white w-5 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-lg bg-[#1c261f] hover:bg-[#253329] text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => remove(item.id)}
                              className="w-7 h-7 rounded-lg text-gray-500 hover:text-red-400 flex items-center justify-center transition-colors cursor-pointer ml-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Delivery / Pickup Selector */}
                    <div className="pt-3 border-t border-[#1e2720]">
                      <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                        Modalidad de Pedido
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setOrderType("delivery")}
                          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                            orderType === "delivery"
                              ? "bg-[#22c55e]/15 border-[#22c55e] text-[#4ade80]"
                              : "bg-[#131915] border-[#1e2720] text-gray-400 hover:text-white"
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Delivery</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setOrderType("retiro")}
                          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                            orderType === "retiro"
                              ? "bg-[#22c55e]/15 border-[#22c55e] text-[#4ade80]"
                              : "bg-[#131915] border-[#1e2720] text-gray-400 hover:text-white"
                          }`}
                        >
                          <Store className="w-3.5 h-3.5" />
                          <span>Retiro en Local</span>
                        </button>
                      </div>
                    </div>

                    {/* Address if delivery */}
                    {orderType === "delivery" && (
                      <div className="space-y-1">
                        <label className="block text-xs font-medium text-gray-400">
                          Dirección / Referencia (opcional para el mensaje)
                        </label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Ej: Pasaje Los Aromos 123, Villa..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#131915] border border-[#1e2720] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e]"
                        />
                      </div>
                    )}

                    {/* Extra Notes */}
                    <div className="space-y-1">
                      <label className="block text-xs font-medium text-gray-400 flex items-center gap-1.5">
                        <FileText className="w-3 h-3 text-[#22c55e]" /> Notas o personalizaciones (opcional)
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Ej: Sin cebollín, salsa extra de soya..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#131915] border border-[#1e2720] text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e]"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-[#1f2821] bg-[#0b0e0c] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-400">Total Estimado</span>
                    <span className="text-2xl font-black text-white">
                      {formatPrice(total)}
                    </span>
                  </div>

                  <button
                    onClick={handleConfirm}
                    className="w-full flex items-center justify-center gap-2.5 bg-[#22c55e] hover:bg-[#16a34a] text-black font-extrabold text-base py-3.5 rounded-xl shadow-xl shadow-green-600/30 transition-all duration-200 cursor-pointer active:scale-98"
                  >
                    <MessageCircle className="w-5 h-5 fill-black stroke-black" />
                    <span>Pedir por WhatsApp</span>
                  </button>

                  <button
                    onClick={clear}
                    className="w-full text-center text-xs text-gray-500 hover:text-red-400 transition-colors py-1 cursor-pointer"
                  >
                    Vaciar carrito
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
