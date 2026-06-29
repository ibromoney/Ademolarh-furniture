"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Living Room",
    description:
      "Elegant sofas, coffee tables and accent chairs designed for modern living.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    href: "/shop?category=living-room",
  },
  {
    title: "Bedroom",
    description:
      "Luxury beds, wardrobes and bedside tables crafted for restful comfort.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    href: "/shop?category=bedroom",
  },
  {
    title: "Dining",
    description:
      "Beautiful dining tables and chairs made for unforgettable moments.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
    href: "/shop?category=dining",
  },
];

export default function Collection() {
  return (
    <section className="relative bg-black py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-teal-400">
            Collections
          </p>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            Crafted For Every Space
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Explore carefully curated furniture collections that blend
            timeless craftsmanship with contemporary elegance.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
            >
              {/* Image */}
              <div className="relative h-125 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-3xl font-bold text-white">
                    {collection.title}
                  </h3>

                  <p className="mt-4 text-zinc-300">
                    {collection.description}
                  </p>

                  <Link
                    href={collection.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-teal-500 px-6 py-3 text-white transition hover:bg-teal-500"
                  >
                    Explore Collection

                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}