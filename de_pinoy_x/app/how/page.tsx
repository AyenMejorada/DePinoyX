import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-32 min-h-screen">
        <div className="w-full flex items-center justify-center sticky top-0 right-0 z-40 bg-slate-400">
          <div className="w-full max-w-[1440px] flex items-center justify-between p-4">
            <p>Logo</p>

            <div className="flex items-center gap-4">
              <p>Home</p>
              <p>How to Play</p>
              <p>My NFTs</p>
            </div>
            <p>Connect Wallet</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-[1440px] flex flex-col items-center gap-4">
            <p className="text-5xl font-bold">How to play</p>

            <div className="border p-4 gap-4 flex flex-col items-center w-full max-w-[860px] rounded-xl">
              <div className="flex items-center gap-4">
                <p className="font-bold">ICON</p>
                <p className="text-4xl font-bold">Game Overview</p>
              </div>

              <p className="text-xl font-bold text-center">
                This is a Web3 version of the classic Pinoy Color Game. Bet on
                colors, win rewards, and earn NFTs using Core Tokens (CORE)!
              </p>
            </div>

            <div className="border p-4 gap-4 flex flex-col items-center w-full max-w-[860px] rounded-xl">
              <div className="flex items-center gap-4">
                <p className="font-bold">ICON</p>
                <p className="text-4xl font-bold">Getting Started</p>
              </div>
              <p className="text-xl font-bold text-center">
                1. Connect Your Wallet: Click "Connect Wallet" and choose a Core
                Blockchain-supported wallet (e.g., MetaMask).
              </p>
              <p className="text-xl font-bold text-center">
                2. Get CORE Tokens: Ensure you have CORE in your wallet. If
                needed, swap or buy CORE from an exchange.
              </p>
            </div>

            <div className="border p-4 gap-4 flex flex-col items-center w-full max-w-[860px] rounded-xl">
              <div className="flex items-center gap-4">
                <p className="font-bold">ICON</p>
                <p className="text-4xl font-bold">How to Play</p>
              </div>
              <p className="text-xl font-bold text-center">
                1. Enter Your Bet: Choose how many CORE Tokens you want to bet.
              </p>
              <p className="text-xl font-bold text-center">
                2. Choose Your Colors: Pick 1 to 6 colors. Your multiplier
                depends on how many colors you bet on.
              </p>
              <p className="text-xl font-bold text-center">
                3. Place Your Bet: Click "Place Bet" to confirm. Your CORE
                Tokens will be locked in a smart contract.
              </p>
              <p className="text-xl font-bold text-center">
                4. Wait for the Result: The game rolls and reveals the winning
                color(s).
              </p>{" "}
              <p className="text-xl font-bold text-center">
                5. Win or Try Again: If your color appears, you win based on the
                multiplier! If not, part of your bet helps fund NFT rewards.
              </p>
            </div>

            <div className="border p-4 gap-4 flex flex-col items-center w-full max-w-[860px] rounded-xl">
              <div className="flex items-center gap-4">
                <p className="font-bold">ICON</p>
                <p className="text-4xl font-bold">Rewards & Bonuses</p>
              </div>

              <p className="text-xl font-bold text-center">
                ✅ NFT Rewards: Lost bets contribute to the NFT reward pool.
              </p>

              <p className="text-xl font-bold text-center">
                ✅ NFT Rewards: Lost bets contribute to the NFT reward pool.
              </p>
              <p className="text-xl font-bold text-center">
                ✅ NFT Rewards: Lost bets contribute to the NFT reward pool.
              </p>
            </div>

            <div className="border p-4 gap-4 flex flex-col items-center w-full max-w-[860px] rounded-xl">
              <div className="flex items-center gap-4">
                <p className="font-bold">ICON</p>
                <p className="text-4xl font-bold">Game Overview</p>
              </div>

              <p className="text-xl font-bold text-center">
                This is a Web3 version of the classic Pinoy Color Game. Bet on
                colors, win rewards, and earn NFTs using Core Tokens (CORE)!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
