"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  pieces?: number | string;
  unit?: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  add: (item: Omit<CartItem, "quantity">) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  orderType: "delivery" | "retiro";
  setOrderType: (type: "delivery" | "retiro") => void;
  address: string;
  setAddress: (addr: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [orderType, setOrderType] = useState<"delivery" | "retiro">("delivery");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  // Load cart from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dtoditos_cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("dtoditos_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const add = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const remove = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) return remove(id);
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    );
  };

  const clear = () => setItems([]);

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        add,
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
