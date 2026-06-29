"use client";

import { products } from "@/data/products";
import ProductCard from "./product-card";
import AnimatedSection from "./animated-section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  return (
    <AnimatedSection className="py-28">
      <section className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-teal-400">
              Featured Products
            </span>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Crafted to Elevate Every Space
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-zinc-400">
              Discover our most loved furniture pieces, combining modern
              elegance, exceptional craftsmanship, and everyday comfort.
            </p>
          </div>

          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-white transition-all duration-300 hover:border-teal-500 hover:bg-teal-500"
          >
            View All Products

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Products */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}