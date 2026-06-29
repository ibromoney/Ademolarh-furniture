"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/2349038522564?text=Hello%20Ademolarh%20Furniture,%20I'm%20interested%20in%20your%20furniture."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        group
      "
    >
      {/* Glow */}
      <span className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 group-hover:opacity-70 transition" />

      {/* Button */}
      <div
  className="
    whatsapp-pulse
    relative
    flex
    h-16
    w-16
    items-center
    justify-center
    rounded-full
    bg-green-500
    text-white
    shadow-2xl
    transition-all
    duration-300
    hover:scale-110
  "
>
  <FaWhatsapp size={34} />
</div>

      {/* Tooltip */}
      <div
        className="
          absolute
          right-20
          top-1/2
          -translate-y-1/2
          whitespace-nowrap
          rounded-full
          bg-zinc-900
          px-4
          py-2
          text-sm
          font-medium
          text-white
          opacity-0
          transition-all
          duration-300
          group-hover:opacity-100
          border
          border-zinc-700
        "
      >
        Chat with us
      </div>
    </Link>
  );
}