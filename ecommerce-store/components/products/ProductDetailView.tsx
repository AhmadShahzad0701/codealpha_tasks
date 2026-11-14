"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Check, 
  Plus, 
  Minus, 
  ChevronRight, 
  Share2, 
  CheckCircle2, 
  Zap 
} from "lucide-react";
import { getRelatedProducts } from "@/data/products";
import { Product, ProductColor } from "@/types";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";
import ProductCard from "@/components/products/ProductCard";

interface ProductDetailViewProps {
  product: Product;
}

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  const router = useRouter();

  const { addToCart, setIsCartOpen } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor | undefined>(
    product.colors[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"specs" | "features" | "reviews">("features");

  const wishlisted = isInWishlist(product.id);
  const related = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor || product.colors[0]);
    setIsCartOpen(true);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor || product.colors[0]);
    router.push("/checkout");
  };

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard!", "success");
    } catch {
      showToast("Copy URL from browser address bar", "info");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-zinc-400 mb-8 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/products" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
          Products
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link
          href={`/products?category=${encodeURIComponent(product.category)}`}
          className="hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-zinc-900 dark:text-zinc-100 font-semibold truncate max-w-xs">
          {product.name}
        </span>
      </nav>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Multi-Image Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Main Large Image */}
          <div className="relative aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-lg group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.discountPercentage && (
                <span className="bg-rose-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  Save {product.discountPercentage}%
                </span>
              )}
              {product.isBestSeller && (
                <span className="bg-amber-400 text-zinc-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  Best Seller
                </span>
              )}
            </div>

            {/* Share & Wishlist Floating Icons */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 shadow-md transition-colors"
                aria-label="Share product"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3 rounded-full backdrop-blur-md shadow-md transition-colors ${
                  wishlisted
                    ? "bg-rose-500 text-white"
                    : "bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-200 hover:text-rose-500"
                }`}
                aria-label="Toggle wishlist"
              >
                <Heart className={`w-4 h-4 ${wishlisted ? "fill-white" : ""}`} />
              </button>
            </div>
          </div>

          {/* Thumbnail Gallery Row */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeImageIndex === idx
                      ? "border-zinc-900 dark:border-white shadow-md scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt="Gallery thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Purchasing & Specifications (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Category & Rating */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {product.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-zinc-900 dark:text-white font-black">{product.rating}</span>
              <span className="text-zinc-400 font-normal">({product.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {product.tagline}
            </p>
          </div>

          {/* Pricing Row */}
          <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-zinc-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-zinc-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> In Stock ({product.stockCount} units)
              </span>
              <p className="text-[10px] text-zinc-400">Ships within 24 hours</p>
            </div>
          </div>

          {/* Finish / Color Selection */}
          {product.colors.length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                Selected Finish:{" "}
                <span className="font-semibold text-zinc-500">
                  {selectedColor?.name || product.colors[0].name}
                </span>
              </label>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => {
                  const isSelected =
                    selectedColor?.name === color.name ||
                    (!selectedColor && color.name === product.colors[0].name);
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                        isSelected
                          ? "border-zinc-900 dark:border-white bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
                          : "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity and Actions */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              {/* Quantity Picker */}
              <div className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-bold text-zinc-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => Math.min(product.stockCount, q + 1))}
                  className="p-3 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl text-xs sm:text-sm font-bold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-md group"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart • ${(product.price * quantity).toFixed(2)}</span>
              </button>
            </div>

            {/* Buy Now Direct Button */}
            <button
              onClick={handleBuyNow}
              className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Instant Buy with 1-Click Checkout</span>
            </button>
          </div>

          {/* Guarantees Box */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-200/80 dark:border-zinc-800 text-center">
            <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800">
              <Truck className="w-4 h-4 text-blue-500 mx-auto mb-1" />
              <p className="text-[11px] font-bold text-zinc-900 dark:text-white">Free Express</p>
              <p className="text-[10px] text-zinc-400">On orders &gt; $100</p>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800">
              <RotateCcw className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
              <p className="text-[11px] font-bold text-zinc-900 dark:text-white">30-Day Trial</p>
              <p className="text-[10px] text-zinc-400">Risk-free home test</p>
            </div>
            <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800">
              <ShieldCheck className="w-4 h-4 text-amber-500 mx-auto mb-1" />
              <p className="text-[11px] font-bold text-zinc-900 dark:text-white">2-Yr Warranty</p>
              <p className="text-[10px] text-zinc-400">Manufacturer direct</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Features, Technical Specs, Customer Reviews */}
      <div className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex border-b border-zinc-200 dark:border-zinc-800 gap-8">
          <button
            onClick={() => setActiveTab("features")}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === "features"
                ? "text-zinc-900 dark:text-white border-b-2 border-zinc-900 dark:border-white"
                : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            }`}
          >
            Engineering Highlights
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === "specs"
                ? "text-zinc-900 dark:text-white border-b-2 border-zinc-900 dark:border-white"
                : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === "reviews"
                ? "text-zinc-900 dark:text-white border-b-2 border-zinc-900 dark:border-white"
                : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            }`}
          >
            Customer Reviews ({product.reviews.length})
          </button>
        </div>

        <div className="py-8">
          {activeTab === "features" && (
            <div className="space-y-6 max-w-3xl">
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {product.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800 text-xs text-zinc-800 dark:text-zinc-200 font-medium"
                  >
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="max-w-2xl">
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                {Object.entries(product.specs).map(([label, val]) => (
                  <div key={label} className="grid grid-cols-3 p-4 text-xs">
                    <span className="font-bold text-zinc-500 uppercase">{label}</span>
                    <span className="col-span-2 text-zinc-900 dark:text-white font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6 max-w-3xl">
              {product.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-zinc-900 dark:text-white">{rev.author}</span>
                      {rev.verified && (
                        <span className="flex items-center gap-1 text-[10px] bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                          <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-zinc-400">{rev.date}</span>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Products Recommendation */}
      {related.length > 0 && (
        <div className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                You May Also Like
              </span>
              <h2 className="text-2xl font-black text-zinc-900 dark:text-white mt-1">
                Related Hardware &amp; Accessories
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-zinc-900 dark:text-white hover:underline"
            >
              View all products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

