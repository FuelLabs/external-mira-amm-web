import type { TxParams } from "fuels";

export const DEFAULT_AMM_CONTRACT_ID =
  "0x68753c7eba71722d7898fd156d10af32ae9c80d4ee826509fbc07e255d5d985d" as const;
export const FaucetContractAddress = '0xa1ada1dcab2524dc7f030bbff36c14ede24efd8becffac022a4c501e977e13c6' as const;

export const DefaultTxParams: TxParams = {
  gasLimit: 10_000_000,
  maxFee: 1_000_000,
} as const;

export const MaxDeadline = 4_294_967_295 as const;

export const DiscordLink = 'https://discord.gg/6pHdTY6rYq' as const;
export const XLink = 'https://x.com/MiraProtocol' as const;
export const BlogLink = "https://mirror.xyz/miraly.eth" as const;

export const ValidNetworkChainId = 9889 as const;
export const TestnetUrl: string = process.env.PRIVATE_MAINNET_URL!;

export const IndexerUrl = 'https://indexer.bigdevenergy.link/99318f9/v1/graphql' as const;

// TODO: Use env variables for dev/prod
export const ApiBaseUrl = 'https://dev.api.mira.ly' as const;

export const MinEthValue = 0.001 as const;
export const MinEthValueBN = MinEthValue * 10 ** 9;

export const DefaultLocale = 'en-US' as const;
