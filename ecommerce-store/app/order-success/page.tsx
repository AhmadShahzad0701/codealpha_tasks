"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Package, 
  Printer, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  CreditCard, 
  Sparkles,
  ShoppingBag
} from "lucide-react";
import confetti from "canvas-confetti";
import { OrderConfirmation } from "@/types";

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<OrderConfirmation | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fire celebratory confetti burst
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10b981", "#3b82f6", "#f59e0b", "#6366f1"],
      });
    } catch {
      // ignore
    }

    try {
      const stored = localStorage.getItem("lumen_last_order");
      if (stored) {
        setOrder(JSON.parse(stored));
      } else {
        // Fallback demo order if visited directly
        setOrder({
          orderId: "LUM-928471",
          orderDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
          estimatedDelivery: "3 Business Days",
          items: [],
          shippingAddress: {
            firstName: "Alex",
            lastName: "Rivers",
            email: "alex.rivers@example.com",
            phone: "+1 (555) 234-5678",
            address: "742 Evergreen Terrace",
            city: "San Francisco",
            state: "CA",
            postalCode: "94107",
            country: "United States",
          },
          shippingMethod: "Express Tracked Delivery",
          paymentMethod: "Credit Card (Ending in 4242)",
          subtotal: 299.99,
          discountAmount: 40.0,
          shippingFee: 0,
          taxAmount: 20.8,
          total: 280.79,
          promoCodeApplied: "SPRING40",
        });
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!mounted || !order) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Top Banner Celebration Card */}
      <div className="text-center space-y-4 mb-12">
        <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-xl ring-8 ring-emerald-50 dark:ring-emerald-900/20 animate-in zoom-in-50 duration-300">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Payment Verified &amp; Confirmed</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
          Thank you for your order!
        </h1>

        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
          We&apos;ve sent a confirmation receipt to <strong className="text-zinc-800 dark:text-zinc-200">{order.shippingAddress.email}</strong>. Your hardware is being prepared for dispatch.
        </p>

        <div className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-xl font-mono text-sm font-bold shadow-md">
          Order Reference: #{order.orderId}
        </div>
      </div>

      {/* Itemized Order Receipt Card */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-10 shadow-sm space-y-8">
        
        {/* Logistics Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-1">
            <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-semibold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" /> Estimated Delivery
            </span>
            <p className="text-sm font-bold text-zinc-900 dark:text-white">
              {order.estimatedDelivery}
            </p>
            <p className="text-xs text-zinc-500">{order.shippingMethod}</p>
          </div>

          <div className="space-y-1">
            <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" /> Shipping Address
            </span>
            <p className="text-sm font-bold text-zinc-900 dark:text-white">
              {order.shippingAddress.firstName} {order.shippingAddress.lastName}
            </p>
            <p className="text-xs text-zinc-500 truncate">
              {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}
            </p>
          </div>

          <div className="space-y-1">
            <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-semibold uppercase tracking-wider">
              <CreditCard className="w-3.5 h-3.5" /> Payment Method
            </span>
            <p className="text-sm font-bold text-zinc-900 dark:text-white">
              {order.paymentMethod}
            </p>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Authorized &amp; Cleared</p>
          </div>
        </div>

        {/* Purchased Items List */}
        {order.items.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Package className="w-4 h-4 text-zinc-500" />
              <span>Hardware Package Contents</span>
            </h3>

            <div className="divide-y divide-zinc-100 dark:divide-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
              {order.items.map((item) => (
                <div key={`${item.product.id}-${item.selectedColor?.name}`} className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-12 rounded-xl object-cover bg-zinc-100 dark:bg-zinc-800"
                    />
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                        {item.product.name}
                      </p>
                      <p className="text-[11px] text-zinc-500">
                        Qty: {item.quantity} {item.selectedColor ? `• ${item.selectedColor.name}` : ""}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Summary Breakdown */}
        <div className="bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold text-zinc-900 dark:text-white">${order.subtotal.toFixed(2)}</span>
          </div>

          {order.discountAmount > 0 && (
            <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
              <span>Promo Discount {order.promoCodeApplied ? `(${order.promoCodeApplied})` : ""}</span>
              <span>-${order.discountAmount.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between">
            <span>Shipping ({order.shippingMethod})</span>
            <span className="font-semibold text-zinc-900 dark:text-white">
              {order.shippingFee === 0 ? "FREE" : `$${order.shippingFee.toFixed(2)}`}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Sales Tax (8%)</span>
            <span className="font-semibold text-zinc-900 dark:text-white">${order.taxAmount.toFixed(2)}</span>
          </div>

          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-700 flex justify-between text-base font-black text-zinc-900 dark:text-white">
            <span>Total Paid</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Invoice Receipt</span>
          </button>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-bold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

