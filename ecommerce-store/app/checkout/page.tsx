"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ShieldCheck, 
  CreditCard, 
  ArrowLeft, 
  Lock, 
  Tag, 
  Loader2 
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { OrderConfirmation, ShippingAddress } from "@/types";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, discountAmount, shippingFee, taxAmount, appliedPromo, clearCart } = useCart();
  const { showToast } = useToast();

  const [formData, setFormData] = useState<ShippingAddress>({
    firstName: "Alex",
    lastName: "Rivers",
    email: "alex.rivers@example.com",
    phone: "+1 (555) 234-5678",
    address: "742 Evergreen Terrace",
    apartment: "Suite 4B",
    city: "San Francisco",
    state: "CA",
    postalCode: "94107",
    country: "United States",
  });

  const [selectedShippingMethod, setSelectedShippingMethod] = useState<"standard" | "express" | "overnight">("standard");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"credit-card" | "paypal" | "apple-pay">("credit-card");

  // Payment form mock state
  const [cardNumber, setCardNumber] = useState("4242 •••• •••• 4242");
  const [cardExpiry, setCardExpiry] = useState("12/28");
  const [cardCvc, setCardCvc] = useState("892");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Compute final shipping adjustment based on method chosen
  const shippingMethodAddon = 
    selectedShippingMethod === "express" ? 14.99 :
    selectedShippingMethod === "overnight" ? 24.99 : 0;

  const finalShippingFee = shippingFee + shippingMethodAddon;
  const finalTotal = Math.max(0, subtotal - discountAmount + finalShippingFee + taxAmount);

  const handleInputChange = (field: keyof ShippingAddress, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = "First name is required";
    if (!formData.lastName.trim()) errs.lastName = "Last name is required";
    if (!formData.email.trim() || !formData.email.includes("@")) errs.email = "Valid email is required";
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.address.trim()) errs.address = "Street address is required";
    if (!formData.city.trim()) errs.city = "City is required";
    if (!formData.state.trim()) errs.state = "State is required";
    if (!formData.postalCode.trim()) errs.postalCode = "ZIP / Postal Code is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      showToast("Your cart is empty. Please add items before checking out.", "error");
      router.push("/products");
      return;
    }

    if (!validateForm()) {
      showToast("Please fill in all required shipping fields.", "error");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const orderId = `LUM-${Math.floor(100000 + Math.random() * 900000)}`;
      const now = new Date();
      const estDelivery = new Date();
      estDelivery.setDate(estDelivery.getDate() + (selectedShippingMethod === "overnight" ? 1 : selectedShippingMethod === "express" ? 2 : 4));

      const confirmation: OrderConfirmation = {
        orderId,
        orderDate: now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        estimatedDelivery: estDelivery.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
        items: [...items],
        shippingAddress: { ...formData },
        shippingMethod: 
          selectedShippingMethod === "overnight" ? "Overnight Courier" :
          selectedShippingMethod === "express" ? "Express Air" : "Standard Tracked",
        paymentMethod: 
          selectedPaymentMethod === "credit-card" ? "Credit Card (Ending in 4242)" :
          selectedPaymentMethod === "paypal" ? "PayPal Express" : "Apple Pay",
        subtotal,
        discountAmount,
        shippingFee: finalShippingFee,
        taxAmount,
        total: finalTotal,
        promoCodeApplied: appliedPromo?.code,
      };

      try {
        localStorage.setItem("lumen_last_order", JSON.stringify(confirmation));
      } catch {
        // ignore
      }

      clearCart();
      setIsSubmitting(false);
      showToast(`Order ${orderId} placed successfully!`, "success", "Order Confirmed");
      router.push("/order-success");
    }, 1200);
  };

  if (items.length === 0 && !isSubmitting) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Your Cart is Empty</h2>
        <p className="text-zinc-500 text-sm">Please add hardware items to your cart before proceeding to checkout.</p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      
      {/* Checkout Header */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <Link
            href="/cart"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Cart
          </Link>
          <h1 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
            Checkout &amp; Shipping
          </h1>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-500/30">
          <Lock className="w-3.5 h-3.5" />
          <span>256-Bit SSL Secured</span>
        </div>
      </div>

      <form onSubmit={handleSubmitOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Shipping & Payment Forms (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Contact Information */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs flex items-center justify-center font-bold">1</span>
                Contact Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full bg-zinc-50 dark:bg-zinc-800 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-1 ${
                      errors.email ? "border-rose-500 focus:ring-rose-500" : "border-zinc-200 dark:border-zinc-700 focus:ring-zinc-900"
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full bg-zinc-50 dark:bg-zinc-800 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-1 ${
                      errors.phone ? "border-rose-500 focus:ring-rose-500" : "border-zinc-200 dark:border-zinc-700 focus:ring-zinc-900"
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* 2. Shipping Address */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs flex items-center justify-center font-bold">2</span>
                Shipping Address
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={`w-full bg-zinc-50 dark:bg-zinc-800 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-1 ${
                      errors.firstName ? "border-rose-500 focus:ring-rose-500" : "border-zinc-200 dark:border-zinc-700 focus:ring-zinc-900"
                    }`}
                  />
                  {errors.firstName && <p className="text-[11px] text-rose-500 mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={`w-full bg-zinc-50 dark:bg-zinc-800 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-1 ${
                      errors.lastName ? "border-rose-500 focus:ring-rose-500" : "border-zinc-200 dark:border-zinc-700 focus:ring-zinc-900"
                    }`}
                  />
                  {errors.lastName && <p className="text-[11px] text-rose-500 mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className={`w-full bg-zinc-50 dark:bg-zinc-800 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-1 ${
                    errors.address ? "border-rose-500 focus:ring-rose-500" : "border-zinc-200 dark:border-zinc-700 focus:ring-zinc-900"
                  }`}
                />
                {errors.address && <p className="text-[11px] text-rose-500 mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className={`w-full bg-zinc-50 dark:bg-zinc-800 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-1 ${
                      errors.city ? "border-rose-500 focus:ring-rose-500" : "border-zinc-200 dark:border-zinc-700 focus:ring-zinc-900"
                    }`}
                  />
                  {errors.city && <p className="text-[11px] text-rose-500 mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                    State / Province *
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className={`w-full bg-zinc-50 dark:bg-zinc-800 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-1 ${
                      errors.state ? "border-rose-500 focus:ring-rose-500" : "border-zinc-200 dark:border-zinc-700 focus:ring-zinc-900"
                    }`}
                  />
                  {errors.state && <p className="text-[11px] text-rose-500 mt-1">{errors.state}</p>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                    ZIP / Postal Code *
                  </label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    className={`w-full bg-zinc-50 dark:bg-zinc-800 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-1 ${
                      errors.postalCode ? "border-rose-500 focus:ring-rose-500" : "border-zinc-200 dark:border-zinc-700 focus:ring-zinc-900"
                    }`}
                  />
                  {errors.postalCode && <p className="text-[11px] text-rose-500 mt-1">{errors.postalCode}</p>}
                </div>
              </div>
            </div>

            {/* 3. Delivery Method */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs flex items-center justify-center font-bold">3</span>
                Delivery Method
              </h2>

              <div className="space-y-2.5">
                {[
                  {
                    id: "standard" as const,
                    title: "Standard Tracked Delivery",
                    time: "3-5 Business Days",
                    cost: shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)}`,
                  },
                  {
                    id: "express" as const,
                    title: "Express Air Priority",
                    time: "1-2 Business Days",
                    cost: "+$14.99",
                  },
                  {
                    id: "overnight" as const,
                    title: "Next-Day Priority Courier",
                    time: "Guaranteed Next Day by 10:30 AM",
                    cost: "+$24.99",
                  },
                ].map((method) => (
                  <label
                    key={method.id}
                    onClick={() => setSelectedShippingMethod(method.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedShippingMethod === method.id
                        ? "border-zinc-900 dark:border-white bg-zinc-50 dark:bg-zinc-800/80 shadow-sm"
                        : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedShippingMethod === method.id ? "border-zinc-900 dark:border-white" : "border-zinc-300"
                      }`}>
                        {selectedShippingMethod === method.id && (
                          <div className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-white" />
                        )}
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                          {method.title}
                        </p>
                        <p className="text-[11px] text-zinc-500">{method.time}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">
                      {method.cost}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 4. Payment Method */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs flex items-center justify-center font-bold">4</span>
                Payment Information
              </h2>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "credit-card" as const, label: "Credit Card", icon: CreditCard },
                  { id: "paypal" as const, label: "PayPal", icon: Lock },
                  { id: "apple-pay" as const, label: "Apple / Google Pay", icon: ShieldCheck },
                ].map((pay) => {
                  const Icon = pay.icon;
                  return (
                    <button
                      key={pay.id}
                      type="button"
                      onClick={() => setSelectedPaymentMethod(pay.id)}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-all ${
                        selectedPaymentMethod === pay.id
                          ? "border-zinc-900 dark:border-white bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
                          : "border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{pay.label}</span>
                    </button>
                  );
                })}
              </div>

              {selectedPaymentMethod === "credit-card" && (
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white font-mono"
                      />
                      <CreditCard className="w-4 h-4 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                        Expires (MM/YY)
                      </label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1">
                        Security CVC
                      </label>
                      <input
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Order Summary Sidebar (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-7 shadow-sm space-y-5">
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                Review Your Order ({items.length} items)
              </h3>

              {/* Items List */}
              <div className="divide-y divide-zinc-100 dark:divide-zinc-800 max-h-72 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedColor?.name}`} className="py-3 flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-14 h-14 rounded-xl object-cover bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                        {item.product.name}
                      </p>
                      <p className="text-[11px] text-zinc-500">
                        Qty: {item.quantity} {item.selectedColor ? `• ${item.selectedColor.name}` : ""}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Applied Promo Code */}
              {appliedPromo && (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-700 dark:text-emerald-300">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Coupon <strong>{appliedPromo.code}</strong> applied</span>
                  </div>
                  <span className="font-bold">-{appliedPromo.discountPercent}%</span>
                </div>
              )}

              {/* Price Calculations */}
              <div className="space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">${subtotal.toFixed(2)}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span>Discount</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping ({selectedShippingMethod})</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    {finalShippingFee === 0 ? "FREE" : `$${finalShippingFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Sales Tax (8%)</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">${taxAmount.toFixed(2)}</span>
                </div>

                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-between text-base font-black text-zinc-900 dark:text-white">
                  <span>Grand Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-black text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing Secure Order...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Place Order • ${finalTotal.toFixed(2)}</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-zinc-400 text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>30-Day Money-Back Guarantee &amp; 2-Year Warranty included</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
