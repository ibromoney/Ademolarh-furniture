"use client";

import {
  ShieldCheck,
  Sofa,
  Truck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sofa,
    title: "Premium Craftsmanship",
    description:
      "Every furniture piece is carefully handcrafted by skilled artisans using premium-quality materials for lasting elegance.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description:
      "Built with durability in mind, every product undergoes strict quality checks before delivery to your home.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "Fast and secure delivery across Nigeria with professional handling to ensure your furniture arrives in perfect condition.",
  },
  {
    icon: Sparkles,
    title: "Modern Luxury Design",
    description:
      "Designed to complement contemporary interiors while combining timeless aesthetics with exceptional comfort.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-sm text-teal-400">
            Why Choose Ademolarh
          </p>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            Designed For Modern Living
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            At Ademolarh Furniture, we combine exceptional craftsmanship,
            luxurious materials, and timeless design to create furniture that
            transforms every space into a masterpiece.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-teal-500/50"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10 transition duration-300 group-hover:bg-teal-500 group-hover:rotate-6">
                  <Icon
                    size={30}
                    className="text-teal-400 group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className="mt-8 h-1 w-14 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-24" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 rounded-[40px] border border-zinc-800 bg-linear-to-r from-zinc-900 via-zinc-950 to-zinc-900 p-12 text-center"
        >
          <h3 className="text-4xl font-black text-white">
            Luxury Meets Comfort
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Every Ademolarh Furniture collection is thoughtfully designed to
            blend elegance, comfort, and functionality, helping you create
            spaces that inspire every day.
          </p>

          <button className="mt-10 rounded-full bg-teal-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-teal-400">
            Explore Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
}