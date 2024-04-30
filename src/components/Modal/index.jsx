import React, { useEffect, useState, useContext } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";
import { ShoppingCartContext } from "../../context";

export default function CardModal({ isOpen, onClose, cardData, onAddToCart }) {
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const [backdrop, setBackdrop] = useState("blur");
  const [selectedImage, setSelectedImage] = useState("");
  const context = useContext(ShoppingCartContext);

  useEffect(() => {
    if (isOpen && cardData) {
      setSelectedImage(cardData.images?.[0] || ""); // Inicializa la imagen principal
    }
  }, [isOpen, cardData]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image); // Cambia la imagen principal al hacer clic en una miniatura
  };

  const addProductToCart = (cardData) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, cardData]);
    context.openSidebar();
  };


  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      scrollBehavior={scrollBehavior}
      backdrop={backdrop}
      size="3xl"
      className="bg-plata_claro"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-3xl">
              {cardData ? cardData.title : "Detalles de la Card"}
            </ModalHeader>
            <ModalBody className="flex flex-row items-start">
              {cardData ? (
                <>
                  <div className="flex flex-col justify-start space-y-2">
                    {cardData.images?.slice(1, 5).map((img, idx) => (
                      <Image
                        key={idx}
                        shadow="sm"
                        radius="none"
                        className="w-16 aspect-square object-contain"
                        alt={`Thumbnail ${idx + 1}`}
                        src={img}
                        onClick={() => handleThumbnailClick(img)} // Cambia la imagen principal al hacer clic
                      />
                    ))}
                  </div>
                  <aside className="w-2/3 flex space-x-2">
                    <Image
                      shadow="sm"
                      className="aspect-video object-contain w-full"
                      radius="none"
                      alt={cardData.title}
                      src={selectedImage} // Muestra la imagen seleccionada
                    />
                  </aside>
                  <div className="w-1/3 space-y-1">
                    <p className="text-gris_oscuro">
                      <strong>Brand:</strong> {cardData.brand}
                    </p>
                    <p className="text-gris_oscuro">
                      <strong>Descripción:</strong> {cardData.description}
                    </p>
                    <p className="text-gris_oscuro">
                      <strong>Category:</strong> {cardData.category}
                    </p>
                    <p className="text-gris_oscuro">
                      <strong>Rating:</strong> {cardData.rating}
                    </p>
                    <p className="text-gris_oscuro">
                      <strong>Precio:</strong> ${cardData.price}
                    </p>
                  </div>
                </>
              ) : (
                <p>No se proporcionaron datos para mostrar</p>
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                className="bg-gris_azul text-white font-bold border-none rounded-md w-full"
                onPress={() => {
                  addProductToCart(cardData);
                  onClose();
                }}
              >
                Agregar al carrito
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
