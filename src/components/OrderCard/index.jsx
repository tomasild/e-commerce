import React from "react";
import { Image } from "@nextui-org/react";

export default function OrderCard({ product }) {
  if (!product) return null; // Manejar la falta de datos del producto con elegancia

  return (
    <article className="text-white flex flex-col items-start">
      <div className="flex flex-row space-x-2">
        <Image
          src={product.images?.[0] || ""}
          alt={product.title}
          className="rounded-none aspect-square max-w-20"
        />

        <div className="flex flex-col justify-between">
          <h2 className="text-sm">{product.title}</h2>
          <strong>${product.price}</strong>
        </div>
      </div>
    </article>
  );
}
