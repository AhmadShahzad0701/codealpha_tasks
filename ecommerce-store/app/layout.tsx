import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import WishlistDrawer from "@/components/wishlist/WishlistDrawer";

export const metadata: Metadata = {
  title: "LUMEN & CO. | Minimalist Hardware & Studio Acoustics",
  description: "Precision engineered noise-cancelling headphones, titanium smart wearables, mechanical keyboards, and desktop workstation tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors antialiased">
        <ThemeProvider>
          <ToastProvider>
            <WishlistProvider>
              <CartProvider>
                <AnnouncementBar />
                <Navbar />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
                <CartDrawer />
                <WishlistDrawer />
              </CartProvider>
            </WishlistProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

