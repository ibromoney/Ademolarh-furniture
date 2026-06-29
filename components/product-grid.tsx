"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./product-card";
import QuickViewModal from "./quick-view-modal";
import { SlidersHorizontal } from "lucide-react";

// Automatically gets the product type from your products array
type Product = (typeof products)[number];

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="w-full">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 border-b border-zinc-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Premium Furniture
            </h2>

            <p className="mt-2 text-zinc-400">
              Showing{" "}
              <span className="font-semibold text-white">
                {products.length}
              </span>{" "}
              handcrafted furniture pieces.
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3">
              <SlidersHorizontal
                size={18}
                className="text-teal-400"
              />

              <select className="bg-transparent text-sm text-white outline-none">
                <option>Newest</option>
                <option>Best Selling</option>
                <option>Top Rated</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={() => {
                setSelectedProduct(product);
                setOpen(true);
              }}
            />
          ))}
        </div>
      </section>

      {/* Quick View */}
      <QuickViewModal
        product={selectedProduct}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}