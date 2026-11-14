import { notFound } from "next/navigation";
import { PRODUCTS, getProductById } from "@/data/products";
import ProductDetailView from "@/components/products/ProductDetailView";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailView product={product} />;
}
