import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para el sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); 
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        cartProducts,
        setCartProducts,
        isSidebarOpen, // Agregamos el estado del sidebar
        toggleSidebar, // Agregamos la función para cambiar el estado
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
