"use client";

import { useRef, useState, } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";



export default function Contact() 
{
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setMessage("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setMessage("✅ Your message has been sent successfully.");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black pt-32 text-white overflow-hidden">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-800">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.12),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-teal-400">
            Contact Ademolarh Furniture
          </p>

          <h1 className="mt-6 text-5xl font-black md:text-6xl">
            We&apos;d Love To Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Whether you&apos;re furnishing your dream home or need custom-made
            furniture, our team is ready to help.
          </p>

        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >

            <div>

              <h2 className="text-4xl font-bold">
                Let  Build Something Beautiful
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">
                We specialize in premium furniture for homes,
                offices and commercial spaces.
                Reach out today and let&apos;s discuss your project.
              </p>

            </div>

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="rounded-2xl bg-zinc-900 p-4">
                  <Phone className="text-teal-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Phone
                  </h3>

                  <p className="text-zinc-400">
                    +234 903 852 2564
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="rounded-2xl bg-zinc-900 p-4">
                  <Mail className="text-teal-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Email
                  </h3>

                  <p className="text-zinc-400">
                    adelekan040@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="rounded-2xl bg-zinc-900 p-4">
                  <MapPin className="text-teal-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Address
                  </h3>

                  <p className="text-zinc-400">
                    Osogbo, Osun State, Nigeria
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="rounded-2xl bg-zinc-900 p-4">
                  <Clock className="text-teal-400" />
                </div>

                <div>

                  <h3 className="font-semibold text-xl">
                    Working Hours
                  </h3>

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

          {/* Form */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 backdrop-blur-xl"
          >

            <h2 className="mb-8 text-3xl font-bold">
              Send Us A Message
            </h2>

            <div className="space-y-6">

              <input
                name="user_name"
                type="text"
                required
                placeholder="Your Full Name"
                className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 outline-none transition focus:border-teal-500"
              />

              <input
                name="user_email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 outline-none transition focus:border-teal-500"
              />

              <input
                name="subject"
                type="text"
                required
                placeholder="Subject"
                className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 outline-none transition focus:border-teal-500"
              />

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-zinc-700 bg-black px-5 py-4 outline-none transition focus:border-teal-500"
              />

              <button
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-teal-600 py-4 font-semibold transition hover:bg-teal-500 disabled:opacity-60"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {message && (
                <p className="text-center text-sm text-teal-400">
                  {message}
                </p>
              )}

            </div>

          </motion.form>

        </div>

      </section>

    </main>
  );
}