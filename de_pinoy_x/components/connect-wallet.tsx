import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ConnectWallet() {
  return (
    <div className="connect-wallet">
      <ConnectButton
        showBalance={false}
        chainStatus="none"
      />
    </div>
  );
}

