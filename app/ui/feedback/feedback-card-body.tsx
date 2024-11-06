"use client";

// UI
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Spinner,
  Progress,
} from "@nextui-org/react";

export function FCardBody({
  item,
}: {
  item: {
    title: string;
    value: number;
    img: string;
  };
}) {
  return (
    <CardBody className="overflow-visible p-0">
      <Image
        isZoomed
        shadow="sm"
        radius="lg"
        width="100%"
        alt={item.title}
        className="w-40 object-cover"
        src={item.img}
      />
    </CardBody>
  );
}

export function FCardFooter({
  item,
}: {
  item: {
    title: string;
    value: number;
    img: string;
  };
}) {
  return (
    <CardFooter className="text-md justify-center h-full max-w-40 p-1">
      <p className="">{item.title}</p>
    </CardFooter>
  );
}
