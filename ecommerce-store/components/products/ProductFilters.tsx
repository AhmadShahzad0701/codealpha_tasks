"use client";

import React from "react";
import { Filter, RotateCcw, Check, Star } from "lucide-react";
import { FilterState, ProductCategory } from "@/types";
import { PRODUCT_CATEGORIES } from "@/data/products";

interface ProductFiltersProps {
  filters: FilterState;
  onChange: (updated: Partial<FilterState>) => void;
  onReset: () => void;
  productCount: number;
}

export default function ProductFilters({
  filters,
  onChange,
  onReset,
  productCount,
}: ProductFiltersProps) {
  const hasActiveFilters =
    filters.category !== "All" ||
    filters.minPrice > 0 ||
    filters.maxPrice < 500 ||
    filters.minRating > 0 ||
    filters.inStockOnly ||
    filters.searchQuery.length > 0;

  return (
    <aside aria-label="Product Filters" className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-zinc-900 dark:text-white" />
          <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
            Filters
          </h3>
          <span className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full font-semibold text-zinc-600 dark:text-zinc-300">
            {productCount}
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-xs text-rose-500 hover:text-rose-600 font-semibold transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
          Categories
        </label>
        <div className="space-y-1">
          {PRODUCT_CATEGORIES.map((cat: ProductCategory) => {
            const isSelected = filters.category === cat;
            return (
              <button
                key={cat}
                onClick={() => onChange({ category: cat })}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <span>{cat}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-3 pt-4 border-t border-zinc-200/60 dark:border-zinc-800">
        <div className="flex items-center justify-between text-xs">
          <label className="font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Price Range
          </label>
          <span className="font-semibold text-zinc-900 dark:text-white">
            ${filters.minPrice} – ${filters.maxPrice}
          </span>
        </div>

        {/* Range Slider for Max Price */}
        <input
          type="range"
          min="50"
          max="500"
          step="10"
          value={filters.maxPrice}
          onChange={(e) => onChange({ maxPrice: Number(e.target.value) })}
          className="w-full accent-zinc-900 dark:accent-white cursor-pointer h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-lg"
        />

        <div className="flex items-center gap-2 text-xs">
          <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-2 border border-zinc-200 dark:border-zinc-700">
            <span className="text-[10px] text-zinc-400 block">Min ($)</span>
            <input
              type="number"
              min="0"
              max={filters.maxPrice - 10}
              value={filters.minPrice}
              onChange={(e) => onChange({ minPrice: Math.max(0, Number(e.target.value)) })}
              className="w-full bg-transparent font-bold text-zinc-900 dark:text-white focus:outline-none"
            />
          </div>
          <span className="text-zinc-400">–</span>
          <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-2 border border-zinc-200 dark:border-zinc-700">
            <span className="text-[10px] text-zinc-400 block">Max ($)</span>
            <input
              type="number"
              min={filters.minPrice + 10}
              max="500"
              value={filters.maxPrice}
              onChange={(e) => onChange({ maxPrice: Number(e.target.value) })}
              className="w-full bg-transparent font-bold text-zinc-900 dark:text-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Customer Rating Filter */}
      <div className="space-y-3 pt-4 border-t border-zinc-200/60 dark:border-zinc-800">
        <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
          Minimum Rating
        </label>
        <div className="space-y-1.5">
          {[
            { label: "Any Rating", val: 0 },
            { label: "4.8 & Above", val: 4.8 },
            { label: "4.5 & Above", val: 4.5 },
            { label: "4.0 & Above", val: 4.0 },
          ].map((option) => {
            const isSelected = filters.minRating === option.val;
            return (
              <button
                key={option.val}
                onClick={() => onChange({ minRating: option.val })}
                className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-colors ${
                  isSelected
                    ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  {option.val > 0 && <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />}
                  <span>{option.label}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-zinc-900 dark:text-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* In Stock Only Switch */}
      <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            In Stock Only
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={filters.inStockOnly}
            onClick={() => onChange({ inStockOnly: !filters.inStockOnly })}
            className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors ${
              filters.inStockOnly ? "bg-emerald-500" : "bg-zinc-200 dark:bg-zinc-700"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                filters.inStockOnly ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </label>
      </div>
    </aside>
  );
}

