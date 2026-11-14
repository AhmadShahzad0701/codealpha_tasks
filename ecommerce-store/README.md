# Lumen & Co. — Modern E-Commerce Store

[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A modern, high-performance E-Commerce Store designed for minimalist tech, acoustic hardware, titanium wearables, and desktop ergonomics. Developed as **Task 1 for the CodeAlpha Internship**.

---

## 🌟 Key Features

### 1. Modern E-Commerce Homepage
- **Editorial Hero Section**: High-impact typography, visual product showcase, key metrics (4.9★ rating from 1,200+ reviews), and primary/secondary CTAs.
- **Value Propositions**: Free Express Shipping threshold, 30-Day Risk-Free Trial, 2-Year Direct Warranty, and 24/7 Expert Audio Concierge.
- **Category Grid**: Interactive visual cards with product counters for Audio, Wearables, Desk Setup, Electronics, Lifestyle, and Accessories.
- **Flagship Showcase**: Filterable tabs with instant Quick View modal previews.
- **Flash Sale Banner**: Interactive live countdown timer with one-click coupon copying (`SPRING40`).
- **Social Proof**: Real customer reviews from verified engineers and designers.
- **Newsletter Subscription**: Interactive signup form with instant confirmation and discount gift (`WELCOME10`).

### 2. Comprehensive Hardware Catalog (`/products`)
- **Responsive Filtering**: Filter by category, price range slider ($0 – $500), minimum rating (4.8★, 4.5★, 4.0★), and in-stock only.
- **Multi-Sort Options**: Featured First, Price: Low to High, Price: High to Low, Highest Rated, and Newest Releases.
- **Real-Time Search**: Instant live query matching across product name, tagline, category, and specifications.
- **View Modes**: Toggle between responsive Grid View and detailed List View.
- **Mobile Filter Drawer**: Slide-over filter interface for mobile devices.
- **Active Filter Chips & Reset**: Visual state indicator with one-click filter clearing.

### 3. Static Site Generated Product Detail Pages (`/product/[id]`)
- **SSG Pre-rendering**: All 16 product pages statically generated at build time using `generateStaticParams()` for instant load times and SEO.
- **Multi-Image Interactive Gallery**: Thumbnail selector with high-res active zoom preview.
- **Color Swatches**: Finish selection with active visual checkmark indicators.
- **Stock Urgency & Urgency Badges**: Real-time stock counters ("Only X left in stock") and discount badges.
- **Direct Checkout**: "Buy Now" button adds the item and transitions immediately to checkout.
- **Tabbed Specifications**: Engineering Highlights, Technical Specifications table, and Verified Customer Reviews.
- **Related Recommendations**: Category-aware related product carousel.

### 4. Cart & Quantity Controls (`/cart` and Slide-over Drawer)
- **Slide-over Cart Drawer**: Accessible from anywhere in the app via the sticky navigation bar.
- **Free Shipping Progress Meter**: Dynamic calculation displaying remaining amount to reach free shipping ($100 threshold).
- **Inline Controls**: Increment, decrement, and removal controls with bounded stock limits.
- **Coupon Code Engine**: Real-time coupon validator supporting percentage discounts (`SPRING40`, `LUMEN20`, `CODEALPHA`, `WELCOME10`).
- **Transparent Order Cost Breakdown**: Dynamic calculations for subtotal, discount, shipping fee, and 8% estimated tax.
- **LocalStorage Persistence**: Cart state automatically syncs to browser storage (`lumen_cart`).

### 5. Wishlist System (`/wishlist` and Slide-over Drawer)
- **One-Click Wishlist Toggling**: Heart icon available on product cards, quick view dialog, and product pages.
- **Dedicated Wishlist View**: Full wishlist page with "Move to Cart" and "Move All to Cart" capabilities.
- **Navbar Badge**: Real-time counter of saved items.
- **LocalStorage Persistence**: Wishlist state preserved across browser sessions (`lumen_wishlist`).

### 6. Checkout Flow & Order Confirmation (`/checkout` & `/order-success`)
- **Comprehensive Form Validation**: Validates recipient name, email, phone, street address, city, state, and postal code.
- **Delivery Tier Selection**: Standard Tracked, Express Air Priority, and Next-Day Courier.
- **Payment Method Mocking**: Credit Card with formatted input, PayPal Express, and Apple/Google Pay.
- **Order Summary Sidebar**: Fixed checkout summary with promo validation and breakdown.
- **Confetti Celebration**: Celebratory canvas confetti burst on order completion.
- **Itemized Invoice Receipt**: Printable order summary with order number (`#LUM-XXXXXX`), estimated delivery date, and address summary.

### 7. Global Navigation & Aesthetics
- **Sticky Glassmorphic Header**: Backdrop blur with brand emblem, category links, live autocomplete search dropdown, theme toggle, and drawer triggers.
- **Dark & Light Theme**: Built-in dark/light mode toggle with smooth Tailwind transitions and system preference detection.
- **Toast Notifications**: Floating notification alerts for cart and wishlist interactions.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.4.6 (App Router)
- **Core**: React 19.3.0 & TypeScript 5
- **Styling**: Tailwind CSS 4.3.3
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **State & Storage**: React Context API + LocalStorage

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ (Node v24 recommended)
- npm or yarn

### Installation

1. Navigate to the `ecommerce-store` directory:
   ```bash
   cd codealpha_tasks/ecommerce-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Production Build

### Run ESLint
```bash
npm run lint
```

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

---

## 🎟️ Demo Promo Codes

Test the checkout and cart discount system with these codes:
- **`SPRING40`**: 40% OFF orders over $100
- **`LUMEN20`**: 20% OFF orders over $50
- **`CODEALPHA`**: 25% VIP Discount
- **`WELCOME10`**: 10% OFF any order

---

## 📁 Project Structure

```
ecommerce-store/
├── app/
│   ├── layout.tsx             # Root layout with providers, navbar, footer & drawers
│   ├── page.tsx               # Homepage with hero, categories, promo & testimonials
│   ├── products/
│   │   └── page.tsx           # Product catalog with filters, search, sorting & view modes
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx       # SSG pre-rendered product detail route
│   ├── cart/
│   │   └── page.tsx           # Full shopping cart page
│   ├── wishlist/
│   │   └── page.tsx           # Full wishlist page
│   ├── checkout/
│   │   └── page.tsx           # Multi-step checkout with form validation
│   ├── order-success/
│   │   └── page.tsx           # Order confirmation receipt with confetti
│   └── globals.css            # Tailwind CSS v4 styling & dark mode classes
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Sticky glassmorphic navbar with live search
│   │   ├── Footer.tsx         # 4-column footer with links & payment badges
│   │   └── AnnouncementBar.tsx# Dismissible top flash sale banner
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── CategorySection.tsx
│   │   ├── FeaturedSection.tsx
│   │   ├── PromoBanner.tsx
│   │   ├── ValueProps.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── NewsletterSection.tsx
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetailView.tsx
│   │   ├── ProductFilters.tsx
│   │   └── QuickViewModal.tsx
│   ├── cart/
│   │   └── CartDrawer.tsx     # Slide-over cart drawer with free shipping progress
│   └── wishlist/
│       └── WishlistDrawer.tsx # Slide-over wishlist drawer
├── context/
│   ├── CartContext.tsx        # Cart state, quantities, coupon logic & calculations
│   ├── WishlistContext.tsx    # Wishlist persistence & toggle actions
│   ├── ThemeContext.tsx       # Dark / Light theme toggle & localStorage sync
│   └── ToastContext.tsx       # Toast alert dispatcher
├── data/
│   └── products.ts            # Realistic dummy catalog of 16 hardware products
└── types/
    └── index.ts               # Strict TypeScript definitions
```

