import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Clock, 
  CreditCard, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-900 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Proposition Highlights Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-14 border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-white">
              <Truck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Global Express</h4>
              <p className="text-xs text-zinc-400">Free delivery over $100</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-white">
              <RotateCcw className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">30-Day Returns</h4>
              <p className="text-xs text-zinc-400">Risk-free home trial</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-white">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">2-Year Warranty</h4>
              <p className="text-xs text-zinc-400">Comprehensive hardware cover</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-white">
              <Clock className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">24/7 Concierge</h4>
              <p className="text-xs text-zinc-400">Dedicated expert support</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white text-zinc-950 flex items-center justify-center font-black text-xs">
                L
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight uppercase">
                Lumen<span className="text-zinc-500 font-light">&Co</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Designing precision acoustic gear, titanium wearables, and ergonomic workspace tools for the modern minimalist. Every product is engineered to elevate your daily ritual.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500 pt-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Certified 100% Carbon Neutral Shipping</span>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Shop Catalog</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/products?category=Audio" className="hover:text-white transition-colors">
                  Audio & Acoustics
                </Link>
              </li>
              <li>
                <Link href="/products?category=Wearables" className="hover:text-white transition-colors">
                  Smart Wearables
                </Link>
              </li>
              <li>
                <Link href="/products?category=Desk Setup" className="hover:text-white transition-colors">
                  Desk Setup & Keyboards
                </Link>
              </li>
              <li>
                <Link href="/products?category=Electronics" className="hover:text-white transition-colors">
                  Thunderbolt Hubs & Power
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Client Care</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors">
                  Saved Wishlist
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-white transition-colors">
                  Instant Checkout
                </Link>
              </li>
              <li>
                <span className="text-zinc-500 cursor-not-allowed">Track Order (Demo)</span>
              </li>
              <li>
                <span className="text-zinc-500 cursor-not-allowed">Warranty Support</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Private Circle</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscribe to unlock secret drops, audio engineering whitepapers, and 10% off your first purchase.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 w-full focus:outline-none focus:border-zinc-700"
              />
              <button
                type="button"
                className="bg-white text-zinc-950 p-2 rounded-lg hover:bg-zinc-200 transition-colors shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[11px] text-zinc-500">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Lumen & Co. Technologies Inc. CodeAlpha Internship Project. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-zinc-400">
            <span className="flex items-center gap-1 font-medium">
              <CreditCard className="w-4 h-4" /> Secure 256-Bit SSL Encryption
            </span>
            <span>•</span>
            <span className="font-semibold text-zinc-300">VISA / MC / AMEX / PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

