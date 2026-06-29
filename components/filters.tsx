"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function Filters() {
  return (
    <aside className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          Filters
        </h2>

        <SlidersHorizontal
          className="text-teal-400"
          size={20}
        />
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          type="text"
          placeholder="Search furniture..."
          className="w-full rounded-xl border border-zinc-700 bg-black py-3 pl-11 pr-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-teal-500"
        />
      </div>

      {/* Category */}
      <div className="mb-8">
        <h3 className="mb-4 font-medium text-white">
          Category
        </h3>

        <div className="space-y-3">
          {[
            "Sofas",
            "Chairs",
            "Tables",
            "Beds",
            "Cabinets",
          ].map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center justify-between text-zinc-400 transition hover:text-white"
            >
              <span>{item}</span>

              <input
                type="checkbox"
                className="h-4 w-4 accent-teal-500"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="mb-4 font-medium text-white">
          Material
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Oak",
            "Walnut",
            "Leather",
            "Marble",
            "Metal",
          ].map((material) => (
            <button
              key={material}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-teal-500 hover:bg-teal-500 hover:text-white"
            >
              {material}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="mb-4 font-medium text-white">
          Price Range
        </h3>

        <input
          type="range"
          min={100}
          max={5000}
          className="w-full accent-teal-500"
        />

        <div className="mt-2 flex justify-between text-sm text-zinc-500">
          <span>₦100</span>
          <span>₦5,000+</span>
        </div>
      </div>

      {/* Style */}
      <div>
        <h3 className="mb-4 font-medium text-white">
          Style
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Modern",
            "Minimal",
            "Luxury",
            "Classic",
          ].map((style) => (
            <button
              key={style}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-teal-500 hover:bg-teal-500 hover:text-white"
            >
              {style}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}