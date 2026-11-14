"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Copy, Check, Clock, Sparkles, ArrowRight } from "lucide-react";
import { useToast } from "@/context/ToastContext";

export default function PromoBanner() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  
  // Flash sale countdown state (mock 14 hours 22 mins remaining)
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 22,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    try {
      navigator.clipboard.writeText("SPRING40");
      setCopied(true);
      showToast("Coupon code 'SPRING40' copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 3000);
    } catch {
      showToast("Use coupon code 'SPRING40' at checkout", "info");
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-neutral-900 to-zinc-950 text-white border border-zinc-800 shadow-2xl p-8 sm:p-12 lg:p-16">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Equinox Flash Drop</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Save 40% on Precision Audio &amp; Desk Essentials.
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
                Unlock 40% discount across our entire flagship audio and mechanical desktop catalog. Includes free worldwide carbon-neutral express delivery.
              </p>

              {/* Countdown Timer */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Offer Expires In:</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-zinc-800/80 border border-zinc-700/80 rounded-xl px-3 py-2 text-center min-w-[58px]">
                    <span className="block text-xl font-black text-white">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase text-zinc-400">Hours</span>
                  </div>
                  <span className="text-xl font-bold text-zinc-500">:</span>
                  <div className="bg-zinc-800/80 border border-zinc-700/80 rounded-xl px-3 py-2 text-center min-w-[58px]">
                    <span className="block text-xl font-black text-white">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase text-zinc-400">Mins</span>
                  </div>
                  <span className="text-xl font-bold text-zinc-500">:</span>
                  <div className="bg-zinc-800/80 border border-zinc-700/80 rounded-xl px-3 py-2 text-center min-w-[58px]">
                    <span className="block text-xl font-black text-white">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase text-zinc-400">Secs</span>
                  </div>
                </div>
              </div>

              {/* Promo Code Copy Row & Link */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono text-sm tracking-wider transition-colors group"
                >
                  <span className="font-bold">SPRING40</span>
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                  )}
                </button>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 text-xs font-bold hover:bg-zinc-200 transition-colors shadow-lg group"
                >
                  <span>Claim 40% Discount</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-700/80 shadow-2xl aspect-[4/3] group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
                  alt="Horizon Mechanical Keyboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                      Highlighted In Sale
                    </span>
                    <p className="text-sm font-bold">Horizon Mechanical Keyboard</p>
                    <p className="text-xs text-zinc-300">$169.99 (Reg. $199.99)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

