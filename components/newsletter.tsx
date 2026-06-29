"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[40px] border border-zinc-800 bg-linear-to-br from-zinc-900 via-zinc-950 to-black p-10 shadow-2xl md:p-16"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-5 py-2 text-sm text-teal-400">
                <Mail size={16} />
                Join Our Community
              </div>

              <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
                Be The First To Discover
                <span className="block text-teal-400">
                  Luxury Furniture
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                Get exclusive access to new arrivals, premium collections,
                interior design inspiration, special offers, and members-only
                discounts from Ademolarh Furniture.
              </p>

              {/* Benefits */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                  <h3 className="font-semibold text-white">
                    ✓ Exclusive Discounts
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Early access to seasonal offers.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                  <h3 className="font-semibold text-white">
                    ✓ New Collections
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Be the first to see our latest furniture.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                  <h3 className="font-semibold text-white">
                    ✓ Interior Tips
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Professional home styling ideas.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                  <h3 className="font-semibold text-white">
                    ✓ VIP Access
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Invitations to exclusive launches.
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-xl"
            >
              <h3 className="text-3xl font-bold text-white">
                Subscribe Today
              </h3>

              <p className="mt-4 text-zinc-400">
                Join thousands of homeowners who trust Ademolarh Furniture for
                premium design inspiration.
              </p>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-teal-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-zinc-700 bg-black px-5 py-4 text-white outline-none transition focus:border-teal-500"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-500 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-teal-400"
                >
                  Subscribe Now
                  <ArrowRight size={18} />
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-zinc-500">
                We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}