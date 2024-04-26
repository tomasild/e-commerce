import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../context'; // Ajusta la ruta según tu estructura
import { Button } from '@nextui-org/react';
import OrderCard from "../OrderCard"

const CartSidebar = () => {
  const { isSidebarOpen, toggleSidebar, cartProducts } = useContext(ShoppingCartContext);

  return (
    <aside
      className={`fixed top-0 right-0 h-[100vh] w-72 bg-gris_oscuro shadow-lg z-50 transform transition-transform duration-300 ${
        isSidebarOpen ? '' : 'translate-x-full'
      }`}
    >
      {/* Botón para cerrar el sidebar */}
      <button className="absolute top-4 right-4 text-plata_claro" aria-label="Cerrar" onClick={toggleSidebar}>
        X
      </button>

      {/* Título del Sidebar */}
      <h2 className="text-xl font-bold text-center py-4 text-gris_azul">Carrito de Compras</h2>

      {/* Listado de productos */}
      <ul className="flex flex-col gap-2 px-4 overflow-y-auto h-3/4">
        {cartProducts.length > 0 ? (
          cartProducts.map((product, index) => (
            <li key={index}>
              {/* Renderizar OrderCard para cada producto */}
              <OrderCard product={product} />
            </li>
          ))
        ) : (
          <li className="text-center text-plata_claro">Tu carrito está vacío.</li>
        )}
      </ul>

      {/* Botón para ir al checkout */}
      <div className="px-4 pb-2">
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
