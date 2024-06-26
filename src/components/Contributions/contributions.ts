export type CardInfo = {
  title: string;
  description: string;
  imgUrl: string;
  tags: TagType[];
  url: string;
};

export const Resources: CardInfo[] = [
  {
    title: 'WELLDONE Code(1) — Remix IDE plugin for Multichain',
    description: 'Introducing WELLDONE Code (Remix IDE Plugin) to NEAR Protocol Medium.',
    imgUrl: '/img/contrubution/near/code.png',
    tags: ['near', 'welldonecode', 'remix', 'article'],
    url: 'https://medium.com/nearprotocol/welldone-code-1-remix-ide-plugin-for-multichain-4b5228419ce5',
  },
  {
    title: 'WELLDONE Code(2) — Don’t trust, verify.',
    description: 'Introducing WELLDONE Code (Verification) to NEAR Protocol Medium.',
    imgUrl: '/img/contrubution/near/code.png',
    tags: ['near', 'welldonecode', 'article'],
    url: 'https://medium.com/nearprotocol/welldone-code-2-dont-trust-verify-92a7ae2fe0b2',
  },
  {
    title: 'AwesomeNEAR - WELLDONE Wallet',
    description: 'Wallet for Web3 Voyagers',
    imgUrl: '/img/contrubution/near/wallet.png',
    tags: ['near', 'welldonewallet'],
    url: 'https://awesomenear.com/welldone-wallet',
  },
  {
    title: 'NEAR Wallet Selector',
    description:
      'This is a wallet selector modal that allows users to interact with NEAR dApps with a selection of available wallets.',
    imgUrl: '/img/contrubution/near/wallet.png',
    tags: ['near', 'welldonewallet', 'opensource'],
    url: 'https://github.com/near/wallet-selector/pull/477',
  },
  {
    title: 'APTOS SLIP-0044 Signer',
    description: 'Create Account with hdpath 637',
    imgUrl: '/img/contrubution/aptos/wallet.png',
    tags: ['aptos', 'welldonewallet', 'opensource'],
    url: 'https://github.com/aptos-labs/aptos-core/pull/2073',
  },
  {
    title: 'APTOS Wallet Adapter',
    description: 'A monorepo modular wallet adapter for Aptos applications',
    imgUrl: '/img/contrubution/aptos/wallet.png',
    tags: ['aptos', 'welldonewallet', 'opensource'],
    url: 'https://github.com/aptos-labs/aptos-wallet-adapter/pull/74',
  },
  {
    title: 'NEAR Official Docs',
    description: 'Introduction to how to use WELLDONE Code on NEAR',
    imgUrl: '/img/contrubution/near/code.png',
    tags: ['near', 'welldonecode', 'remix', 'article'],
    url: 'https://docs.near.org/tools/remix-ide-plugin',
  },
  {
    title: 'APTOS Official Docs',
    description: 'Introduction to how to use WELLDONE Code on Aptos',
    imgUrl: '/img/contrubution/aptos/code.png',
    tags: ['aptos', 'welldonecode', 'remix', 'article'],
    url: 'https://aptos.dev/community/contributions/remix-ide-plugin/',
  },
  {
    title: 'Add Ed25519Keypair.fromDerivePath method',
    description:
      `make keypair from sui derive path (m/44'/784'/0'/0'/0')`,
    imgUrl: '/img/contrubution/sui/wallet.png',
    tags: ['sui', 'welldonewallet'],
    url: 'https://github.com/MystenLabs/sui/pull/2900',
  },
  {
    title: 'SUI Directory - WELLDONE Wallet',
    description:
      'WELLDONE Wallet is an integrated, non-custodial wallet that allows you to freely manage your assets across any network.',
    imgUrl: '/img/contrubution/sui/wallet.png',
    tags: ['sui', 'welldonewallet'],
    url: 'https://sui.directory/project/welldone-wallet/',
  },
  {
    title: 'SUI Directory - WELLDONE Code',
    description:
      'WELLDONE Code is a web-based tool with Move module deployment features and capabilities for developers to interact with deployed modules.',
    imgUrl: '/img/contrubution/sui/code.png',
    tags: ['sui', 'welldonecode'],
    url: 'https://sui.directory/project/welldone-code/',
  },
  {
    title: 'SUI Developer Portal - WELLDONE Code',
    description:
      'This plug-in for the Remix web-based IDE features a graphical interface for developing Move modules.',
    imgUrl: '/img/contrubution/sui/code.png',
    tags: ['sui', 'welldonecode'],
    url: 'https://sui.io/developers',
  },
  {
    title: 'SUI Wallet Standard',
    description: 'WELLDONE Wallet implemented Wallet Standard',
    imgUrl: '/img/contrubution/sui/wallet.png',
    tags: ['sui', 'welldonewallet', 'opensource'],
    url: 'https://github.com/MystenLabs/sui/tree/main/sdk/wallet-standard',
  },
  {
    title: 'Deploy & Write NEAR Smart Contracts on REMIX IDE',
    description: 'Tutorial video about how to deploy & write NEAR Smart Contracts on REMIX IDE',
    imgUrl: 'https://img.youtube.com/vi/wtumV7ffuhk/0.jpg',
    tags: ['near', 'welldonecode', 'remix', 'video'],
    url: 'https://www.youtube.com/watch?v=wtumV7ffuhk',
  },
  {
    title: 'JUNO Ecosystem - WELLDONE Code',
    description:
      'WELLDONE Code is a Remix IDE plugin to deploy and execute CosmWasm smart contracts',
    imgUrl: '/img/contrubution/juno/code.png',
    tags: ['juno', 'welldonecode'],
    url: 'https://junonetwork.io/apps/detail-WELLDONE Code',
  },
  {
    title: 'Awesome-CosmWasm: WELLDONE Code',
    description: 'Remix IDE plugin that supports CosmWasm.',
    imgUrl: '/img/contrubution/cosmos/code.png',
    tags: ['cosmos', 'welldonecode', 'cosmwasm'],
    url: 'https://github.com/CosmWasm/awesome-cosmwasm/pull/31',
  },
  {
    title: 'DSRV Labs | Remix IDE Plugin for Sui | Sui Builder House Hong Kong',
    description: 'Introduction video about WELLDONE Code, the Remix IDE Plugin for SUI',
    imgUrl: 'https://img.youtube.com/vi/A87JrB9Rt-g/maxresdefault.jpg',
    tags: ['sui', 'welldonecode', 'remix', 'video'],
    url: 'https://www.youtube.com/watch?v=A87JrB9Rt-g',
  },
  {
    title: 'Instant Coding with Remix IDE and WELLDONE Code',
    description: 'The browser-based Remix IDE, combined with the WELLDONE Code plug-in, lets you build Sui apps with no local setup or installations.',
    imgUrl: '/img/contrubution/sui/code.png',
    tags: ['sui', 'welldonecode', 'remix'],
    url: 'https://blog.sui.io/remix-ide-welldone-code/',
  },
  {
    title: 'AIP-X Code Verification API',
    description: 'This API proposal seeks to introduce a standard protocol for the verification of Aptos Move smart contract code.',
    imgUrl: '/img/contrubution/aptos/code.png',
    tags: ['aptos', 'welldonecode', 'verification'],
    url: 'https://github.com/aptos-foundation/AIPs/pull/150/',
  },
  {
    title: 'SIP-3: Code Verification API',
    description: 'A standard protocol for the verification of SUI Move smart contract code.',
    imgUrl: '/img/contrubution/sui/code.png',
    tags: ['sui', 'welldonecode', 'verification'],
    url: 'https://forums.sui.io/t/sip-3-code-verification-api/44811',
  },
  {
    title: 'SIP-4: Dependency Update Check API',
    description: ' standard protocol for the API that checks the latest version of a dependency.',
    imgUrl: '/img/contrubution/sui/code.png',
    tags: ['sui', 'welldonecode', 'verification'],
    url: 'https://forums.sui.io/t/sip-4-dependency-update-check-api/44812',
  },
  {
    title: 'Universal Serializer: Decentralize Your Multichain Game on #BOS w/ DSRV labs',
    description: 'Hyunsun Yoo from the DSRV labs and Welldone wallet team show a product demo on decentralizing your game with BOS.',
    imgUrl: 'https://img.youtube.com/vi/RYGNBjdnYfg/0.jpg',
    tags: ['near', 'welldonecode', 'remix', 'video'],
    url: 'https://www.youtube.com/watch?v=RYGNBjdnYfg',
  },
  {
    title: '웰던 스튜디오의 Sui 파헤치기',
    description: 'Sui(수이)는 유저와 개발자 모두에게 친화적인 레이어1 네트워크입니다. 빠른 속도와 적은 거래비용을 통해서 광범위한 사용성을 지향하고 있습니다. 웰던스튜디오는 Sui의 공식적인 교육 파트너로서 해당 네트워크를 통한 개발과 사용의 구체적인 과정을 안내해 드리고자 합니다.',
    imgUrl: '/img/sns/1704356222814875684.jpeg',
    tags: ['near', 'welldonecode', 'remix', 'video', 'welldonewallet', 'education', 'sui'],
    url: 'https://www.inflearn.com/course/웰던스튜디오-sui-파헤치기',
  },
  {
    title: 'NEP-413: NEAR Wallet Selector',
    description: 'Update NEP-413 support method on wallet selector core package',
    imgUrl: '/img/contrubution/near/wallet.png',
    tags: ['near', 'welldonewallet', 'opensource'],
    url: 'https://github.com/near/wallet-selector/pull/940/files#diff-951ccd3a2bb4cb5d1b7875d8d70f3e2f80e8ef4c7e388aa34189391961cbb51b',
  },
];

export type TagType =
  | 'near'
  | 'aptos'
  | 'sui'
  | 'juno'
  | 'cosmos'
  | 'welldonecode'
  | 'remix'
  | 'cosmwasm'
  | 'verification'
  | 'welldonewallet'
  | 'article'
  | 'video'
  | 'opensource'
  | 'education';

export const Tags: { [type in TagType]: { color: string; name: string } } = {
  near: {
    color: 'var(--ifm-color-primary)',
    name: 'NEAR',
  },
  aptos: {
    color: 'var(--ifm-color-primary)',
    name: 'APTOS',
  },
  sui: {
    color: 'var(--ifm-color-primary)',
    name: 'SUI',
  },
  juno: {
    color: 'var(--ifm-color-primary)',
    name: 'JUNO',
  },
  cosmos: {
    color: 'var(--ifm-color-primary)',
    name: 'COSMOS',
  },
  welldonecode: {
    color: 'var(--ifm-color-secondary)',
    name: 'WELLDONE Code',
  },
  welldonewallet: {
    color: 'var(--ifm-color-secondary)',
    name: 'WELLDONE Wallet',
  },
  remix: {
    color: 'var(--ifm-color-primary-dark)',
    name: 'RemixIDE',
  },
  cosmwasm: {
    color: 'var(--ifm-color-primary-dark)',
    name: 'CosmWasm',
  },
  verification: {
    color: 'var(--ifm-color-primary-dark)',
    name: 'Verification',
  },
  article: {
    color: 'var(--ifm-color-warning)',
    name: 'Article',
  },
  video: {
    color: 'var(--ifm-color-warning)',
    name: 'Video',
  },
  opensource: {
    color: 'var(--ifm-color-warning)',
    name: 'Open Source',
  },
  education: {
    color: 'var(--ifm-color-warning)',
    name: 'Education',
  },
};
