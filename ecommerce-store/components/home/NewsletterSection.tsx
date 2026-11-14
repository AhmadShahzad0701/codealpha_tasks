"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { useToast } from "@/context/ToastContext";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      showToast("Please provide a valid email address.", "error");
      return;
    }

    setIsSubscribed(true);
    showToast("You're subscribed! Use coupon code 'WELCOME10' for 10% off.", "success", "Welcome to the Inner Circle");
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-900 dark:text-zinc-100 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Exclusive Access</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            Join the Lumen Design Guild
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Be the first to learn about prototype drops, limited titanium batch runs, and receive a welcome gift of <strong>10% off your first purchase</strong>.
          </p>

          {isSubscribed ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 max-w-md mx-auto space-y-2 animate-in zoom-in-95">
              <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>You are officially subscribed!</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Your coupon code is: <strong className="font-mono text-zinc-900 dark:text-white bg-white dark:bg-zinc-800 px-2 py-0.5 rounded border border-emerald-500/40">WELCOME10</strong>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl py-3 pl-10 pr-4 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all shadow-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-xs sm:text-sm font-bold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-md flex items-center justify-center gap-2 shrink-0 group"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-zinc-400">
            Strict no-spam policy. Unsubscribe in one click anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

