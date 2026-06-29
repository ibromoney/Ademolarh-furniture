"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.12),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-teal-400">
            Contact Us
          </p>

          <h1 className="mt-6 text-5xl font-black md:text-6xl">
            We&apos;d Love To Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Whether you&apos;re furnishing your dream home or need custom-made
            furniture, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold">
                Get In Touch
              </h2>

              <p className="mt-4 text-zinc-400 leading-7">
                Have a question about our products or services? Reach out to
                us anytime.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-teal-400" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-zinc-400">
                    +234 903 852 2564
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-teal-400" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-zinc-400">
                    adelekan040@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-teal-400" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-zinc-400">
                    Osogbo, Osun State, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-teal-400" />
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="text-zinc-400">
                    Monday - Saturday
                  </p>
                  <p className="text-zinc-400">
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur"
          >
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-4 outline-none transition focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-4 outline-none transition focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Furniture Inquiry"
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-4 outline-none transition focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-4 outline-none transition focus:border-teal-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-teal-600 px-6 py-4 font-semibold transition hover:bg-teal-500"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}