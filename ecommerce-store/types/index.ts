export type ProductCategory = 
  | "All"
  | "Audio"
  | "Wearables"
  | "Electronics"
  | "Desk Setup"
  | "Accessories"
  | "Lifestyle";

export interface ProductColor {
  name: string;
  hex: string;
  tailwindClass?: string;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  rating: number;
  reviewCount: number;
  images: string[];
  colors: ProductColor[];
  inStock: boolean;
  stockCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  discountPercentage?: number;
  features: string[];
  specs: Record<string, string>;
  reviews: ProductReview[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: ProductColor;
}

export interface PromoCode {
  code: string;
  discountPercent: number;
  description: string;
  minSubtotal?: number;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface OrderConfirmation {
  orderId: string;
  orderDate: string;
  estimatedDelivery: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  shippingMethod: string;
  paymentMethod: string;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  taxAmount: number;
  total: number;
  promoCodeApplied?: string;
}

export type SortOption = 
  | "featured" 
  | "price-asc" 
  | "price-desc" 
  | "rating" 
  | "newest";

export interface FilterState {
  searchQuery: string;
  category: ProductCategory;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  inStockOnly: boolean;
  sortBy: SortOption;
}

