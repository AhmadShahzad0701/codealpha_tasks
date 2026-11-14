import React from "react";
import { Star, CheckCircle2, Quote } from "lucide-react";

interface Testimonial {
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  product: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    author: "Julian Thorne",
    role: "Senior Staff Engineer",
    company: "Stripe",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "The Horizon Mechanical Keyboard and Aura ANC Headphones completely transformed my remote focus. Acoustic dampening is flawless, and build quality feels like a Swiss timepiece.",
    product: "Aura Studio Pro + Horizon Keyboard",
  },
  {
    author: "Dr. Evelyn Reed",
    role: "Industrial Design Lead",
    company: "Meta Reality Labs",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "As a hardware designer, I inspect tolerances obsessively. Lumen's anodized titanium chamfers and zero-glare ScreenBar optical reflectors set an industry standard.",
    product: "Lumos ScreenBar Pro",
  },
  {
    author: "Marcella Rossi",
    role: "Product Architect",
    company: "Spotify HQ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    quote: "The Terra Smart Ring is the first health wearable I actually keep on 24/7. Battery lasts a full week and the sleep metrics match my lab sleep study.",
    product: "Terra Titanium Smart Ring",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 border-t border-zinc-200/60 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Validated by Builders
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
            Trusted by creators, founders, and engineers
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Over 50,000 minimalists rely on our hardware every day. Here is what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-300 dark:text-zinc-700" />
                </div>

                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-zinc-200 dark:border-zinc-700"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white truncate">
                      {t.author}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </div>
                  <p className="text-[11px] text-zinc-500 truncate">
                    {t.role} • {t.company}
                  </p>
                  <p className="text-[10px] text-blue-600 dark:text-blue-400 font-medium truncate mt-0.5">
                    Verified Buyer • {t.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

