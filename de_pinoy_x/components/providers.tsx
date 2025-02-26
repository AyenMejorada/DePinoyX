"use client";
import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WAGMI_CONFIG } from "@/lib/web3";
import { Toaster } from "@/components/ui/sonner";
const queryClient = new QueryClient();

interface IProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: IProvidersProps) {
  return (
    <WagmiProvider config={WAGMI_CONFIG}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}

          <Toaster />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
