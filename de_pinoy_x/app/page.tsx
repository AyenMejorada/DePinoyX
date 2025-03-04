"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAccount } from "wagmi";
import { useState } from "react";

export default function Home() {
  const { address } = useAccount();
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [betAmount, setBetAmount] = useState<string>("");
  const [selectedBet, setSelectedBet] = useState<string>("");

  const toggleColor = (color: string) => {
    if (!betAmount) return; // Disable selection if no bet amount is entered
    const numberOfColors = parseInt(selectedBet.charAt(0));

    setSelectedColors((prev) => {
      if (numberOfColors === 1) {
        // If bet is "1 Color", only allow one color selection at a time
        return [color];
      } else if (prev.includes(color)) {
        // Deselect if already selected
        return prev.filter((c) => c !== color);
      } else if (prev.length < numberOfColors) {
        // Add color if below the limit
        return [...prev, color];
      }
      return prev; // No change if limit reached
    });
  };

  const selectBet = (bet: string) => {
    if (!betAmount) return;
    setSelectedBet(bet); // Set bet selection
    setSelectedColors([]); // Clear previous color selections when bet changes
  };

  const isBettingEnabled =
    betAmount.trim() !== "" &&
    selectedBet !== "" &&
    parseInt(selectedBet.charAt(0)) === selectedColors.length;

  const resetBet = () => {
  setBetAmount("");
  setSelectedBet("");
  setSelectedColors([]);
};

  if (address) {
    return (
      <div className="min-h-screen bg-[#121212] text-white">
        <div className="flex flex-col gap-16 min-h-screen justify-between font-[Poppins]">
          <Navbar />
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-4">
              <div className="w-full flex flex-col items-center gap-4 max-w-[860px]">
                <p>Enter Your Bet (BEMBANG)</p>
                <Input
                  placeholder="Min Bet: 1 BEMBANG | Max Bet: 100 BEMBANG"
                  className="w-full max-w-[700px]"
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                />

                <p>Choose how many colors to bet</p>
                <div className="flex justify-center items-center gap-4">
                  {["1 Color", "2 Colors", "3 Colors", "4 Colors", "5 Colors", "6 Colors"].map((label) => (
                    <Button
                      key={label}
                      variant="bet"
                      onClick={() => selectBet(label)}
                      selected={selectedBet === label}
                      disabled={!betAmount}
                    >
                      {label}
                    </Button>
                  ))}
                </div>

                <p>Select Colors</p>
                <div className="flex justify-center items-center gap-4">
                  {["red", "blue", "green", "pink", "yellow", "purple"].map((color) => (
                    <Button
                      key={color}
                      variant="color"
                      colorClass={`color-${color}`}
                      selected={selectedColors.includes(color)}
                      onClick={() => toggleColor(color)}
                      disabled={!betAmount || !selectedBet}
                      className="w-[110px] h-[110px] text-xl"
                    >
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </Button>
                  ))}
                </div>

                <div className="flex justify-center gap-4 mt-10">
                  <Button
                    variant="action"
                    disabled={!isBettingEnabled}
                    onClick={() => console.log("Bet placed", selectedColors, selectedBet)}
                  >
                    Place Bet
                  </Button>
                  <Button
                    variant="action"
                    disabled={!betAmount && !selectedBet && selectedColors.length === 0}
                    onClick={resetBet}
                  >
                    Cancel Bet
                  </Button>

                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen justify-between bg-[#121212] text-[#E3E3E3] font-[Poppins]">
      <Navbar />
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[1440px] flex flex-col gap-32">
          <div className="flex flex-col gap-8">
            <p className="text-7xl font-bold">DePinoy Color Game</p>
            <p className="text-5xl">powered by Core</p>
            <p className="text-2xl">
              Inspired by the classic Filipino color game, now reimagined for the Web3 era! 
              Bet, spin, and win with fast payouts, secure blockchain transactions, and thrilling real-time gameplay.
            </p>
            <Button
              variant="play"
              className="w-[200px] text-xl px-8 py-4 rounded-full"
            >
              Play Now
            </Button>



          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
