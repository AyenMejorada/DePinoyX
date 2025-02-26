import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useAccount } from "wagmi";

export default function How() {
  return (
    <>
      <div className="flex flex-col gap-32 min-h-screen">
        <Navbar />

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

        <Footer />
      </div>
    </>
  );
}
