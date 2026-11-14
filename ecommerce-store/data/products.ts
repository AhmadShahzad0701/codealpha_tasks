import { Product, ProductCategory, PromoCode } from "@/types";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "All",
  "Audio",
  "Wearables",
  "Electronics",
  "Desk Setup",
  "Accessories",
  "Lifestyle"
];

export const VALID_PROMO_CODES: PromoCode[] = [
  {
    code: "LUMEN20",
    discountPercent: 20,
    description: "20% off your entire order",
    minSubtotal: 50,
  },
  {
    code: "SPRING40",
    discountPercent: 40,
    description: "Spring Flash Sale - 40% off",
    minSubtotal: 100,
  },
  {
    code: "WELCOME10",
    discountPercent: 10,
    description: "10% off for first-time shoppers",
    minSubtotal: 0,
  },
  {
    code: "CODEALPHA",
    discountPercent: 25,
    description: "CodeAlpha VIP 25% discount",
    minSubtotal: 0,
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "aura-anc-headphones",
    name: "Aura Studio Pro Wireless ANC Headphones",
    slug: "aura-studio-pro-headphones",
    tagline: "Ultra-low distortion acoustic chamber with 42dB hybrid noise cancellation.",
    description: "Crafted for audiophiles and remote executives alike. Aura Studio Pro combines custom 40mm titanium drivers with intelligent adaptive hybrid ANC that samples ambient noise 50,000 times per second. Enjoy up to 45 hours of playtime on a single USB-C charge with ultra-soft breathable memory foam earcups.",
    price: 299.99,
    originalPrice: 349.99,
    category: "Audio",
    rating: 4.9,
    reviewCount: 238,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Matte Midnight", hex: "#111827", tailwindClass: "bg-gray-900" },
      { name: "Silver Lunar", hex: "#e5e7eb", tailwindClass: "bg-gray-200" },
      { name: "Warm Champagne", hex: "#d4af37", tailwindClass: "bg-amber-600" }
    ],
    inStock: true,
    stockCount: 18,
    isFeatured: true,
    isBestSeller: true,
    discountPercentage: 14,
    features: [
      "Adaptive Hybrid Active Noise Cancellation up to 42dB",
      "40mm High-Resolution Titanium Composite Drivers",
      "45-hour continuous playback with Fast Charge (10 min = 5 hours)",
      "Multipoint Bluetooth 5.3 connection across 2 devices seamlessly",
      "Custom EQ presets via companion capacitive touch gesture controls"
    ],
    specs: {
      "Battery Life": "Up to 45 hours (ANC off), 35 hours (ANC on)",
      "Charging Port": "USB-C Fast Charging",
      "Weight": "248 grams",
      "Bluetooth": "Version 5.3 with aptX HD & AAC",
      "Warranty": "2-Year Manufacturer Warranty"
    },
    reviews: [
      {
        id: "rev-1",
        author: "Marcus Vance",
        rating: 5,
        date: "2 days ago",
        comment: "The soundstage is breathtaking. ANC instantly silences noisy coffee shops and flights without any pressure sensation.",
        verified: true
      },
      {
        id: "rev-2",
        author: "Elena Rostova",
        rating: 5,
        date: "1 week ago",
        comment: "Exquisite industrial design. Memory foam ear cushions don't hurt even during 8-hour coding sessions.",
        verified: true
      }
    ]
  },
  {
    id: "zenith-smartwatch-titanium",
    name: "Zenith Chrono Titanium Smartwatch",
    slug: "zenith-chrono-titanium-smartwatch",
    tagline: "Aerospace-grade titanium chassis with sapphire glass and 14-day battery.",
    description: "Designed for modern achievers, Zenith Chrono pairs timeless horological elegance with continuous biometric monitoring. Featuring a crystal-clear 1.43-inch AMOLED display beneath scratchproof synthetic sapphire crystal, ECG sensor, SpO2 tracker, dual-frequency GPS, and 50m water resistance.",
    price: 389.99,
    originalPrice: 429.99,
    category: "Wearables",
    rating: 4.8,
    reviewCount: 164,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Titanium Raw", hex: "#71717a", tailwindClass: "bg-zinc-500" },
      { name: "Space Black", hex: "#18181b", tailwindClass: "bg-zinc-900" },
      { name: "Rose Gold Accent", hex: "#b76e79", tailwindClass: "bg-rose-400" }
    ],
    inStock: true,
    stockCount: 12,
    isFeatured: true,
    isNew: true,
    discountPercentage: 9,
    features: [
      "Grade 5 aerospace titanium case with diamond-turned beveled edges",
      "Continuous optical PPG heart rate, ECG analysis & sleep staging",
      "Dual-band L1/L5 GNSS positioning for precise trail tracking",
      "14-day standard battery life or 38 hours continuous active GPS",
      "5 ATM waterproof rating suitable for open water swimming"
    ],
    specs: {
      "Display": "1.43-inch Always-On AMOLED (466x466, 1000 nits)",
      "Case Size": "44mm diameter, 10.9mm thickness",
      "Battery": "480mAh Li-Po, magnetic inductive wireless charging",
      "Connectivity": "Bluetooth 5.2, Wi-Fi 2.4GHz, NFC for payments",
      "Compatibility": "iOS 14+ and Android 9.0+"
    },
    reviews: [
      {
        id: "rev-3",
        author: "Devon Miller",
        rating: 5,
        date: "3 days ago",
        comment: "Finally a smartwatch that looks like a high-end luxury mechanical timepiece rather than a plastic toy.",
        verified: true
      }
    ]
  },
  {
    id: "horizon-keyboard-ergonomic",
    name: "Horizon Mechanical Ergonomic Split Keyboard",
    slug: "horizon-mechanical-ergonomic-keyboard",
    tagline: "Hot-swappable linear switches with CNC aluminum frame and PBT keycaps.",
    description: "Engineered to eliminate wrist strain and maximize typing velocity. Horizon features custom lubricated silent linear switches, gasket-mounted dampening pads, customizable per-key RGB backlighting, rotary media encoder, and tri-mode connectivity (2.4GHz dongle, Bluetooth, and braided USB-C).",
    price: 169.99,
    originalPrice: 199.99,
    category: "Desk Setup",
    rating: 4.9,
    reviewCount: 312,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Stealth Graphite", hex: "#27272a", tailwindClass: "bg-zinc-800" },
      { name: "Frost White", hex: "#f4f4f5", tailwindClass: "bg-zinc-100" },
      { name: "Forest Sage", hex: "#4d6b53", tailwindClass: "bg-emerald-800" }
    ],
    inStock: true,
    stockCount: 24,
    isFeatured: true,
    isBestSeller: true,
    discountPercentage: 15,
    features: [
      "Hot-swappable 5-pin PCB compatible with Cherry, Gateron, and Kailh switches",
      "Double-shot dye-sub PBT keycaps with crisp OEM profile",
      "Sound-dampening IXPE switch foam and PORON gasket structure",
      "CNC anodized aluminum upper chassis with magnetic wrist rest",
      "Programmable QMK/VIA key remapping and macros"
    ],
    specs: {
      "Layout": "75% Compact (84 keys + programmable encoder knob)",
      "Battery": "4000mAh rechargeable lithium battery (up to 200h without RGB)",
      "Weight": "1120 grams (stabilized heavy base)",
      "Dimensions": "322 x 138 x 34 mm",
      "Key Switches": "Factory-lubed Horizon Silent Linear 45g"
    },
    reviews: [
      {
        id: "rev-4",
        author: "Sarah Jenkins",
        rating: 5,
        date: "5 days ago",
        comment: "Typing on this is pure therapy. The deep thocky acoustic sound profile makes every keystroke rewarding.",
        verified: true
      }
    ]
  },
  {
    id: "omni-dock-pro",
    name: "OmniDock Pro 12-in-1 Thunderbolt 4 Hub",
    slug: "omni-dock-pro-thunderbolt-hub",
    tagline: "Single-cable workstation power with dual 4K 120Hz display outputs.",
    description: "Transform your laptop into an uncompromising desktop workstation. OmniDock delivers 100W Power Delivery, dual HDMI 2.1 & DisplayPort 1.4, 2.5Gbps Ethernet, 4x USB-A 3.2 Gen 2 ports, UHS-II SD/microSD card slots, and front-facing high-fidelity audio jack.",
    price: 199.99,
    originalPrice: 229.99,
    category: "Electronics",
    rating: 4.7,
    reviewCount: 98,
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Space Grey", hex: "#4b5563", tailwindClass: "bg-gray-600" },
      { name: "Silver", hex: "#e2e8f0", tailwindClass: "bg-slate-200" }
    ],
    inStock: true,
    stockCount: 15,
    isFeatured: false,
    discountPercentage: 13,
    features: [
      "Thunderbolt 4 / USB4 certified with 40Gbps bidirectional transfer",
      "100W dynamic intelligent host charging for MacBook Pro and Dell XPS",
      "Supports dual 4K @ 120Hz or single 8K @ 60Hz external displays",
      "Full aluminum finned heat dissipation enclosure",
      "Built-in SD 4.0 card reader up to 312 MB/s"
    ],
    specs: {
      "Ports": "12 total: 2x TB4, 2x HDMI 2.1, 1x DP 1.4, 4x USB-A, 1x 2.5GbE, SD/TF, 3.5mm AUX",
      "Power Supply": "Included 150W GaN AC adapter",
      "Dimensions": "198 x 72 x 22 mm",
      "OS Compatibility": "macOS 11+, Windows 10/11, ChromeOS"
    },
    reviews: [
      {
        id: "rev-5",
        author: "Alex Cheng",
        rating: 5,
        date: "2 weeks ago",
        comment: "Replaced 4 different dongles with one sleek hub. Stays cool even while driving two 4K displays and charging my laptop.",
        verified: true
      }
    ]
  },
  {
    id: "lumos-screenbar-light",
    name: "Lumos ScreenBar Pro Monitor Light",
    slug: "lumos-screenbar-pro-monitor-light",
    tagline: "Asymmetric optical design that illuminates your workspace with zero screen glare.",
    description: "Protect your eyesight and enhance desk aesthetics. Lumos casts a calibrated rectangular pool of warm to daylight white light over your keyboard and document area without a single ray hitting your monitor screen. Includes a wireless 2.4GHz desktop dial for stepless brightness and color temperature tuning.",
    price: 89.99,
    originalPrice: 109.99,
    category: "Desk Setup",
    rating: 4.8,
    reviewCount: 205,
    images: [
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Matte Black", hex: "#18181b", tailwindClass: "bg-zinc-900" },
      { name: "Silver Metal", hex: "#d1d5db", tailwindClass: "bg-gray-300" }
    ],
    inStock: true,
    stockCount: 30,
    isFeatured: true,
    isBestSeller: true,
    discountPercentage: 18,
    features: [
      "Patented asymmetric optical reflector prevents screen reflections",
      "Wireless desktop dial controller with precision magnetic bearing",
      "Auto-dimming ambient light sensor adjusts brightness in real-time",
      "CRI Ra ≥ 97 ultra-high color rendering for true-to-life colors",
      "Fits flat or curved monitors from 10mm to 45mm thickness"
    ],
    specs: {
      "Color Temp Range": "2700K (Warm Sunset) to 6500K (Crisp Daylight)",
      "Illuminance": "Up to 1000 Lux @ 45cm",
      "Power Input": "5V 2A USB Type-C (5W - 10W)",
      "Length": "450 mm bar width"
    },
    reviews: [
      {
        id: "rev-6",
        author: "Hannah Cruz",
        rating: 5,
        date: "4 days ago",
        comment: "A night-and-day difference for late night work sessions. Zero eye strain and my desk looks like a design studio.",
        verified: true
      }
    ]
  },
  {
    id: "pulse-pods-pro",
    name: "Pulse Pods Pro True Wireless Earbuds",
    slug: "pulse-pods-pro-earbuds",
    tagline: "Spatial audio with dynamic head tracking and custom vent system.",
    description: "Compact in size, monumental in sound. Pulse Pods Pro deliver studio-grade acoustics in an ultra-ergonomic stemless housing. Featuring custom spatial audio algorithms, dual beamforming microphones with wind-cancellation mesh, and IPX7 sweat & rain resistance.",
    price: 149.99,
    originalPrice: 179.99,
    category: "Audio",
    rating: 4.7,
    reviewCount: 189,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Obsidian Black", hex: "#0f172a", tailwindClass: "bg-slate-900" },
      { name: "Porcelain White", hex: "#ffffff", tailwindClass: "bg-white" },
      { name: "Sage Mist", hex: "#94a3b8", tailwindClass: "bg-slate-400" }
    ],
    inStock: true,
    stockCount: 35,
    isFeatured: false,
    isBestSeller: false,
    isNew: true,
    discountPercentage: 17,
    features: [
      "32dB Active Noise Cancellation with Transparency Mode",
      "Custom high-excursion driver with low-distortion amplifier",
      "8 hours battery on single earbud charge, 32 hours with wireless case",
      "Qi wireless charging & USB-C fast charging support",
      "IPX7 waterproof rating for heavy workouts and outdoor runs"
    ],
    specs: {
      "Bluetooth": "Version 5.3 with LE Audio",
      "Microphones": "6x MEMS mics with bone conduction voice sensor",
      "Weight": "4.2g per earbud, 41g case",
      "Codec Support": "AAC, SBC, LC3"
    },
    reviews: [
      {
        id: "rev-7",
        author: "Lucas Bennett",
        rating: 5,
        date: "6 days ago",
        comment: "Fit securely in my ears during intense 10K runs without ever slipping. Transparency mode sounds completely natural.",
        verified: true
      }
    ]
  },
  {
    id: "terra-smart-ring",
    name: "Terra Titanium Health & Sleep Smart Ring",
    slug: "terra-titanium-smart-ring",
    tagline: "Discreet finger biometric sensor tracking sleep stages, recovery, and HRV.",
    description: "The ultimate health wearable that never interrupts your focus. Crafted from medical-grade polished titanium, Terra tracks your Heart Rate Variability (HRV), skin temperature deviations, blood oxygen, and deep/REM sleep cycles with lab-grade precision. No screen, no notifications—just pure actionable wellness insights.",
    price: 249.99,
    originalPrice: 289.99,
    category: "Wearables",
    rating: 4.8,
    reviewCount: 142,
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Stealth Titanium", hex: "#3f3f46", tailwindClass: "bg-zinc-700" },
      { name: "Mirror Gold", hex: "#eab308", tailwindClass: "bg-yellow-500" },
      { name: "Brushed Silver", hex: "#cbd5e1", tailwindClass: "bg-slate-300" }
    ],
    inStock: true,
    stockCount: 8,
    isFeatured: true,
    isNew: true,
    discountPercentage: 14,
    features: [
      "Medical-grade optical infrared PPG sensor array",
      "7-day battery life on a tiny magnetic puck charger",
      "Waterproof to 100 meters (safe for scuba diving and saunas)",
      "Continuous body temperature and readiness score calculation",
      "Seamless integration with Apple Health and Google Fit"
    ],
    specs: {
      "Material": "Grade 5 Titanium with non-allergenic resin inner lining",
      "Weight": "4 to 6 grams depending on ring size",
      "Battery Life": "Up to 7 days continuous tracking",
      "Water Resistance": "100 meters (10 ATM)"
    },
    reviews: [
      {
        id: "rev-8",
        author: "Sophia Sterling",
        rating: 5,
        date: "1 week ago",
        comment: "I used to hate sleeping with bulky watches. This ring is featherweight and the sleep recovery data is scarily accurate.",
        verified: true
      }
    ]
  },
  {
    id: "apex-commuter-backpack",
    name: "Apex Weatherproof Commuter Backpack 22L",
    slug: "apex-weatherproof-commuter-backpack",
    tagline: "Water-repellent Cordura shell with magnetic Fidlock buckle and laptop cocoon.",
    description: "Engineered for urban nomads and modern professionals. The Apex backpack features waterproof 840D ballistic nylon fabric, YKK AquaGuard zippers, a suspended 16-inch laptop pocket that never touches the floor, hidden passport pocket, and expandable side bottle sleeves.",
    price: 139.99,
    originalPrice: 169.99,
    category: "Lifestyle",
    rating: 4.9,
    reviewCount: 278,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Matte Charcoal", hex: "#1f2937", tailwindClass: "bg-gray-800" },
      { name: "Olive Drab", hex: "#3f4a3c", tailwindClass: "bg-stone-700" },
      { name: "Deep Navy", hex: "#1e3a8a", tailwindClass: "bg-blue-900" }
    ],
    inStock: true,
    stockCount: 19,
    isFeatured: true,
    isBestSeller: true,
    discountPercentage: 18,
    features: [
      "Suspended false-bottom compartment fits up to 16\" MacBook Pro",
      "Fidlock German magnetic V-buckles for swift one-hand access",
      "Ergonomic breathable EVA molded back panel with luggage passthrough",
      "Hidden RFID-blocking passport and cash pocket against your back",
      "Waterproof 840D Ballistic Cordura nylon with PU interior coating"
    ],
    specs: {
      "Capacity": "22 Liters",
      "Weight": "1.1 kg (2.4 lbs)",
      "Dimensions": "48 x 30 x 16 cm",
      "Laptop Sleeve": "Fits up to 16-inch laptops (38 x 26 cm)"
    },
    reviews: [
      {
        id: "rev-9",
        author: "Julian Thorne",
        rating: 5,
        date: "3 days ago",
        comment: "Survives heavy rain in Seattle without a drop getting inside. The internal organization pockets are thoughtfully placed.",
        verified: true
      }
    ]
  },
  {
    id: "magcharge-trio-stand",
    name: "MagFlow 3-in-1 Fast Wireless Charging Tree",
    slug: "magflow-3-in-1-wireless-charging-stand",
    tagline: "Solid zinc alloy tree charging phone, smartwatch, and earbuds simultaneously.",
    description: "Declutter your nightstand and desk with one elegant pedestal. MagFlow delivers 15W fast magnetic charging for your smartphone in portrait or landscape mode, a fast-charging puck for your smartwatch, and a recessed 5W inductive charging pad for earbuds.",
    price: 79.99,
    originalPrice: 99.99,
    category: "Accessories",
    rating: 4.7,
    reviewCount: 165,
    images: [
      "https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Brushed Graphite", hex: "#374151", tailwindClass: "bg-gray-700" },
      { name: "Alabaster White", hex: "#f8fafc", tailwindClass: "bg-slate-50" }
    ],
    inStock: true,
    stockCount: 22,
    isFeatured: false,
    discountPercentage: 20,
    features: [
      "Official Qi2 & MagSafe compatible 15W peak wireless speed",
      "Weighted anti-slip base allows one-hand phone detachment",
      "Adjustable 40° tilt ball head for ideal FaceTime & video viewing angle",
      "Discreet breathing LED indicator automatically dims in low light",
      "Includes 36W GaN power adapter and 1.5m braided USB-C cable"
    ],
    specs: {
      "Output": "Phone: 15W max, Watch: 5W, Earbuds: 5W",
      "Material": "Die-cast zinc alloy + soft-touch silicone surface",
      "Dimensions": "155 x 100 x 140 mm",
      "Safety": "FOD, over-voltage, temperature protection"
    },
    reviews: [
      {
        id: "rev-10",
        author: "Rachel Adams",
        rating: 5,
        date: "2 weeks ago",
        comment: "Solid weight so it doesn't lift up when pulling your phone off the magnet. Looks like an art piece on my nightstand.",
        verified: true
      }
    ]
  },
  {
    id: "soundcore-mini-speaker",
    name: "Ember 360° Waterproof Outdoor Bluetooth Speaker",
    slug: "ember-360-waterproof-speaker",
    tagline: "Punchy omnidirectional bass with warm ambient LED glow and IP67 rating.",
    description: "Take immersive audio wherever adventure calls. Ember pumps 24W of crystal-clear sound through dual passive radiators and neodymium drivers. Featuring an integrated warm ambient lighting mode that mimics a gentle campfire glow, 20 hours battery life, and dust & water immersion protection.",
    price: 69.99,
    originalPrice: 89.99,
    category: "Audio",
    rating: 4.8,
    reviewCount: 114,
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Slate Moss", hex: "#4b5320", tailwindClass: "bg-emerald-900" },
      { name: "Carbon Black", hex: "#1c1917", tailwindClass: "bg-stone-900" },
      { name: "Terra Cotta", hex: "#c2410c", tailwindClass: "bg-orange-700" }
    ],
    inStock: true,
    stockCount: 26,
    isFeatured: false,
    discountPercentage: 22,
    features: [
      "True 360-degree sound projection with dual passive bass radiators",
      "IP67 dustproof and floats on water if dropped in pool or lake",
      "20-hour playback duration with 5200mAh internal powerbank feature",
      "TWS party link: pair 2 Ember speakers for stereo separation",
      "Durable woven fabric mesh with integrated paracord carry lanyard"
    ],
    specs: {
      "Output Power": "24 Watts RMS",
      "Frequency Response": "60Hz - 20kHz",
      "Battery": "5200mAh (charges in 3 hours via USB-C)",
      "Weight": "580g (1.28 lbs)"
    },
    reviews: [
      {
        id: "rev-11",
        author: "Tyler Campbell",
        rating: 5,
        date: "5 days ago",
        comment: "Brought it camping last weekend. The warm lantern light combined with deep bass created the perfect vibe around the campfire.",
        verified: true
      }
    ]
  },
  {
    id: "nordik-leather-desk-mat",
    name: "Nordik Full-Grain Vegetable Tanned Leather Desk Mat",
    slug: "nordik-leather-desk-mat",
    tagline: "Supple genuine leather that develops a rich, distinctive vintage patina.",
    description: "Transform your workspace into an inviting sanctuary of focus. Handcrafted from 2.2mm thick premium full-grain Italian leather, this desk pad offers effortless mouse glide, water-resistant vegetable wax finish, and a soft natural wool felt base that guards against desk scratches.",
    price: 54.99,
    originalPrice: 69.99,
    category: "Desk Setup",
    rating: 4.9,
    reviewCount: 153,
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Cognac Tan", hex: "#9a3412", tailwindClass: "bg-amber-800" },
      { name: "Espresso Brown", hex: "#3e2723", tailwindClass: "bg-stone-800" },
      { name: "Midnight Onyx", hex: "#1e293b", tailwindClass: "bg-slate-800" }
    ],
    inStock: true,
    stockCount: 40,
    isFeatured: false,
    discountPercentage: 21,
    features: [
      "100% full-grain Tuscan vegetable-tanned leather surface",
      "Soft natural Merino wool felt backing prevents slippage",
      "Precision burnished edges with reinforced waxed edge stitching",
      "Smooth micro-texture provides flawless optical mouse tracking",
      "Naturally repels coffee spills and wipes clean with a damp microfiber"
    ],
    specs: {
      "Dimensions": "900 x 400 mm (35.4 x 15.7 inches)",
      "Thickness": "3.5mm total (leather + felt cushion)",
      "Origin": "Florence, Italy handcrafted"
    },
    reviews: [
      {
        id: "rev-12",
        author: "Klaus Wagner",
        rating: 5,
        date: "1 week ago",
        comment: "The scent of genuine leather when unboxing was amazing. It lays completely flat right out of the packaging.",
        verified: true
      }
    ]
  },
  {
    id: "kanso-thermal-tumbler",
    name: "Kanso Insulated Matte Thermal Tumbler 750ml",
    slug: "kanso-matte-thermal-tumbler",
    tagline: "Double-wall vacuum 18/8 stainless steel with leakproof ceramic lining.",
    description: "Engineered so your coffee always tastes like coffee, not metal. Kanso features a food-grade ceramic interior coating bonded to pro-grade stainless steel. Keeps drinks steaming hot for 12 hours or ice-cold for 24 hours with a 360-degree sip lid and magnetic carry loop.",
    price: 38.99,
    originalPrice: 48.99,
    category: "Lifestyle",
    rating: 4.8,
    reviewCount: 220,
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Matte Sage", hex: "#84a98c", tailwindClass: "bg-emerald-600" },
      { name: "Sandstone Beige", hex: "#d6ccc2", tailwindClass: "bg-stone-300" },
      { name: "Charcoal Matte", hex: "#262626", tailwindClass: "bg-neutral-800" }
    ],
    inStock: true,
    stockCount: 45,
    isFeatured: false,
    discountPercentage: 20,
    features: [
      "TrueTaste interior ceramic coating preserves pure flavor with zero metallic taste",
      "Vacuum insulated 18/8 culinary-grade stainless steel body",
      "100% leakproof lockable splash guard lid with 360-degree drinking rim",
      "Cupholder friendly tapered silhouette with condensation-free matte powder coat",
      "BPA/BPS-free and top-rack dishwasher safe"
    ],
    specs: {
      "Capacity": "750 ml (25.4 oz)",
      "Hot Retention": "12 hours (above 60°C)",
      "Cold Retention": "24 hours (with ice)",
      "Weight": "385 grams"
    },
    reviews: [
      {
        id: "rev-13",
        author: "Olivia Patel",
        rating: 5,
        date: "3 weeks ago",
        comment: "The ceramic lining really makes a huge difference. Espresso tastes as vibrant as in a ceramic cup at a cafe.",
        verified: true
      }
    ]
  },
  {
    id: "aero-sunglasses-polarized",
    name: "Aero Polarized Minimalist Titanium Sunglasses",
    slug: "aero-polarized-titanium-sunglasses",
    tagline: "Japanese beta-titanium frames with 9-layer anti-reflective polarization.",
    description: "Featherweight luxury that redefines daily comfort. Aero frames weigh a mere 14 grams, bent from flexible Japanese beta-titanium that contours to your face without pinching. Equipped with Category 3 CR-39 polarized lenses with hydro-oleophobic smudge coatings.",
    price: 119.99,
    originalPrice: 149.99,
    category: "Accessories",
    rating: 4.8,
    reviewCount: 94,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Gunmetal Smoke", hex: "#374151", tailwindClass: "bg-gray-700" },
      { name: "Brushed Champagne", hex: "#d97706", tailwindClass: "bg-amber-600" },
      { name: "Matte Black", hex: "#171717", tailwindClass: "bg-neutral-900" }
    ],
    inStock: true,
    stockCount: 16,
    isFeatured: false,
    discountPercentage: 20,
    features: [
      "Japanese flexible beta-titanium memory alloy frame (14g weight)",
      "9-layer Triacetate Cellulose (TAC) polarized lenses with 100% UV400 blocking",
      "Dual-sided anti-reflective coating cuts roadway and water glare",
      "Self-adjusting medical silicone nose pads prevent marks on the bridge",
      "Includes hard origami folding leather case and Japanese microfiber pouch"
    ],
    specs: {
      "Lens Width": "52 mm",
      "Bridge Width": "20 mm",
      "Temple Length": "145 mm",
      "Lens Category": "Category 3 (8% - 18% light transmission)"
    },
    reviews: [
      {
        id: "rev-14",
        author: "Daniel Zhao",
        rating: 5,
        date: "1 month ago",
        comment: "Literally forgot I was wearing them on a 4-hour drive. Crystal clear vision with zero reflections.",
        verified: true
      }
    ]
  },
  {
    id: "glide-ergo-mouse",
    name: "Glide Master Ergonomic Wireless Mouse",
    slug: "glide-master-ergonomic-mouse",
    tagline: "Natural 57-degree hand angle with silent magnetic scroll wheel.",
    description: "Alleviate carpal pressure and work in effortless bliss. The Glide Master positions your wrist in a natural handshake angle to reduce muscular strain by up to 28%. Features an ultra-accurate 8,000 DPI Darkfield sensor that tracks even on clear glass tables.",
    price: 99.99,
    originalPrice: 119.99,
    category: "Desk Setup",
    rating: 4.9,
    reviewCount: 187,
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Graphite Dark", hex: "#1f2937", tailwindClass: "bg-gray-800" },
      { name: "Off-White Pale", hex: "#f1f5f9", tailwindClass: "bg-slate-100" }
    ],
    inStock: true,
    stockCount: 20,
    isFeatured: true,
    discountPercentage: 17,
    features: [
      "Ergonomic 57° vertical posture angle tested by leading ergonomists",
      "MagSpeed electromagnetic scroll wheel scrolls 1,000 lines in 1 second",
      "8000 DPI sensor works flawlessly on glass, marble, and wood",
      "Quiet Click switches deliver tactile feedback with 90% less acoustic click noise",
      "USB-C fast charging: 1 minute quick charge yields 3 full hours of use"
    ],
    specs: {
      "Battery": "Rechargeable 500mAh Li-Po (up to 70 days per charge)",
      "Connectivity": "Logi Bolt USB receiver & Bluetooth Low Energy (3 devices)",
      "Buttons": "6 customizable buttons with gesture thumb paddle",
      "Weight": "141 grams"
    },
    reviews: [
      {
        id: "rev-15",
        author: "Emma Watson",
        rating: 5,
        date: "4 days ago",
        comment: "My wrist pain completely vanished within one week of using this. The electromagnetic scroll wheel is magical.",
        verified: true
      }
    ]
  },
  {
    id: "clarity-4k-webcam",
    name: "Clarity Studio 4K Ultra HD AI Webcam",
    slug: "clarity-studio-4k-webcam",
    tagline: "Sony STARVIS 2 sensor with hardware privacy shutter and AI autoframing.",
    description: "Look your absolute best on every Zoom and conference call. Clarity Studio incorporates a large 1/2.8-inch Sony STARVIS 2 sensor that excels in dimly lit home offices. Features AI facial tracking that keeps you centered, dual studio microphones with background noise suppression, and a physical magnetic lens cover.",
    price: 159.99,
    originalPrice: 189.99,
    category: "Electronics",
    rating: 4.7,
    reviewCount: 110,
    images: [
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Space Grey", hex: "#374151", tailwindClass: "bg-gray-700" },
      { name: "Silver Frosted", hex: "#e2e8f0", tailwindClass: "bg-slate-200" }
    ],
    inStock: true,
    stockCount: 14,
    isFeatured: false,
    discountPercentage: 16,
    features: [
      "Sony STARVIS 2 CMOS sensor delivering true 4K @ 30FPS or 1080p @ 60FPS",
      "High Dynamic Range (HDR) corrects backlit windows without blowing out highlights",
      "Intelligent AI autoframing automatically zooms and pans smoothly as you move",
      "Physical magnetic swivel privacy shutter for complete peace of mind",
      "Omnidirectional stereo microphones with acoustic echo cancellation"
    ],
    specs: {
      "Resolution": "4K Ultra HD (3840x2160), 1080p Full HD",
      "Field of View": "Adjustable 65°, 78°, or 90° FOV",
      "Focus Type": "Phase Detection Autofocus (PDAF)",
      "Mount": "Universal clip fits all monitors or 1/4\" tripod thread"
    },
    reviews: [
      {
        id: "rev-16",
        author: "Christopher Nolan",
        rating: 5,
        date: "2 weeks ago",
        comment: "The low-light performance is astonishing. Colleagues instantly commented on the studio-quality image clarity.",
        verified: true
      }
    ]
  },
  {
    id: "ridge-rfid-cardholder",
    name: "Ridge Minimalist RFID Carbon Fiber Cardholder",
    slug: "ridge-rfid-carbon-cardholder",
    tagline: "Military-grade 3k weave carbon fiber with cash strap and RFID blocking.",
    description: "Ditch the bulky leather billfold forever. Constructed from genuine 3K carbon fiber and anodized aluminum inner plates, this cardholder securely holds 1 to 12 cards without stretching out. Integrated RFID protection shields your chips from unauthorized wireless skimming.",
    price: 64.99,
    originalPrice: 79.99,
    category: "Accessories",
    rating: 4.8,
    reviewCount: 310,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80"
    ],
    colors: [
      { name: "Forged Carbon", hex: "#1f2937", tailwindClass: "bg-gray-800" },
      { name: "Gunmetal Grey", hex: "#4b5563", tailwindClass: "bg-gray-600" },
      { name: "Burnt Titanium", hex: "#4338ca", tailwindClass: "bg-indigo-700" }
    ],
    inStock: true,
    stockCount: 50,
    isFeatured: false,
    discountPercentage: 19,
    features: [
      "Holds 1-12 credit cards and IDs without deforming over time",
      "Dual RFID-blocking 6061-T6 aluminum inner plates",
      "Interchangeable elastic cash strap for bills and business cards",
      "Precision CNC beveled finger notch for instantaneous card fanning",
      "Ultra-slim 86 x 54 x 6 mm profile fits effortlessly in front pocket"
    ],
    specs: {
      "Weight": "45 grams (1.6 oz)",
      "Materials": "3K Carbon Fiber, 6061-T6 Aerospace Aluminum, Grade T5 Torx Screws",
      "Dimensions": "86 x 54 x 6 mm"
    },
    reviews: [
      {
        id: "rev-17",
        author: "Anthony Rossi",
        rating: 5,
        date: "5 days ago",
        comment: "Can never go back to a traditional wallet. Fits seamlessly into my front pocket with zero bulge.",
        verified: true
      }
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id || p.slug === id);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS
    .filter((p) => p.id !== product.id && (p.category === product.category || p.category === "Accessories"))
    .slice(0, limit);
}
