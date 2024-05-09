import { createContext, useState, useMemo } from "react";

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

  const deleteProduct = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(filteredProducts);
  };

  const addProductToCart = (product) => {
    openSidebar();
    // Crea una copia del carrito actualizando la cantidad del producto si ya existe
    const updatedCart = cartProducts.map((p) =>
      p.id === product.id
        ? { ...p, cantidad: p.cantidad + 1 } // Incrementa la cantidad si el producto ya está en el carrito
        : p // De lo contrario, mantiene el producto sin cambios
    );
    // Verifica si el producto ya existe en el carrito
    const productExists = cartProducts.some((p) => p.id === product.id);
    // Si el producto no existe, agrégalo al carrito con cantidad inicial de 1
    if (!productExists) {
      updatedCart.push({ ...product, cantidad: 1 });
    }
    // Actualiza el estado del carrito con la nueva lista de productos
    setCartProducts(updatedCart);
    // Incrementa el contador total de productos
    setCount(count + 1);
  };

  const totalCartPrice = useMemo(() => {
    // Utiliza `reduce` para calcular la suma del precio de cada producto, multiplicado por su cantidad
    return cartProducts.reduce((total, product) => {
      return total + (product.cantidad * product.price);
    }, 0); // Inicia la suma desde cero
  }, [cartProducts]); // Solo recalcula el precio total cuando `cartProducts` cambia



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
        addProductToCart,
        deleteProduct,
        totalCartPrice
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
