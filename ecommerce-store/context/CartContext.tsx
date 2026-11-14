"use client";

import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import { Product, ProductColor, CartItem, PromoCode } from "@/types";
import { VALID_PROMO_CODES } from "@/data/products";
import { useToast } from "./ToastContext";

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  appliedPromo: PromoCode | null;
  addToCart: (product: Product, quantity?: number, selectedColor?: ProductColor) => void;
  removeFromCart: (productId: string, colorName?: string) => void;
  updateQuantity: (productId: string, quantity: number, colorName?: string) => void;
  clearCart: () => void;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  totalItemCount: number;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  taxAmount: number;
  total: number;
  freeShippingThreshold: number;
  amountUntilFreeShipping: number;
  freeShippingProgress: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 100;
const STANDARD_SHIPPING_FEE = 9.99;
const ESTIMATED_TAX_RATE = 0.08;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    try {
      const storedItems = localStorage.getItem("lumen_cart");
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
      const storedPromo = localStorage.getItem("lumen_applied_promo");
      if (storedPromo) {
        setAppliedPromo(JSON.parse(storedPromo));
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      try {
        localStorage.setItem("lumen_cart", JSON.stringify(items));
      } catch {
        // ignore
      }
    }
  }, [items, hydrated]);

  useEffect(() => {
    if (hydrated) {
      try {
        if (appliedPromo) {
          localStorage.setItem("lumen_applied_promo", JSON.stringify(appliedPromo));
        } else {
          localStorage.removeItem("lumen_applied_promo");
        }
      } catch {
        // ignore
      }
    }
  }, [appliedPromo, hydrated]);

  const addToCart = useCallback(
    (product: Product, quantity = 1, selectedColor?: ProductColor) => {
      const color = selectedColor || product.colors[0];

      setItems((prevItems) => {
        const existingIndex = prevItems.findIndex(
          (item) => item.product.id === product.id && item.selectedColor?.name === color?.name
        );

        if (existingIndex > -1) {
          const updated = [...prevItems];
          const newQty = Math.min(product.stockCount, updated[existingIndex].quantity + quantity);
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: newQty,
          };
          return updated;
        } else {
          return [
            ...prevItems,
            {
              product,
              quantity: Math.min(product.stockCount, quantity),
              selectedColor: color,
            },
          ];
        }
      });

      showToast(
        `Added ${quantity}x "${product.name}"${color ? ` (${color.name})` : ""} to your cart`,
        "success",
        "Added to Cart"
      );
    },
    [showToast]
  );

  const removeFromCart = useCallback(
    (productId: string, colorName?: string) => {
      const targetItem = items.find(
        (item) =>
          item.product.id === productId &&
          (!colorName || item.selectedColor?.name === colorName)
      );

      setItems((prev) =>
        prev.filter(
          (item) =>
            !(
              item.product.id === productId &&
              (!colorName || item.selectedColor?.name === colorName)
            )
        )
      );

      if (targetItem) {
        showToast(`Removed "${targetItem.product.name}" from your cart`, "info");
      }
    },
    [items, showToast]
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number, colorName?: string) => {
      if (quantity <= 0) {
        removeFromCart(productId, colorName);
        return;
      }

      setItems((prev) =>
        prev.map((item) => {
          if (
            item.product.id === productId &&
            (!colorName || item.selectedColor?.name === colorName)
          ) {
            const cappedQty = Math.min(item.product.stockCount, quantity);
            return { ...item, quantity: cappedQty };
          }
          return item;
        })
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setItems([]);
    setAppliedPromo(null);
  }, []);

  const applyPromoCode = useCallback(
    (inputCode: string): { success: boolean; message: string } => {
      const codeUpper = inputCode.trim().toUpperCase();
      const found = VALID_PROMO_CODES.find((p) => p.code === codeUpper);

      if (!found) {
        return {
          success: false,
          message: `Code "${inputCode}" is invalid or expired. Try "LUMEN20" or "SPRING40".`,
        };
      }

      const currentSubtotal = items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );

      if (found.minSubtotal && currentSubtotal < found.minSubtotal) {
        return {
          success: false,
          message: `Coupon ${found.code} requires a minimum order of $${found.minSubtotal}.`,
        };
      }

      setAppliedPromo(found);
      showToast(`Promo ${found.code} applied! (${found.discountPercent}% OFF)`, "success", "Discount Activated");
      return {
        success: true,
        message: `Success! ${found.discountPercent}% discount applied.`,
      };
    },
    [items, showToast]
  );

  const removePromoCode = useCallback(() => {
    setAppliedPromo(null);
    showToast("Promo code removed", "info");
  }, [showToast]);

  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [items]);

  const discountAmount = useMemo(() => {
    if (!appliedPromo) return 0;
    return (subtotal * appliedPromo.discountPercent) / 100;
  }, [subtotal, appliedPromo]);

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

  const shippingFee = useMemo(() => {
    if (items.length === 0) return 0;
    return isFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
  }, [items.length, isFreeShipping]);

  const taxAmount = useMemo(() => {
    if (items.length === 0) return 0;
    const taxableAmount = Math.max(0, subtotal - discountAmount);
    return taxableAmount * ESTIMATED_TAX_RATE;
  }, [items.length, subtotal, discountAmount]);

  const total = useMemo(() => {
    if (items.length === 0) return 0;
    return Math.max(0, subtotal - discountAmount + shippingFee + taxAmount);
  }, [items.length, subtotal, discountAmount, shippingFee, taxAmount]);

  const totalItemCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const amountUntilFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        setIsCartOpen,
        appliedPromo,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyPromoCode,
        removePromoCode,
        totalItemCount,
        subtotal,
        discountAmount,
        shippingFee,
        taxAmount,
        total,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountUntilFreeShipping,
        freeShippingProgress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

