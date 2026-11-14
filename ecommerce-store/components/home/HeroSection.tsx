import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 text-xs font-semibold text-zinc-900 dark:text-zinc-100 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Spring 2026 Collection Released</span>
              <span className="text-zinc-400">•</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">Limited Run</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.08]">
              Acoustic precision &amp; minimalist hardware for modern life.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Curated everyday electronics, CNC titanium wearables, and ergonomic workspace tools. Designed with zero compromise on materials, acoustic purity, and industrial aesthetics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-bold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-lg hover:shadow-xl group"
              >
                <span>Explore Full Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products?category=Audio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 text-sm font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700/80 transition-colors border border-zinc-200 dark:border-zinc-700"
              >
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Shop Noise-Cancelling</span>
              </Link>
            </div>

            {/* Social Proof & Metrics */}
            <div className="pt-6 border-t border-zinc-200/60 dark:border-zinc-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  4.9/5 Average
                </span>
                <span>(1,200+ Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>30-Day Home Trial Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Product Hero Showcase */}
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-800/60 dark:to-zinc-900 shadow-2xl group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=85"
                  alt="Aura Studio Pro Headphones"
                  className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Product Badge */}
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-700/80 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Flagship Drop
                    </span>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                      Aura Studio Pro Wireless
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Hybrid ANC • 45h Battery
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-zinc-900 dark:text-white">
                      $299.99
                    </span>
                    <Link
                      href="/product/aura-anc-headphones"
                      className="block text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline mt-0.5"
                    >
                      View Specs &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Metric Pill */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-lg">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900 dark:text-white">Same-Day Dispatch</p>
                  <p className="text-[11px] text-zinc-500">Orders before 4 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

