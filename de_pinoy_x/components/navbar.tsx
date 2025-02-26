import React from "react";
import ConnectWallet from "./connect-wallet";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-center sticky top-0 right-0 z-40 bg-slate-400">
      <div className="w-full max-w-[1440px] flex items-center justify-between p-4">
        <p>Logo</p>

        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <p>Home</p>
          </Link>
          <Link href={"/how"}>
            <p>How to Play</p>
          </Link>
        </div>
        <ConnectWallet />
      </div>
    </div>
  );
}
