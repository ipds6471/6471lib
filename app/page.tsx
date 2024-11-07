"use client";

import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Spinner,
} from "@nextui-org/react";

export default function Page() {
  return (
    <div className="w-screen max-h-screen">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <p className="font-bold text-white text-2xl md:text-6xl">
          6471 LIBRARY
        </p>
      </div>
    </div>
  );
}
