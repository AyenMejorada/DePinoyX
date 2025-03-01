"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();

  if (address) {
    return (
      <>
        <div className="flex flex-col gap-16 min-h-screen justify-between">
          <Navbar />
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[1440px] flex flex-col items-center gap-4">
              <div className="w-full flex flex-col items-center gap-4 max-w-[860px]">
                <p>Enter Your Bet (BEMBAND)</p>
                <Input></Input>
                <p>Choose how many colors to bet</p>

                <div className="flex justify-center items-center gap-4">
                  <Button>1 Color</Button>
                  <Button>2 Color</Button>
                  <Button>3 Color</Button>
                  <Button>4 Color</Button>
                  <Button>5 Color</Button>
                  <Button>6 Color</Button>
                </div>

                <p>Select Colors</p>

                <div className="flex justify-center items-center gap-4">
                  <Button>Red</Button>
                  <Button>Blue</Button>
                  <Button>Pink</Button>
                  <Button>Green</Button>
                  <Button>Yellow</Button>
                  <Button>Purple</Button>
                </div>

                <Button>Place Bet</Button>
                <Button>Draw</Button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between bg-[#121212] text-[#E3E3E3] font-[Poppins]">
        <Navbar />
        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-[1440px] flex flex-col gap-32">
            <div className="flex flex-col gap-8">
              <p className="text-7xl font-bold">DePinoy Color Game</p>
              <p className="text-5xl">powered by Core</p>
              <p className="text-2xl">
                Inspired by the classic Filipino color game, now reimagined for
                the Web3 era! Bet, spin, and win with fast payouts, secure
                blockchain transactions, and thrilling real-time gameplay.
                Whether you're in the Philippines or anywhere in the world, luck
                is just a spin away!
              </p>

              <Button className="w-fit" size={"lg"}>
                Play Now
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
