async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  const Token = await ethers.getContractFactory("DePinoyX");
  const token = await Token.deploy();
  
  await token.waitForDeployment(); // ✅ Replace `.deployed()` with `.waitForDeployment()`

  console.log("Token deployed at:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
