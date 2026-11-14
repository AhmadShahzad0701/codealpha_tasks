import React from "react";
import Link from "next/link";
import { Headphones, Watch, Keyboard, Cpu, Briefcase, Glasses, ArrowRight } from "lucide-react";

interface CategoryMeta {
  name: string;
  categoryParam: string;
  tagline: string;
  itemCount: number;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORIES: CategoryMeta[] = [
  {
    name: "Audio & Acoustics",
    categoryParam: "Audio",
    tagline: "Hybrid noise cancelling headphones & waterproof audio",
    itemCount: 3,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    icon: Headphones,
  },
  {
    name: "Smart Wearables",
    categoryParam: "Wearables",
    tagline: "Titanium biometric rings & sapphire AMOLED chronos",
    itemCount: 2,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    icon: Watch,
  },
  {
    name: "Desk Setup & Keyboards",
    categoryParam: "Desk Setup",
    tagline: "Mechanical gasket boards, screenbars & Tuscan leather pads",
    itemCount: 4,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    icon: Keyboard,
  },
  {
    name: "Electronics & Hubs",
    categoryParam: "Electronics",
    tagline: "Thunderbolt 4 workstations & 4K AI optical webcams",
    itemCount: 2,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    icon: Cpu,
  },
  {
    name: "Everyday Lifestyle",
    categoryParam: "Lifestyle",
    tagline: "Weatherproof 840D Cordura bags & ceramic-lined tumblers",
    itemCount: 2,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    icon: Briefcase,
  },
  {
    name: "Accessories & EDC",
    categoryParam: "Accessories",
    tagline: "Titanium Japanese sunglasses & 3-in-1 MagSafe charging trees",
    itemCount: 3,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    icon: Glasses,
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 border-t border-zinc-200/60 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Curated Collections
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mt-1">
              Shop by Category
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <span>Browse All Collections</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href={`/products?category=${encodeURIComponent(cat.categoryParam)}`}
                className="group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900 aspect-[16/10] flex flex-col justify-end p-6 shadow-sm hover:shadow-xl hover:border-zinc-400 dark:hover:border-zinc-700 transition-all duration-300"
              >
                {/* Background Image with Dark Vignette */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-65 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content Overlay */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs bg-white/20 backdrop-blur-md text-white font-semibold px-2.5 py-1 rounded-full border border-white/20">
                      {cat.itemCount} items
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors flex items-center gap-1.5">
                      {cat.name}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-1">
                      {cat.tagline}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

