import Image from "next/image";
import { products } from "@/data/products";     
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const product =
    products.find(
      (p) => p.slug === slug
    );

  if (!product) return notFound();

  return (
    <main
      className="
      pt-32
      max-w-7xl
      mx-auto
      px-6
      grid
      lg:grid-cols-2
      gap-16
    "
    >
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="
        rounded-3xl
      "
      />

      <div>
        <h1
          className="
          text-5xl
          font-bold
        "
        >
          {product.name}
        </h1>

        <p
          className="
          mt-4
          text-zinc-400
        "
        >
          Premium handcrafted
          furniture made from
          sustainable materials.
        </p>

        <div
          className="
          text-3xl
          mt-8
        "
        >
          ${product.price}
        </div>

        
      </div>
    </main>
  );
}