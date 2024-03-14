import { defineConfig } from 'vitepress'
import { nav } from './themeConfig/nav.js';
import { rewrites } from './themeConfig/rewrites.js';

export default defineConfig({
  /* --- FOR DEPLOYMENT TO GITHUB PAGES--- */
  base: '/', // The base URL the site will be deployed at.
  outDir: '../dist',
  /* --- HOME PAGE --- */
  title: 'Agoric Documentation', // title for the site. prefix for all page titles and displayed in the navbar
  description: 'Build, deploy and operate dApps and DeFi markets.', // desc for the site; rendered as a <meta> tag in the page HTML
  // Extra tags to inject into the page HTML <head>. You can specify each tag in the form of [tagName, { attrName: attrValue }, innerHTML?].
  head: [
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    ['link', { rel: 'icon', href: '/favicon-full.ico' }],
    [
      'style',
      { type: 'text/css' },
      `
    .two-col-table td {
        width: 50%;
    }
    .two-col-table table {
        table-layout: fixed;
    }
    a[href^='#'] {
        font-style: italic;
    }`,
    ],
    [
      'script',
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-118217811-1',
        async: '',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-118217811-1'); ",
    ],
    [
      'script',
      {},
      `
    /** @type {Map<[...anySelectors: string[]], (elems: (Element | null)[]) => unknown>} */
    const fixups = new Map();

    // Update the "home" link to target agoric.com while intercepting clicks
    // such that those outside of its image continue routing to the root of
    // the documentation site.
    fixups.set(['.home-link', '.logo'], ([homeEl, logoEl]) => {
      if (homeEl) {
        homeEl.setAttribute('href', 'https://agoric.com');
        homeEl.setAttribute('onclick', 'return false;');
      }
      if (logoEl) {
        logoEl.setAttribute('onclick', "document.location='https://agoric.com';return false;");
      }
    });

    // Poll until all fixups trigger by matching at least one element.
    const fixupInterval = setInterval(function() {
      for (const [selectors, fixup] of fixups) {
        const elems = selectors.map(sel => document.querySelector(sel));
        if (elems.some(el => el)) {
          // console.log('fixup', selectors);
          fixups.delete(selectors);
          Promise.resolve(elems).then(fixup);
        }
      }
      if (!fixups.size) {
        clearInterval(fixupInterval);
        // console.log('fixups are done');
      }
    }, 500);
    `,
    ],
  ],
  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
  ],
  sitemap: {
    hostname: 'https://docs.agoric.com',
  },
  plugins: [],
  /* --- ROUTE REWRITES / REDIRECTS --- */
  rewrites,
  /* --- DEFAULT THEME CONFIG --- */
  themeConfig: {
    sidebarDepth: 1,
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'long',
        timeZone: 'Etc/UTC',
      },
    },
    logo: '/agoric-logo-red.svg',
    /* --- NAVBAR (top) --- */
    nav,
    /* --- SIDEBAR --- */
    // This configuration displays different sidebars for different sections of
    // content. Pages must be organized into directories for each desired
    // section

    // NOTES:
    // Internal links: Must have a corresponding folder with a index.md file
    // Links must be absolute with trailing slash '/guide/'
    // Trailing slash implies it is looking for a .md file
    sidebar: {
      '/guides/': [
        {
          text: 'Getting Started',
          link: '/guides/getting-started/',
          collapsed: true,
          items: [
            { text: 'Getting Started', link: '/guides/getting-started/' },
            {
              text: 'Smart Wallet Dapp Architecture',
              link: '/guides/getting-started/contract-rpc',
            },
            {
              text: 'Deploying Smart Contracts',
              link: '/guides/getting-started/deploying',
            },
          ],
        },
        {
          text: 'Zoe',
          link: '/guides/zoe/',
          collapsed: true,
          items: [
            {
              text: 'Smart Contract Basics',
              link: '/guides/zoe/contract-basics',
            },
            { text: 'Zoe Overview', link: '/guides/zoe/' },
            { text: 'Contract Upgrade', link: '/guides/zoe/contract-upgrade' },
          ],
        },
        {
          text: 'Agoric CLI',
          link: '/guides/agoric-cli/',
          collapsed: true,
          items: [
            { text: 'Agoric CLI Reference', link: '/guides/agoric-cli/' },
            {
              text: 'Using agd to make queries and transactions',
              link: '/guides/agoric-cli/agd-query-tx',
            },
          ],
        },
        {
          text: 'JavaScript Framework',
          link: '/guides/js-programming/',
          collapsed: true,
          items: [
            {
              text: 'JavaScript Framework for Secure Distributed Computing',
              link: '/guides/js-programming/',
            },
            {
              text: 'Hardened JavaScript',
              link: '/guides/js-programming/hardened-js',
            },
            {
              text: 'Eventual Send with E()',
              link: '/guides/js-programming/eventual-send',
            },
            {
              text: 'Far(), Remotable, and Marshaling',
              link: '/guides/js-programming/far',
            },
            {
              text: 'Notifiers and Subscriptions',
              link: '/guides/js-programming/notifiers',
            },
          ],
        },
        {
          text: 'Wallet',
          link: '/guides/wallet/',
          collapsed: true,
          items: [
            { text: 'Agoric Wallet', link: '/guides/wallet/' },
            { text: 'Wallet UI', link: '/guides/wallet/ui' },
          ],
        },
        {
          text: 'ERTP',
          link: '/guides/ertp/',
          collapsed: true,
          items: [
            { text: 'ERTP Overview', link: '/guides/ertp/' },
            {
              text: 'Amounts, Values, and Brands',
              link: '/guides/ertp/amounts',
            },
            { text: 'AmountMath', link: '/guides/ertp/amount-math' },
            {
              text: 'Issuers and  Mints',
              link: '/guides/ertp/issuers-and-mints',
            },
            {
              text: 'Purses and Payments',
              link: '/guides/ertp/purses-and-payments',
            },
          ],
        },
        {
          text: 'Permissioned Contract Deployment',
          link: '/guides/coreeval/',
          collapsed: true,
          items: [
            {
              text: 'Permissioned Contract Deployment',
              link: '/guides/coreeval/',
            },
            {
              text: 'Declaring Required Capabilities',
              link: '/guides/coreeval/permissions',
            },
            {
              text: 'Code the Proposal',
              link: '/guides/coreeval/proposal',
            },
            {
              text: 'Deploy a Governance Proposal to a Local Testnet',
              link: '/guides/coreeval/local-testnet',
            },
          ],
        },
        {
          text: 'Example Zoe Contracts',
          link: '/guides/zoe/contracts/',
          collapsed: true,
          items: [
            { text: 'Example Zoe Contracts', link: '/guides/zoe/contracts/' },
            {
              text: 'Oracle Query Contract',
              link: '/guides/zoe/contracts/oracle',
            },
            {
              text: 'Vault Contract',
              link: '/guides/zoe/contracts/vault',
            },
            { text: 'Loan Contract', link: '/guides/zoe/contracts/loan' },
            {
              text: 'Funded Call Spread Contract',
              link: '/guides/zoe/contracts/fundedCallSpread',
            },
            {
              text: 'Priced Call Spread Contract',
              link: '/guides/zoe/contracts/pricedCallSpread',
            },
            {
              text: 'Covered Call Contract',
              link: '/guides/zoe/contracts/covered-call',
            },
            {
              text: 'OTC Desk Contract',
              link: '/guides/zoe/contracts/otc-desk',
            },
            {
              text: 'ConstantProduct AMM Contract',
              link: '/guides/zoe/contracts/constantProductAMM',
            },
            {
              text: 'Sell Items Contract',
              link: '/guides/zoe/contracts/sell-items',
            },
            {
              text: 'Atomic Swap Contract',
              link: '/guides/zoe/contracts/atomic-swap',
            },
            {
              text: 'Barter Exchange Contract',
              link: '/guides/zoe/contracts/barter-exchange',
            },
            {
              text: 'Second-Price Auction Contract',
              link: '/guides/zoe/contracts/second-price-auction',
            },
            {
              text: 'Simple Exchange Contract',
              link: '/guides/zoe/contracts/simple-exchange',
            },
            {
              text: 'Escrow To Vote Contract',
              link: '/guides/zoe/contracts/escrow-to-vote',
            },
            {
              text: 'Mint Payments Contract',
              link: '/guides/zoe/contracts/mint-payments',
            },
            {
              text: 'Mint and Sell NFTs Contract',
              link: '/guides/zoe/contracts/mint-and-sell-nfts',
            },
            {
              text: 'Use Object Contract',
              link: '/guides/zoe/contracts/use-obj-example',
            },
            {
              text: 'Automatic Refund Contract',
              link: '/guides/zoe/contracts/automatic-refund',
            },
          ],
        },
        {
          text: 'Deployed Zoe Contracts',
          link: '/guides/zoe/actual-contracts/',
          collapsed: true,
          items: [
            {
              text: 'Deployed Zoe Contracts',
              link: '/guides/zoe/actual-contracts/',
            },
            {
              text: 'PSM Contract',
              link: '/guides/zoe/actual-contracts/PSM',
            },
          ],
        },
        {
          text: 'Agoric Dapps',
          link: '/guides/dapps/',
          collapsed: true,
          items: [
            { text: 'Agoric Dapps', link: '/guides/dapps/' },
            {
              text: 'Dapp Templates',
              link: '/guides/dapps/dapp-templates',
            },
            {
              text: 'Starting Multiuser Dapps',
              link: '/guides/dapps/starting-multiuser-dapps',
            },
            {
              text: 'Deploying Smart Contracts',
              link: '/guides/getting-started/deploying',
            },
            {
              text: 'Smart Wallet Dapp Architecture',
              link: '/guides/getting-started/contract-rpc',
            },
          ],
        },
        {
          text: 'Agoric Platform',
          link: '/guides/platform/',
          collapsed: true,
          items: [],
        },
        {
          text: 'Chainlink Integration',
          link: '/guides/chainlink-integration',
          collapsed: true,
          items: [],
        },
        {
          text: 'SubQuery Indexing',
          link: '/guides/subquery-indexing',
          collapsed: true,
          items: [],
        },
      ],
      '/reference/': [
        {
          text: 'Wallet API',
          link: '/reference/wallet-api/',
          collapsed: true,
          items: [
            {
              text: 'Wallet API Commands',
              link: '/reference/wallet-api/wallet-commands',
            },
            {
              text: 'WalletBridge API Commands',
              link: '/reference/wallet-api/wallet-bridge',
            },
          ],
        },
        {
          text: 'ERTP API',
          link: '/reference/ertp-api/',
          collapsed: true,
          items: [
            { text: 'ERTP API', link: '/reference/ertp-api/' },
            { text: 'Issuer Object', link: '/reference/ertp-api/issuer' },
            { text: 'Mint Object', link: '/reference/ertp-api/mint' },
            { text: 'Brand Object', link: '/reference/ertp-api/brand' },
            { text: 'Purse Object', link: '/reference/ertp-api/purse' },
            {
              text: 'Payment Object',
              link: '/reference/ertp-api/payment',
            },
            {
              text: 'AmountMath Object',
              link: '/reference/ertp-api/amount-math',
            },
            {
              text: 'ERTP Data Types',
              link: '/reference/ertp-api/ertp-data-types',
            },
          ],
        },
        {
          text: 'REPL API',
          link: '/reference/repl/',
          collapsed: true,
          items: [
            { text: 'Agoric REPL', link: '/reference/repl/' },
            {
              text: 'Timer Services',
              link: '/reference/repl/timerServices',
            },
            { text: 'The Agoric Board', link: '/reference/repl/board' },
            { text: 'Network API', link: '/reference/repl/networking' },
            {
              text: 'Price Authority',
              link: '/reference/repl/priceAuthority',
            },
            { text: 'Scratch', link: '/reference/repl/scratch' },
          ],
        },
        {
          text: 'Zoe API',
          link: '/reference/zoe-api/',
          collapsed: true,
          items: [
            { text: 'Zoe API', link: '/reference/zoe-api/' },
            { text: 'Zoe Service', link: '/reference/zoe-api/zoe' },
            {
              text: 'UserSeat Object',
              link: '/reference/zoe-api/user-seat',
            },
            {
              text: 'Zoe Contract Facet',
              link: '/reference/zoe-api/zoe-contract-facet',
            },
            { text: 'ZCFSeat Object', link: '/reference/zoe-api/zcfseat' },
            { text: 'ZCFMint Object', link: '/reference/zoe-api/zcfmint' },
            {
              text: 'PriceAuthority Object',
              link: '/reference/zoe-api/price-authority',
            },
            {
              text: 'ZoeHelper Functions',
              link: '/reference/zoe-api/zoe-helpers',
            },
            {
              text: 'Ratio Math Functions',
              link: '/reference/zoe-api/ratio-math',
            },
            {
              text: 'Zoe Data Types',
              link: '/reference/zoe-api/zoe-data-types',
            },
          ],
        },
      ],
    },
    docsRepo: 'Agoric/documentation',
    // if your docs are not at the root of the repo:
    docsDir: 'main',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'main',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',

    zoeVersion: 'v0.24.0',
    zoeDocsUpdated: 'August 25, 2022',

    // https://vitepress.dev/reference/default-theme-search#local-search
    // uses minisearch: https://github.com/lucaong/minisearch/
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          },
          /**
           * @param {string} src
           * @param {import('vitepress').MarkdownEnv} env
           * @param {import('markdown-it')} md
           */
          // _render(src, env, md) {
          // },
        },
      },
    },
  },
});