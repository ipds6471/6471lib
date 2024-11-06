"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Page() {
  const list = [
    {
      title: "Perpustakaan",
      img: "/pst/library.jpg",
      url: "https://perpustakaan.bps.go.id/digilib/",
    },
    {
      title: "Katalog Publik",
      img: "/pst/catalog.jpg",
      url: "https://perpustakaan.bps.go.id/opac//",
    },
    {
      title: "Buku Tamu BPS",
      img: "/pst/guest.jpg",
      url: "https://perpustakaan.bps.go.id/digilib/guestbook/",
    },
    {
      title: "Website BPS Kota Balikpapan",
      img: "/pst/office-building.jpg",
      url: "https://www.balikpapankota.bps.go.id/",
    },
  ];
  return (
    <div className="gap-3 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => {
            window.open(item.url, "_blank")?.focus();
          }}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              isZoomed
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[240px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
