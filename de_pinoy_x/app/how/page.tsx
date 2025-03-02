import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useAccount } from "wagmi";

export default function How() {
  return (
    <>
      <div className="min-h-screen bg-[#121212] text-white font-[Poppins]">
        <Navbar />

        <div className="main-content-htp mx-auto mt-12 p-5 max-w-[900px] text-center mb-20">
          {/* page title */}
          <h1 className="text-[50px] font-bold mb-8 text-[#FF9311]">How to play</h1>

          {/* section ng game overview */}
          <section className="section-htp bg-[#1E1E1E] p-8 rounded-lg mb-6 shadow-[0px_4px_10px_rgba(255,145,17,0.2)]">
            <h2 className="text-[28px] text-[#FF9311] mb-4 font-bold">🎲 Game Overview</h2>
            <p className="text-[18px] leading-relaxed">
              This is a Web3 version of the classic Pinoy Color Game. Bet on colors, win rewards,
              and earn NFTs using Core Tokens (CORE)!
            </p>
          </section>

          {/* section ng Getting Started */}
          <section className="section-htp bg-[#1E1E1E] p-8 rounded-lg mb-6 shadow-[0px_4px_10px_rgba(255,145,17,0.2)]">
            <h2 className="text-[28px] text-[#FF9311] mb-4 font-bold">🛠 Getting Started</h2>
            <p className="text-[18px] leading-relaxed">
              1. <strong>Connect Your Wallet:</strong> Click <u>Connect Wallet</u> and choose a Core Blockchain-supported wallet (e.g., MetaMask).
            </p>
            <p className="text-[18px] leading-relaxed">
              2. <strong>Get CORE Tokens:</strong> Ensure you have CORE in your wallet. If needed, swap or buy CORE from an exchange.
            </p>
          </section>

          {/* section ng How to Play */}
          <section className="section-htp bg-[#1E1E1E] p-8 rounded-lg mb-6 shadow-[0px_4px_10px_rgba(255,145,17,0.2)]">
            <h2 className="text-[28px] text-[#FF9311] mb-4 font-bold">🎮 How to Play</h2>
            <p className="text-[18px] leading-relaxed">
              1. <strong>Enter Your Bet:</strong> Choose how many CORE Tokens you want to bet.
            </p>
            <p className="text-[18px] leading-relaxed">
              2. <strong>Choose Your Colors:</strong> Pick 1 to 6 colors. Your multiplier depends on how many colors you bet on.
            </p>
            <p className="text-[18px] leading-relaxed">
              3. <strong>Place Your Bet:</strong> Click <u>Place Bet</u> to confirm. Your CORE Tokens will be locked in a smart contract.
            </p>
            <p className="text-[18px] leading-relaxed">
              4. <strong>Wait for the Result:</strong> The game rolls and reveals the winning color(s).
            </p>
            <p className="text-[18px] leading-relaxed">
              5. <strong>Win or Try Again:</strong> If your color appears, you win based on the multiplier! If not, part of your bet helps fund NFT rewards.
            </p>
          </section>

          {/* section ng Rewards & Bonuses*/}
          <section className="section-htp bg-[#1E1E1E] p-8 rounded-lg mb-6 shadow-[0px_4px_10px_rgba(255,145,17,0.2)]">
            <h2 className="text-[28px] text-[#FF9311] mb-4 font-bold">🏆 Rewards & Bonuses</h2>
            <p className="text-[18px] leading-relaxed">✅ <strong>NFT Rewards:</strong> Lost bets contribute to the NFT reward pool.</p>
            <p className="text-[18px] leading-relaxed">✅ <strong>Streak Rewards:</strong> Earn bonuses for consecutive wins!</p>
            <p className="text-[18px] leading-relaxed">✅ <strong>Wheel of Fortune:</strong> Spin for surprise prizes!</p>
          </section>

          {/* section ng Web3 & Fairness */}
          <section className="section-htp bg-[#1E1E1E] p-8 rounded-lg mb-6 shadow-[0px_4px_10px_rgba(255,145,17,0.2)]">
            <h2 className="text-[28px] text-[#FF9311] mb-4 font-bold">🔐 Web3 & Fairness</h2>
            <p className="text-[18px] leading-relaxed">✔️ The game runs on <strong>smart contracts</strong>, ensuring full transparency.</p>
            <p className="text-[18px] leading-relaxed">✔️ No centralized control – everything is <strong>blockchain-based</strong>.</p>
            <p className="text-[18px] leading-relaxed">✔️ Earn <strong>real-value NFTs</strong> that you can trade outside the game.</p>
          </section>

          {/* section ng Web3 & Fairness */}
          <section className="section-htp bg-[#1E1E1E] p-8 rounded-lg mb-6 shadow-[0px_4px_10px_rgba(255,145,17,0.2)]">
            <h2 className="text-[28px] text-[#FF9311] mb-4 font-bold">❓ Need Help?</h2>
            <p className="text-[18px] leading-relaxed">For support, check out our FAQ page or join our community!</p>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
