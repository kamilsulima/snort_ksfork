import { FormattedMessage } from "react-intl";

export const FixedModeration = {
  /*hateSpeech: {
    title: <FormattedMessage defaultMessage="Hate Speech" />,
    words: [],
    canEdit: false,
  },
  derogatory: {
    title: <FormattedMessage defaultMessage="Derogatory" />,
    words: [],
    canEdit: false,
  },*/
  nsfw: {
    title: <FormattedMessage defaultMessage="NSFW" />,
    words: [
      "adult content",
      "explicit",
      "mature audiences",
      "18+",
      "sensitive content",
      "graphic content",
      "age-restricted",
      "explicit material",
      "adult material",
      "nsfw",
      "explicit images",
      "adult film",
      "adult video",
      "mature themes",
      "sexual content",
      "graphic violence",
      "strong language",
      "explicit language",
      "adult-only",
      "mature language",
      "sex",
    ],
    canEdit: false,
  },
  crypto: {
    title: <FormattedMessage defaultMessage="Crypto" />,
    words: [
      "bitcoin",
      "btc",
      "satoshi",
      "crypto",
      "blockchain",
      "mining",
      "wallet",
      "exchange",
      "halving",
      "hash rate",
      "ledger",
      "crypto trading",
      "digital currency",
      "virtual currency",
      "cryptocurrency investment",
      "altcoin",
      "decentralized finance",
      "defi",
      "token",
      "ico",
      "crypto wallet",
      "satoshi nakamoto",
    ],
    canEdit: false,
  },
  politics: {
    title: <FormattedMessage defaultMessage="Politics" />,
    words: [
      "politics",
      "election",
      "democrat",
      "republican",
      "senate",
      "congress",
      "parliament",
      "president",
      "prime minister",
      "policy",
      "legislation",
      "vote",
      "campaign",
      "government",
      "political party",
      "lobbying",
      "referendum",
      "bill",
      "conservative",
      "liberal",
      "left-wing",
      "right-wing",
      "socialist",
      "capitalist",
      "diplomacy",
      "sanction",
      "geopolitics",
      "activism",
      "protest",
      "rally",
    ],
    canEdit: false,
  },
};
