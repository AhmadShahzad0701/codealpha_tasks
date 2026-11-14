"use client";

import React, { useState } from "react";
import { Sparkles, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-zinc-900 via-neutral-900 to-zinc-900 dark:from-zinc-950 dark:via-neutral-950 dark:to-zinc-950 text-white text-xs py-2 px-4 border-b border-zinc-800 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden sm:flex items-center gap-2 text-zinc-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Spring Equinox Flash Sale</span>
        </div>

        <div className="flex-1 sm:flex-initial text-center flex items-center justify-center gap-2">
          <span className="font-medium text-zinc-200">
            Use code <strong className="text-white tracking-wider font-bold bg-white/10 px-1.5 py-0.5 rounded">SPRING40</strong> for 40% OFF
          </span>
          <span className="hidden md:inline text-zinc-500">•</span>
          <span className="hidden md:inline text-zinc-300">Free Worldwide Express on orders over $100</span>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 underline font-medium ml-1 transition-colors"
          >
            Shop Now <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-zinc-400 hover:text-white p-1 rounded transition-colors"
          aria-label="Close banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

