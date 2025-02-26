"use client";
import { defineChain, http } from "viem";

import { getDefaultConfig, WalletList } from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  walletConnectWallet,
  trustWallet,
  metaMaskWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";

const wallets: WalletList = [
  {
    groupName: "Recommended",
    wallets: [
      rainbowWallet,
      trustWallet,
      walletConnectWallet,
      metaMaskWallet,
      coinbaseWallet,
    ],
  },
];

const RPC_URL = "https://rpc.test2.btcs.network";
const APP_NAME = "DPX";
const PROJECT_ID = "DPX_123";

export const tcore2 = defineChain({
  id: 1114,
  name: "Core Blockchain Testnet2",
  nativeCurrency: {
    name: "Core Blockchain Testnet2",
    symbol: "tCORE2",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [RPC_URL],
    },
  },
});

function getConfig() {
  return getDefaultConfig({
    appName: APP_NAME,
    projectId: PROJECT_ID,
    wallets: wallets,
    chains: [tcore2],
    transports: {
      [tcore2.id]: http(RPC_URL),
    },
  });
}

export const WAGMI_CONFIG = getConfig();
