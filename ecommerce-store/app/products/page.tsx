"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Filter, 
  X, 
  SlidersHorizontal, 
  LayoutGrid, 
  List, 
  ArrowUpDown, 
  PackageOpen, 
  RotateCcw 
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { FilterState, Product, ProductCategory, SortOption } from "@/types";
import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import QuickViewModal from "@/components/products/QuickViewModal";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const urlCategory = (searchParams.get("category") as ProductCategory) || "All";
  const urlSearch = searchParams.get("search") || "";

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: urlSearch,
    category: urlCategory,
    minPrice: 0,
    maxPrice: 500,
    minRating: 0,
    inStockOnly: false,
    sortBy: "featured",
  });

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Sync state if URL search params change
  React.useEffect(() => {
    if (urlCategory && urlCategory !== filters.category) {
      setFilters((prev) => ({ ...prev, category: urlCategory }));
    }
  }, [urlCategory, filters.category]);

  React.useEffect(() => {
    if (urlSearch !== filters.searchQuery) {
      setFilters((prev) => ({ ...prev, searchQuery: urlSearch }));
    }
  }, [urlSearch, filters.searchQuery]);

  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: "",
      category: "All",
      minPrice: 0,
      maxPrice: 500,
      minRating: 0,
      inStockOnly: false,
      sortBy: "featured",
    });
    router.push("/products");
  };

  // Filter and Sort Pipeline
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Search Query
    if (filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Category
    if (filters.category && filters.category !== "All") {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price
    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    // Rating
    if (filters.minRating > 0) {
      result = result.filter((p) => p.rating >= filters.minRating);
    }

    // In Stock
    if (filters.inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    // Sorting
    switch (filters.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return result;
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Page Header */}
      <div className="mb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400">
          <span>Home</span>
          <span>/</span>
          <span className="text-zinc-900 dark:text-zinc-100 font-bold">Hardware Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
          {filters.category === "All" ? "All Hardware & Devices" : `${filters.category} Collection`}
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
          Engineered with titanium, aerospace aluminum, and sound-dampened acoustics for uncompromising productivity.
        </p>
      </div>

      {/* Control Bar: Search Tag, Mobile Filter Button, Sort Selector, View Mode */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* Left: Product count & search badge */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-xs font-bold shadow-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>

          <span className="text-xs text-zinc-500 font-medium">
            Showing <strong className="text-zinc-900 dark:text-white font-bold">{filteredProducts.length}</strong> products
          </span>

          {filters.searchQuery && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-700 dark:text-zinc-300">
              <span>&ldquo;{filters.searchQuery}&rdquo;</span>
              <button
                onClick={() => handleFilterChange({ searchQuery: "" })}
                className="hover:text-rose-500"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Right: Sort Dropdown & Grid/List Toggle */}
        <div className="flex items-center justify-end gap-3">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400" />
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange({ sortBy: e.target.value as SortOption })}
              className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-1.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest Releases</option>
            </select>
          </div>

          <div className="hidden sm:flex items-center border border-zinc-200 dark:border-zinc-700 rounded-xl p-0.5 bg-zinc-100 dark:bg-zinc-800">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
              }`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Catalog Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* Desktop Left Sidebar Filters */}
        <div className="hidden lg:block lg:col-span-1 sticky top-28 bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
          <ProductFilters
            filters={filters}
            onChange={handleFilterChange}
            onReset={handleResetFilters}
            productCount={filteredProducts.length}
          />
        </div>

        {/* Product Cards Grid Right */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-dashed border-zinc-300 dark:border-zinc-700 space-y-4">
              <div className="w-16 h-16 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center mx-auto">
                <PackageOpen className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  No matching hardware found
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                  We couldn&apos;t find any items matching your selected criteria or search term.
                </p>
              </div>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-bold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-center hover:shadow-lg transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full sm:w-36 h-36 rounded-xl object-cover bg-zinc-100 dark:bg-zinc-800 shrink-0"
                  />
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-blue-600 dark:text-blue-400 uppercase">
                        {product.category}
                      </span>
                      <span>•</span>
                      <span className="text-zinc-500">Rating: {product.rating}★ ({product.reviewCount})</span>
                    </div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                      {product.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-black text-zinc-900 dark:text-white">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-zinc-400 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full sm:w-auto shrink-0 flex flex-col gap-2">
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="px-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-xl text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    >
                      Quick View
                    </button>
                    <a
                      href={`/product/${product.id}`}
                      className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-xs font-bold text-center hover:bg-zinc-800"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Slide-over Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-sm bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Filter Options
                  </h3>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <ProductFilters
                  filters={filters}
                  onChange={handleFilterChange}
                  onReset={handleResetFilters}
                  productCount={filteredProducts.length}
                />
              </div>

              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-xs rounded-xl"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-sm text-zinc-500">Loading catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

