"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Product = {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  material: string;
  rating: number;
};

type ProductCardProps = {
  product: Product;
  onQuickView?: () => void;
};

export default function ProductCard({
  product,
  onQuickView,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
    >
      <Link href={`/product/${product.slug}`}>
        <div className="relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={700}
            height={700}
            className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Quick View Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView?.();
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-teal-500 hover:text-white"
          >
            Quick View
          </button>
        </div>

        <div className="p-6">
          <p className="text-xs uppercase tracking-widest text-teal-400">
            {product.material}
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {product.name}
          </h3>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xl font-bold text-white">
              ₦{product.price}
            </span>

            <span className="text-yellow-400">
              ⭐ {product.rating}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}