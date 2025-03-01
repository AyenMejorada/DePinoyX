import React from "react";
import ConnectWallet from "./connect-wallet";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-center sticky top-0 right-0 z-40 bg-[#242526] px-[100px] py-[20px] shadow-[0px_4px_100px_rgba(255,140,0,0.5)]">
      <div className="w-full max-w-[1440px] flex items-center justify-between">
        <p className="text-white">Logo</p>

        <div className="flex items-center gap-5">
          <Link href={"/"} className="relative text-[#E3E3E3] font-normal transition-all duration-300 group">
            <span className="group-hover:text-[#FF9311]">Home</span>
            <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#FF9311] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
          <Link href={"/how"} className="relative text-[#E3E3E3] font-normal transition-all duration-300 group">
            <span className="group-hover:text-[#FF9311]">How to Play</span>
            <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#FF9311] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>
        </div>

        <ConnectWallet />
      </div>
    </div>
  );
}
