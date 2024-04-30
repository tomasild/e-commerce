import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context"; // Ajusta la ruta según tu estructura
import { Button } from "@nextui-org/react";
import OrderCard from "../OrderCard";

const CartSidebar = () => {
  const { isSidebarOpen, closeSidebar, cartProducts } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`fixed top-0 right-0 h-[100vh] w-72 bg-gris_oscuro shadow-lg z-50 transform transition-transform duration-300 ${
        isSidebarOpen ? "" : "translate-x-full"
      }`}
    >
      {/* Botón para cerrar el sidebar svg x-mark */}
      <button
        className="absolute top-4 right-4 text-plata_claro hover:text-red-500"
        aria-label="Cerrar"
        onClick={closeSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Título del Sidebar */}
      <h2 className="text-xl font-bold text-center py-3 text-gris_azul">
        Carrito de Compras
      </h2>

      {/* Listado de productos */}
      <ul className="flex flex-col gap-2 px-4 overflow-y-auto h-3/4">
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <li key={product.id}>
              <OrderCard product={product} />
            </li>
          ))
        ) : (
          <li className="text-center text-plata_claro">
            Tu carrito está vacío.
          </li>
        )}
      </ul>

      {/* Botón para ir al checkout */}
      <div className="px-4 pt-4">
        <Button
          className="bg-azul_neon text-white w-full font-bold hover:bg-opacity-80"
          variant="solid"
          radius="full"
          aria-label="Ir al Checkout"
        >
          Ir al Checkout
        </Button>
      </div>
    </aside>
  );
};

export default CartSidebar;
