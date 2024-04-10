import React from "react";
import { Card, CardBody, CardFooter, Image, Button, Chip } from "@nextui-org/react";

export default function CardUI({ data }) {
  console.log(data);

  const AddToCart = () => {
    return (
      <Button
        isIconOnly
        color="danger"
        variant="solid"
        radius="full"
        aria-label="Add to cart"
        className=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    );
  };

  return (
    <Card isFooterBlurred shadow="sm" isBlurred>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={data.title}
          className="w-full object-cover h-[240px]"
          src={data.images && data.images.length > 0 ? data.images[0] : ""}
        />
        <div className="absolute top-2 right-2 z-50">
          <AddToCart />
        </div>
        <div className="absolute top-2 left-2 z-50">
          <Chip color="primary">{data.category}</Chip>
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{data.title}</b>
        <b className="text-lg">${data.price}</b>
      </CardFooter>
    </Card>
  );
}
