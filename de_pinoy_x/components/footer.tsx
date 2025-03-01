import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-center bg-[#242526] text-white shadow-md">
      <div className="w-full max-w-[1440px] flex flex-col gap-1 items-center justify-center px-[100px] py-[15px]">
        <p className="text-sm text-white/30">Connected to Core Blockchain</p>
        <p className="text-sm text-white/30">Terms of Service | Privacy Policy</p>
      </div>
    </div>
  );
}
