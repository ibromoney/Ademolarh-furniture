"use client";

export default function LoadingSkeleton({
  count = 8,
}: {
  count?: number;
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
        >
          {/* Image */}
          <div className="h-80 w-full animate-pulse bg-zinc-800" />

          {/* Content */}
          <div className="space-y-4 p-6">
            <div className="h-3 w-20 animate-pulse rounded bg-zinc-700" />

            <div className="h-6 w-3/4 animate-pulse rounded bg-zinc-700" />

            <div className="flex justify-between">
              <div className="h-5 w-20 animate-pulse rounded bg-zinc-700" />

              <div className="h-5 w-12 animate-pulse rounded bg-zinc-700" />
            </div>

            <div className="mt-6 h-12 w-full animate-pulse rounded-full bg-zinc-800" />
          </div>
        </div>
      ))}
    </div>
  );
}