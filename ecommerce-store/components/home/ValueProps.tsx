import React from "react";
import { Truck, RotateCcw, ShieldCheck, HeadphonesIcon } from "lucide-react";

const VALUE_PROPS = [
  {
    icon: Truck,
    title: "Free Express Shipping",
    description: "Complimentary DHL Express on all orders over $100. Dispatched in 100% recyclable packaging.",
  },
  {
    icon: RotateCcw,
    title: "30-Day Risk-Free Trial",
    description: "Experience our acoustics in your own room. If not completely thrilled, return for a prompt refund.",
  },
  {
    icon: ShieldCheck,
    title: "2-Year Hardware Warranty",
    description: "Every product is backed by our direct manufacturer warranty with advance hardware replacement.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Audio Concierge",
    description: "Real acoustic engineers available 24/7 via live chat to help configure your desk setup or EQ.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 border-t border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPS.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  {prop.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

