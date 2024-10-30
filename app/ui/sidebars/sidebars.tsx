"use client";

import { useState, useEffect, createContext } from "react";
import Link from "next/link";

import { montserrat } from "@/app/ui/fonts";
import SidebarsItem from "./sidebars-items";
import useScreenSize from "@/app/lib/use-screen-size";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";

type SidebarContextType = true | false;
export const SidebarContext = createContext<SidebarContextType>(true);

export default function Sidebars() {
  const screenSize = useScreenSize();
  const [expanded, setExpanded] = useState(true);
  //   768
  useEffect(() => {
    if (screenSize.width < 768) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }, [screenSize.width]);

  return (
    <Card className={`${expanded ? "min-w-72 w-72" : "w-20"}`}>
      <CardHeader
        className={`flex ${expanded ? "justify-between" : "justify-center"}`}
      >
        <div className={`items-center gap-3 ${expanded ? "flex" : "hidden"}`}>
          <HeartIcon className="size-10" />
          <div className="flex flex-col">
            <Link key="/" href="/" className="">
              <p className={`${montserrat.className} text-md font-bold`}>
                Project Template
              </p>
            </Link>
          </div>
        </div>
        <Button
          isIconOnly
          color="primary"
          variant="ghost"
          aria-label="sidebar-collapse"
          onPress={() => setExpanded((prev) => !prev)}
        >
          {expanded ? (
            <ChevronLeftIcon className="size-8" />
          ) : (
            <ChevronRightIcon className="size-8" />
          )}
        </Button>
      </CardHeader>
      <CardBody>
        <SidebarContext.Provider value={expanded}>
          <SidebarsItem />
        </SidebarContext.Provider>
      </CardBody>
      <Divider />
      <CardFooter
        className={`${expanded ? "justify-between" : "justify-center"}`}
      >
        <div className="flex gap-3 items-center px-3">
          <Image src="/bps-logo.png" width={30} alt="bps logo" />
          <p className={`${expanded ? "block" : "hidden"}`}>&copy;BPS6471</p>
        </div>
        <p className={`${expanded ? "block" : "hidden"} text-xs pe-3`}>
          v2.0.0
        </p>
      </CardFooter>
    </Card>
  );
}
