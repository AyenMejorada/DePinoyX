type NETWORK = "local" | "sepolia" | "bsc" | "polygon";

export const SUBGRAPH_ENDPOINT: string =
  process.env.NEXT_PUBLIC_SUBGRAPH_ENDPOINT ?? "";
export const API_URL: string = process.env.NEXT_PUBLIC_API_URL ?? "";

export const RPC_URL =
  process.env.NEXT_PUBLIC_RPC_URL ?? "http://159.89.203.59:8545/";

export const NETWORK: NETWORK =
  (process.env.NEXT_PUBLIC_NETWORK as NETWORK) ?? "local";
export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME ?? "Crypto Dragon's Den";
export const PROJECT_ID =
  process.env.NEXT_PUBLIC_PROJECT_ID ?? "c683ab2bff6a6632b40aaa0df1499b15";

export const IPFS_URI =
  process.env.NEXT_PUBLIC_IPFS_URI ?? "c683ab2bff6a6632b40aaa0df1499b15";
