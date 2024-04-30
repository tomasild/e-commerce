import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const addProductToCart = (product) => {
    openSidebar()
    const updatedCart = cartProducts.map((p) => 
      p.id === product.id 
        ? { ...p, cantidad: p.cantidad + 1 }
        : p
    );

    // Si no se encontró el producto, se añade al carrito
    const productExists = cartProducts.some((p) => p.id === product.id);

    if (!productExists) {
      openSidebar()
      updatedCart.push({ ...product, cantidad: 1 });
    }

    setCartProducts(updatedCart);
    setCount(count + 1);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        cartProducts,
        setCartProducts,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        addProductToCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
