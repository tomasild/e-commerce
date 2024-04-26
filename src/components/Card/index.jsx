import React, { useState, useContext, useEffect } from "react";
import { Card, CardBody, CardFooter, Image, Chip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import CardModal from "../../components/Modal";
import { ShoppingCartContext } from "../../context";

export default function CardUI({ data }) {
  // Controlar el estado del modal y la data de la card seleccionada
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCardData, setSelectedCardData] = useState(null);
  const context = useContext(ShoppingCartContext);

  // Manejador para abrir el modal con la data de la card seleccionada
  const handleCardPress = () => {
    setSelectedCardData(data);
    onOpen();
  };

  const addProductToCart = (data) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, data]);
    context.toggleSidebar();
  };
  useEffect(() => {
    console.log("Carrito de compras actualizado:", context.cartProducts);
  }, [context.cartProducts]);

  return (
    <>
      <Card
        shadow="lg"
        isPressable
        onPress={handleCardPress}
        className="bg-cromo"
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="none"
            width="100%"
            alt={data.title}
            className="w-full object-cover aspect-square"
            src={data.images?.[0] || ""}
          />
          <div className="absolute top-2 right-2 z-10">
            <Button
              isIconOnly
              className="bg-azul_neon text-white"
              variant="solid"
              radius="full"
              aria-label="Add to cart"
              onClick={() => addProductToCart(data)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
          <div className="absolute bottom-2 left-2 z-10">
            <Chip className="text-xs bg-cromo border border-gris_oscuro">
              {data.category}
            </Chip>
          </div>
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{data.title}</b>
          <b className="text-lg">${data.price}</b>
        </CardFooter>
      </Card>

      {/* Modal para mostrar la información de la card */}
      <CardModal
        isOpen={isOpen}
        onClose={onClose}
        cardData={selectedCardData} // Pasar los datos de la card seleccionad
      />
    </>
  );
}
