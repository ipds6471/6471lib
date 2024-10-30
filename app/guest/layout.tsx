"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const tabs = [
    {
      key: "/guest",
      label: "Buku Tamu",
      url: "/guest",
    },
    {
      key: "/guest/history",
      label: "Riwayat",
      url: "/guest/history",
    },
  ];
  return (
    <div className="w-screen max-h-screen">
      <Tabs
        aria-label="Dynamic tabs guest book"
        items={tabs}
        radius="lg"
        variant="bordered"
        color="primary"
        selectedKey={pathname}
      >
        {(item) => (
          <Tab key={item.key} title={item.label} as={Link} href={item.url}>
            <Card className="h-full">
              <CardBody>{children}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}