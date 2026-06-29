"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Ademolarh Furniture completely transformed my living room. The craftsmanship is exceptional and every piece feels luxurious.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Beautiful furniture with premium finishes. Delivery was seamless and the quality exceeded expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Olivia Brown",
    role: "Home Owner",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Every guest asks where I bought my furniture. Ademolarh combines elegance, comfort, and timeless design.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-teal-400">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Loved by Our Clients
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Hundreds of homeowners, architects, and interior designers trust
            Ademolarh Furniture to create beautiful spaces.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-lg transition-all hover:border-teal-500"
            >
              {/* Stars */}
              <div className="mb-6 flex">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="leading-8 text-zinc-300">
                &quot;{item.review}&quot;
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-zinc-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid gap-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 text-center backdrop-blur md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-black text-teal-400">10K+</h3>
            <p className="mt-2 text-zinc-400">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-teal-400">250+</h3>
            <p className="mt-2 text-zinc-400">Luxury Products</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-teal-400">15+</h3>
            <p className="mt-2 text-zinc-400">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-teal-400">98%</h3>
            <p className="mt-2 text-zinc-400">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}