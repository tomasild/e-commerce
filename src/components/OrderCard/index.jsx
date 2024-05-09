import React from "react";
import { Image } from "@nextui-org/react";

export default function OrderCard({ product, deleteProduct}) {

  if (!product) return null; // Manejar la falta de datos del producto
  const total = product.cantidad * product.price;

  return (
    <article className="flex flex-row items-stretch text-white border-b border-plata_claro border-opacity-30 pb-2">
      {/* Contenedor de la imagen */}
      <div className="w-1/3">
        <Image
          src={product.images?.[0] || ""}
          alt={product.title}
          className="rounded-none aspect-square max-w-full h-full"
        />
      </div>

      {/* Contenedor para el texto */}
      <div className="w-2/3 flex flex-col justify-between pl-2">
        {/* Título alineado arriba */}
        <h2 className="text-sm font-base text-pretty">{product.title}</h2>

        {/* Precio e icono de eliminación alineados abajo */}
        <div className="flex flex-col justify-between items-start">
          <span className="text-sm font-semibold">
            Cantidad: {product.cantidad}
          </span>
          <div className="flex justify-between w-full">
            <strong className="text-sm font-semibold">Total: ${total}</strong>
            <button
              aria-label="Delete"
              className="text-white hover:text-red-500"
              onClick={() => deleteProduct(product.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
