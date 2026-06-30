"use client";

import Image from "next/image";
import { X, ShoppingBag, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Product = {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  material: string;
  description: string;
};

type QuickViewModalProps = {
  product: Product | null;
  open: boolean;
  onClose: () => void;
};

export default function QuickViewModal({
  product,
  open,
  onClose,
}: QuickViewModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-20 rounded-full bg-zinc-900 p-2 transition hover:bg-zinc-800"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-87.5 lg:h-162.5">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center p-10">
                <span className="mb-3 text-sm uppercase tracking-[0.3em] text-teal-400">
                  {product.material}
                </span>

                <h2 className="text-5xl font-bold">{product.name}</h2>

                <div className="mt-5 flex items-center gap-2">
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />

                  <span>{product.rating}</span>
                </div>

                <p className="mt-8 leading-8 text-zinc-400">
                  {product.description}
                </p>

                <div className="mt-10 text-4xl font-bold text-teal-400">
                  ${product.price}
                </div>

                <button className="mt-10 flex items-center justify-center gap-3 rounded-full bg-teal-600 px-8 py-4 font-semibold transition hover:bg-teal-500">
                  <ShoppingBag size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
