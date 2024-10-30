"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      {children}
      {/* <QueryClientProvider client={queryClient}>
            </QueryClientProvider> */}
    </NextUIProvider>
  );
}
