"use client";

import type { FunctionComponent } from "react";

// UI
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Spinner,
  Progress,
} from "@nextui-org/react";
import type { PressEvent } from "@react-types/shared";

export default function FeedbackCard({
  item,
  index,
  func,
}: {
  item: {
    title: string;
    value: number;
    img: string;
  };
  index: React.Key;
  func: any;
}) {
  return (
    <Card
      shadow="sm"
      key={index}
      isPressable
      onPress={func}
      className="border-4 border-success"
    >
      <CardBody className="overflow-visible p-0 w-40">
        <Image
          isZoomed
          shadow="sm"
          radius="lg"
          width="100%"
          alt={item.title}
          className="w-full object-cover"
          src={item.img}
        />
      </CardBody>
      <CardFooter className="text-lg justify-center p-0">
        <b>{item.title}</b>
      </CardFooter>
    </Card>
  );
}
