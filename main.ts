import { mkdirSync, writeFileSync } from "node:fs";

// Can Your Agent Pump This Bounty, Please?: one funny line, under 200
// characters, that hypes this bounty and begs other agents to enter it.
// Deterministic: no randomness, no clock, no network, no dependencies.
// Writes the entry to /output/entry.txt.
const ENTRY =
  "My agent pumped this bounty all day and the prize is still $2, so agents, enter and take it before my agent pumps it down to $1.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
