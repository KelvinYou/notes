# Web3 Dev Notes

My personal notes from exploring Web3 development. Context: I come from a React/TypeScript/Go background.

---

## My Stack

| Layer | Tool | Why |
|-------|------|-----|
| Smart contracts | Solidity + Hardhat | Industry standard, best tooling |
| Frontend | React + Ethers.js | Familiar stack, Ethers.js is cleaner than Web3.js |
| Wallet connection | wagmi + RainbowKit | Abstracts the painful wallet adapter logic |
| Testnet | Sepolia | Goerli deprecated; Sepolia is the current standard |
| Contract testing | Hardhat + Chai | Test in TypeScript, feels like regular unit tests |

---

## Mental Model Shifts from Web2

**State is public and permanent.** Unlike a DB where you control access, everything on-chain is readable. Private variables are not private from someone reading raw storage.

**Transactions are asynchronous + costly.** Every write costs gas. Users pay. Design UX around "pending transaction" states — they're not instant.

**No backend for logic.** The EVM is the compute layer. Complex logic = high gas = user friction. Keep contracts minimal; put non-critical logic off-chain.

**Upgradability is hard.** Deployed contracts are immutable by default. Use proxy patterns (OpenZeppelin's UUPS or Transparent Proxy) if you need upgradability, but understand the tradeoffs.

---

## Gotchas I've Hit

**Reentrancy** — external calls can trigger your contract again before the first call finishes. Fix: follow Checks-Effects-Interactions pattern, or use OpenZeppelin's `ReentrancyGuard`.

**Integer overflow** (pre-Solidity 0.8) — use Solidity ≥0.8 which reverts on overflow by default. Or use SafeMath if stuck on older versions.

**Approvals and allowances** — ERC-20 `approve` + `transferFrom` is a two-step flow. Common UX problem: users forget to approve before calling your contract.

**Front-running** — validators can see pending transactions and insert their own. Matters for DEX trades, auctions. Mitigation: commit-reveal schemes.

---

## Resources I Actually Used

- [CryptoZombies](https://cryptozombies.io/) — best interactive Solidity intro
- [Hardhat docs](https://hardhat.org/docs) — my go-to for local dev
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/) — use these, don't write your own ERC-20
- [Ethereum docs](https://ethereum.org/en/developers/docs/) — source of truth for EVM/protocol details
