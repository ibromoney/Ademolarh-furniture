"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Armchair,
  House,
  Award,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: House,
    number: 500,
    suffix: "+",
    title: "Luxury Homes",
    description:
      "Beautiful homes transformed with our premium furniture.",
  },
  {
    icon: Users,
    number: 1200,
    suffix: "+",
    title: "Happy Clients",
    description:
      "Satisfied customers who trust Ademolarh Furniture.",
  },
  {
    icon: Armchair,
    number: 3500,
    suffix: "+",
    title: "Furniture Delivered",
    description:
      "Elegant furniture pieces delivered across Nigeria.",
  },
  {
    icon: Award,
    number: 10,
    suffix: "+",
    title: "Years Experience",
    description:
      "Crafting luxury furniture with passion and excellence.",
  },
];

export default function BrandStats() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-112.5 w-112.5 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[0.35em] text-sm text-teal-400">
            Ademolarh Furniture
          </p>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            Built On Excellence
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Every project reflects our commitment to exceptional
            craftsmanship, luxurious comfort, and timeless design.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/10 transition group-hover:bg-teal-500">
                  <Icon
                    size={30}
                    className="text-teal-400 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 text-5xl font-black text-white">
                  <CountUp
                    end={item.number}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h3>

                <h4 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-teal-500 transition-all duration-300 group-hover:w-24" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="mt-24 rounded-[40px] border border-zinc-800 bg-linear-to-r from-zinc-900 via-zinc-950 to-zinc-900 p-12 text-center"
        >
          <h3 className="text-4xl font-black text-white">
            Furniture That Lasts For Generations
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            We don&apos;t simply make furniture—we create timeless pieces that
            elevate homes, inspire lifestyles, and become part of your family&apos;s
            story.
          </p>
        </motion.div>
      </div>
    </section>
  );
}