require("dotenv").config();
const hre = require("hardhat");

async function main() {
    // Load contract addresses from environment variables
    const DPXTokenAddress = process.env.DPX_TOKEN_ADDRESS;
    const SwitchboardVRFAddress = process.env.VRF_COORDINATOR;

    if (!DPXTokenAddress || !SwitchboardVRFAddress) {
        console.error("❌ Missing contract addresses. Set DPX_TOKEN_ADDRESS and VRF_COORDINATOR in .env");
        process.exit(1);
    }

    console.log("🚀 Deploying ColorGame contract...");
    console.log(`🎯 Using DPX Token: ${DPXTokenAddress}`);
    console.log(`🎲 Using VRF Coordinator: ${SwitchboardVRFAddress}`);

    // Deploy the ColorGame contract
    const ColorGame = await hre.ethers.getContractFactory("ColorGame");
    const game = await ColorGame.deploy(DPXTokenAddress, SwitchboardVRFAddress, {
        gasLimit: 5000000, // Adjust based on estimated gas usage
    });

    await game.deployed();
    console.log(`✅ ColorGame deployed successfully at: ${game.address}`);

    // Log the transaction details
    console.log(`📜 Transaction hash: ${game.deployTransaction.hash}`);
    console.log(`🌐 Network: ${hre.network.name}`);

    // Optional: Auto-verify contract on Etherscan
    if (process.env.ETHERSCAN_API_KEY) {
        console.log("🔍 Verifying contract on Etherscan...");
        await hre.run("verify:verify", {
            address: game.address,
            constructorArguments: [DPXTokenAddress, SwitchboardVRFAddress],
        });
        console.log("✅ Contract verified on Etherscan!");
    } else {
        console.log("⚠️ Skipping Etherscan verification (ETHERSCAN_API_KEY not set).");
    }
}

// Execute the script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("❌ Deployment failed:", error);
        process.exit(1);
    });
