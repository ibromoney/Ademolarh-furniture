"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Living Room",
    image:
      "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1782744802/e30256fc564040d7b8825b20197ac10c_ghqcv8.jpg",
    href: "/shop?category=living-room",
  },
  {
    title: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop",
    href: "/shop?category=bedroom",
  },
  {
    title: "Office",
    image:
      "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1782745081/fedaf51b4f0b496880f0d22d65c5b018_cwxnyd.jpg",
    href: "/shop?category=office",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16">
        <p className="uppercase tracking-[0.35em] text-teal-400 text-sm">
          Collections
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Crafted Spaces
        </h2>

        <p className="mt-5 max-w-2xl text-zinc-400">
          Explore beautifully curated furniture collections designed
          to elevate every room in your home.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {collections.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <Link href={item.href}>
              <div className="group relative overflow-hidden rounded-3xl border border-zinc-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={900}
                  className="h-130 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-2 text-teal-400">
                    Explore Collection

                    <ArrowRight
                      className="transition group-hover:translate-x-2"
                      size={18}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}