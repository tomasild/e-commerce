import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  useDisclosure,
} from "@nextui-org/react";

export default function CardModal({ isOpen, onClose, cardData, onAddToCart }) {
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const [backdrop, setBackdrop] = useState("blur");

  useEffect(() => {
    if (isOpen && cardData) {
      console.log("Modal abierto con datos:", cardData);
    }
  }, [isOpen, cardData]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      scrollBehavior={scrollBehavior}
      backdrop={backdrop}
      size="3xl"
      className="bg-slate-300"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              {cardData ? cardData.title : "Detalles de la Card"}
            </ModalHeader>
            <ModalBody>
              {cardData ? (
                <>
                  <p>
                    <strong>Descripción:</strong> {cardData.description}
                  </p>
                  <p>
                    <strong>Precio:</strong> ${cardData.price}
                  </p>
                  <Image
                    shadow="sm"
                    radius="none"
                    width="100%"
                    alt={cardData.title}
                    src={cardData.images?.[0] || ""}
                  />
                </>
              ) : (
                <p>No se proporcionaron datos para mostrar</p>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  onAddToCart();
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
