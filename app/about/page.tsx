"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Sofa, Leaf, Truck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Craftsmanship",
    description:
      "Every piece is carefully handcrafted with attention to detail and built to last for generations.",
  },
  {
    icon: Sofa,
    title: "Luxury Comfort",
    description:
      "Designed to combine exceptional comfort with elegant, timeless aesthetics.",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description:
      "We source high-quality, eco-friendly wood and fabrics for responsible living.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Reliable nationwide delivery with professional installation for a seamless experience.",
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="uppercase tracking-[0.35em] text-sm text-teal-400">
              About Ademolarh
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight text-white">
              Furniture Designed
              <br />
              For Modern Living
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              Ademolarh Furniture creates elegant, modern furniture that
              transforms homes, offices, and commercial spaces. Every design
              combines premium materials, expert craftsmanship, and timeless
              style.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              Our mission is simple—to make luxury furniture accessible without
              compromising quality, comfort, or durability.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-4xl font-black text-teal-400">10+</h3>
                <p className="text-zinc-400">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-teal-400">500+</h3>
                <p className="text-zinc-400">Completed Projects</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-teal-400">98%</h3>
                <p className="text-zinc-400">Happy Customers</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80"
              alt="Luxury Furniture"
              width={700}
              height={700}
              className="rounded-3xl object-cover"
            />

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 backdrop-blur">
              <h3 className="text-3xl font-black text-white">100%</h3>
              <p className="text-zinc-400">
                Premium Quality Guarantee
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 transition hover:border-teal-500"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-teal-500/10 p-4 text-teal-400">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}