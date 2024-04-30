import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context"; // Ajusta la ruta según tu estructura
import { Button } from "@nextui-org/react";
import OrderCard from "../OrderCard";

const CartSidebar = () => {
  const { isSidebarOpen, closeSidebar, cartProducts } =
    useContext(ShoppingCartContext);

  // Calcular el total del carrito usando la función reduce
  const totalCarrito = cartProducts.reduce((acc, product) => {
    // Para cada producto, calcula el costo total multiplicando el precio por la cantidad
    const totalProducto = product.cantidad * product.price;

    // Suma el costo total del producto al acumulador
    return acc + totalProducto;
  }, 0); // El segundo parámetro es el valor inicial del acumulador, aquí es 0

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

      {/* Mostrar el total y el botón para ir al checkout */}
      <div className="px-4 text-white space-y-1 mt-1">
        {/* Muestra el total calculado del carrito, formateado a 2 decimales */}
        <strong className="text-lg font-semibold">
          Total: ${totalCarrito.toFixed(0)}
        </strong>

        {/* Botón para ir al checkout */}
        <Button
          className="bg-azul_neon text-white w-full font-bold hover:bg-opacity-80"
          variant="solid"
          radius="full"
          aria-label="Ir al Checkout"
          onClick={() => {
            /* Aquí iría la función para ir al checkout */
          }}
        >
          Ir al Checkout
        </Button>
      </div>
    </aside>
  );
};

export default CartSidebar;
