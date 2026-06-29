import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-zinc-800 bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
      

        {/* Footer Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
         {/* Brand */}
<div className="lg:col-span-2">
  <Link href="/" className="flex items-center gap-4">
    <Image
      src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1782156665/logo_furn_i1brb2.jpg"
      alt="Ademolarh Logo"
      width={70}
      height={70}
      priority
      className="rounded-full object-cover"
    />

    <div>
      <h2 className="text-3xl font-black tracking-widest text-white">
        Ademolarh
      </h2>

      <p className="text-sm tracking-[0.2em] uppercase text-amber-400">
        Multipurpose Company Ltd
      </p>
    </div>
  </Link>

  <p className="mt-6 max-w-sm leading-7 text-zinc-400">
    Crafting premium furniture that blends elegance, durability, and comfort.
    Every piece is thoughtfully designed to transform homes and offices into
    inspiring spaces.
  </p>

  <div className="mt-8 flex gap-4">
    <Link
      href="https://wa.me/2349038522564"
      target="_blank"
      className="group rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:text-white"
    >
      <FaWhatsapp size={20} />
    </Link>

    <Link
      href="https://www.tiktok.com/@yourusername"
      target="_blank"
      className="group rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
    >
      <FaTiktok size={20} />
    </Link>

    <Link
      href="https://instagram.com/yourusername"
      target="_blank"
      className="group rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
    >
      <FaInstagram size={20} />
    </Link>

    <Link
      href="https://facebook.com/yourusername"
      target="_blank"
      className="group rounded-full border border-zinc-800 p-3 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
    >
      <FaFacebookF size={20} />
    </Link>
  </div>
</div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Shop
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link href="/shop" className="hover:text-teal-400">
                  Chairs
                </Link>
              </li>

              <li>
                <Link href="/shop" className="hover:text-teal-400">
                  Sofas
                </Link>
              </li>

              <li>
                <Link href="/shop" className="hover:text-teal-400">
                  Tables
                </Link>
              </li>

              <li>
                <Link href="/shop" className="hover:text-teal-400">
                  Lighting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link href="#" className="hover:text-teal-400">
                  About
                </Link>
              </li>

             
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-teal-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Support
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>
                <Link href="#" className="hover:text-teal-400">
                  Shipping
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-teal-400">
                  Returns
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-teal-400">
                  Privacy
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-teal-400">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-zinc-800 pt-8">
  <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

    <div>
      <p className="text-sm text-zinc-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold tracking-[0.25em] text-white">
          Ademolarh
        </span>
        . Crafted for modern living.
      </p>
    </div>

    <div className="flex items-center gap-3 text-sm">
      <span className="text-zinc-500">
        Designed & Developed with
      </span>

      <span className="text-red-500 animate-pulse">
        ♥
      </span>

      <Link
        href="https://highbeedev.com"
        target="_blank"
        className="group relative font-semibold text-white"
      >
        HighbeeDev

        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full" />
      </Link>
    </div>

  </div>
</div>
      </div>
    </footer>
  );
}