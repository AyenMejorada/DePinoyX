// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface ISwitchboard {
    function requestRandomWords(
        uint32 numWords, 
        uint16 minConfirmations, 
        uint32 callbackGasLimit
    ) external returns (bytes32 requestId);
}

contract ColorGame {
    IERC20 public DePinoyX;
    ISwitchboard public vrfCoordinator;
    address public owner;

    uint256 public constant MIN_BET = 1 ether;
    uint256 public constant MAX_BET = 100 ether;
    uint8 public constant TOTAL_COLORS = 6;

    struct Bet {
        address player;
        uint256 amount;
        uint8[] chosenColors;
    }

    mapping(bytes32 => Bet) public bets;
    mapping(address => uint256) public pendingWins;

    event BetPlaced(address indexed player, uint256 amount, uint8[] chosenColors, bytes32 requestId);
    event GameResult(address indexed player, uint8[3] winningColors, uint256 payout);

    modifier onlyVRF() {
        require(msg.sender == address(vrfCoordinator), "Unauthorized VRF callback");
        _;
    }

    constructor(address _dpxToken, address _vrfCoordinator) {
        DePinoyX = IERC20(_dpxToken);
        vrfCoordinator = ISwitchboard(_vrfCoordinator);
        owner = msg.sender;
    }

    function placeBet(uint256 amount, uint8[] memory chosenColors) external {
        require(amount >= MIN_BET && amount <= MAX_BET, "Invalid bet amount");
        require(chosenColors.length > 0 && chosenColors.length <= 3, "Choose 1 to 3 colors");

        for (uint8 i = 0; i < chosenColors.length; i++) {
            require(chosenColors[i] < TOTAL_COLORS, "Invalid color selection");
        }

        require(DePinoyX.transferFrom(msg.sender, address(this), amount), "Bet transfer failed");

        bytes32 requestId = vrfCoordinator.requestRandomWords(1, 3, 200000);

        bets[requestId] = Bet(msg.sender, amount, chosenColors);

        emit BetPlaced(msg.sender, amount, chosenColors, requestId);
    }

    function onRandomnessResponse(bytes32 requestId, uint256[] memory randomWords) external onlyVRF {
        require(bets[requestId].player != address(0), "Bet not found");
        require(randomWords.length > 0, "Invalid randomness response");

        uint8[3] memory winningColors = generateWinningColors(randomWords[0]);

        uint256 payout = calculatePayout(bets[requestId].amount, bets[requestId].chosenColors, winningColors);

        address player = bets[requestId].player;

        if (payout > 0) {
            pendingWins[player] += payout;
        }

        delete bets[requestId];

        emit GameResult(player, winningColors, payout);
    }

    function generateWinningColors(uint256 randomValue) internal pure returns (uint8[3] memory) {
        uint8[3] memory winningColors;
        bool[6] memory used;

        for (uint8 i = 0; i < 3; i++) {
            uint8 color;
            do {
                color = uint8(randomValue % TOTAL_COLORS);
                randomValue /= TOTAL_COLORS;
            } while (used[color]);

            winningColors[i] = color;
            used[color] = true;
        }
        return winningColors;
    }

    function calculatePayout(uint256 betAmount, uint8[] memory chosenColors, uint8[3] memory winningColors) internal pure returns (uint256) {
        bool[6] memory isWinningColor;
        uint256 hits = 0;

        for (uint8 i = 0; i < 3; i++) {
            isWinningColor[winningColors[i]] = true;
        }

        for (uint8 i = 0; i < chosenColors.length; i++) {
            if (isWinningColor[chosenColors[i]]) {
                hits++;
            }
        }

        return hits > 0 ? (betAmount * (3 + hits)) / 3 : 0;
    }

    function claimWinnings() external {
        uint256 amount = pendingWins[msg.sender];
        require(amount > 0, "No winnings to claim");
        pendingWins[msg.sender] = 0;
        require(DePinoyX.transfer(msg.sender, amount), "Payout transfer failed");
    }

    function withdrawFunds(uint256 amount) external {
        require(msg.sender == owner, "Only owner can withdraw");
        require(DePinoyX.transfer(owner, amount), "Withdraw transfer failed");
    }
}
