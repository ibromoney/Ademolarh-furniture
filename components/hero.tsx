"use client";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      h-screen
      relative
      overflow-hidden
    "
    >
      <Image
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        alt= "hero"
        width={400}
        height={400}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        opacity-10
      "
      />

      <div className="absolute inset-0 gradient-overlay" />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1
        }}
        className="
        relative
        z-10
        h-full
        flex
        flex-col
        items-center
        justify-center
      "
      >
       <p className="uppercase tracking-[0.4em] text-teal-400">
  Premium Furniture
</p>

<h1 className="mt-6 text-6xl md:text-8xl font-black leading-tight">
  Designed for <br />
  Modern Living
</h1>

<p className="mt-8 max-w-xl text-lg text-zinc-300">
  Ademolarh Furniture creates premium handcrafted furniture
  combining comfort, elegance, and timeless craftsmanship for
  homes and offices.
</p>
      </motion.div>
    </section>
  );
}