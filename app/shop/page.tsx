import {
  Search,
  Sofa,
  Lamp,
  BedDouble,
  Armchair,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";

import Filters from "@/components/filters";
import ProductGrid from "@/components/product-grid";
import LoadingSkeleton from "@/components/loading-skeleton";

export default function ShopPage() {
  const isLoading = false;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,.15),transparent_65%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-24">
          <span className="rounded-full border border-teal-500/40 bg-teal-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-teal-400">
            Ademolarh Furniture
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Discover Furniture
            <span className="block bg-linear-to-r from-white to-teal-400 bg-clip-text text-transparent">
              Crafted For Modern Living
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Explore handcrafted sofas, luxury chairs, premium dining sets,
            elegant wardrobes and timeless furniture built to elevate every
            home.
          </p>

          {/* Search */}

          <div className="mt-12 flex max-w-xl items-center rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3">
            <Search className="text-teal-400" size={20} />

            <input
              placeholder="Search furniture..."
              className="ml-3 flex-1 bg-transparent outline-none placeholder:text-zinc-500"
            />

            <button className="rounded-full bg-teal-500 px-6 py-2 font-semibold transition hover:bg-teal-400">
              Search
            </button>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["500+", "Luxury Products"],
              ["15+", "Years Experience"],
              ["5K+", "Happy Customers"],
              ["98%", "Positive Reviews"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur"
              >
                <h2 className="text-3xl font-black text-teal-400">
                  {value}
                </h2>

                <p className="mt-2 text-zinc-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORY SHORTCUTS ================= */}

      <section className="border-b border-zinc-900 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
          {[
            {
              icon: Sofa,
              name: "Sofas",
            },
            {
              icon: Armchair,
              name: "Chairs",
            },
            {
              icon: BedDouble,
              name: "Beds",
            },
            {
              icon: Lamp,
              name: "Lighting",
            },
          ].map((item) => (
            <button
              key={item.name}
              className="group flex items-center justify-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-teal-500 hover:bg-zinc-800"
            >
              <item.icon
                className="text-teal-400 transition group-hover:scale-110"
                size={28}
              />

              <span className="font-medium">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ================= SHOP ================= */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <Filters />
          </aside>

          {/* Products */}

          <div>
            {isLoading ? (
              <LoadingSkeleton count={9} />
            ) : (
              <ProductGrid />
            )}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="border-t border-zinc-900 bg-zinc-950 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-teal-500">
            <Truck
              className="text-teal-400"
              size={42}
            />

            <h3 className="mt-6 text-2xl font-bold">
              Fast Delivery
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              We deliver premium furniture safely to your doorstep nationwide
              with professional installation.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-teal-500">
            <ShieldCheck
              className="text-teal-400"
              size={42}
            />

            <h3 className="mt-6 text-2xl font-bold">
              5-Year Warranty
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Every handcrafted piece comes with quality assurance and
              extended warranty.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-teal-500">
            <Sparkles
              className="text-teal-400"
              size={42}
            />

            <h3 className="mt-6 text-2xl font-bold">
              Premium Quality
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              Built from carefully selected hardwood, luxury fabrics and
              premium finishes for timeless elegance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}