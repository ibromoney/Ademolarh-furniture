"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  Phone,
  ArrowRight,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-zinc-800 bg-black/80 backdrop-blur-2xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1782156665/logo_furn_i1brb2.jpg"
            alt="Ademolarh Logo"
            width={58}
            height={58}
            priority
            className="rounded-full border border-zinc-700 object-cover"
          />

          <div>
            <h1 className="bg-linear-to-r from-white via-zinc-200 to-teal-400 bg-clip-text text-2xl font-black tracking-[0.2em] text-transparent">
              ADEMOLARH
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Luxury Furniture
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-zinc-300 lg:flex">
          {[
            ["Home", "/"],
            ["Shop", "/shop"],
            ["Collections", "/collections"],
            ["About", "/about"],
            ["Contact", "/contact"],
          ].map(([title, href]) => (
            <Link
              key={title}
              href={href}
              className="relative transition hover:text-teal-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-teal-400 after:transition-all hover:after:w-full"
            >
              {title}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-full border border-zinc-700 p-3 text-zinc-300 transition hover:border-teal-500 hover:text-teal-400">
            <Search size={18} />
          </button>

          <Link
            href="/cart"
            className="relative rounded-full border border-zinc-700 p-3 text-zinc-300 transition hover:border-teal-500 hover:text-teal-400"
          >
            <ShoppingBag size={18} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-[10px] font-bold text-white">
              0
            </span>
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-teal-500"
          >
            <Phone size={16} />
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          <motion.div
            animate={{
              rotate: menuOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </motion.div>
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden border-t border-zinc-800 bg-black/95 backdrop-blur-3xl"
          >
            <motion.nav className="flex flex-col px-6 py-8">
              {[
                ["Home", "/"],
                ["Shop", "/shop"],
                ["Collections", "/collections"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([title, href]) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                >
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-medium text-zinc-300 transition-all duration-300 hover:bg-zinc-900 hover:text-teal-400"
                  >
                    {title}

                    <ArrowRight
                      size={18}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100"
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={itemVariants}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center rounded-full bg-teal-600 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-teal-500"
                >
                  <Phone size={18} className="mr-2" />
                  Contact Us
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}