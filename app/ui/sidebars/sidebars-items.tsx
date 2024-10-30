"use client";

import { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { montserrat } from "@/app/ui/fonts";
import { SidebarContext } from "./sidebars";

import { Tooltip, Button } from "@nextui-org/react";

import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  ChartPieIcon,
  PencilSquareIcon,
  BookOpenIcon,
  StarIcon,
} from "@heroicons/react/20/solid";

const links = [
  { name: "Beranda", href: "/", icon: HomeIcon },
  { name: "Perpustakaan", href: "/pst", icon: BookOpenIcon },
  { name: "Buku Tamu", href: "/guest", icon: PencilSquareIcon },
  { name: "SKM", href: "/feedback", icon: StarIcon },
];

export default function SidebarsItem() {
  const pathname = usePathname();
  const expanded = useContext(SidebarContext);
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <div key={link.name}>
            <Tooltip
              color="primary"
              placement="right"
              isDisabled={expanded}
              content={link.name}
            >
              <Link
                href={link.href}
                className={clsx(
                  `${montserrat.className} ${
                    expanded ? "justify-start flex-none" : "justify-center"
                  } flex h-[48px] items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600`,
                  {
                    "bg-sky-200 text-blue-800":
                      "/" + pathname.split("/")[1] === link.href,
                  }
                )}
              >
                <LinkIcon className="w-7" />
                <p className={`${expanded ? "block" : "hidden"}`}>
                  {link.name}
                </p>
              </Link>
            </Tooltip>
          </div>
        );
      })}
    </>
  );
}
