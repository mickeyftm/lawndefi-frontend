import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x84C1733A372FfB7c862459f92ebA5Fb57EAF75E4',
        target: '_blank',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x84C1733A372FfB7c862459f92ebA5Fb57EAF75E4',
        target: '_blank',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x84c1733a372ffb7c862459f92eba5fb57eaf75e4-bsc',
        target: '_blank',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0x84c1733a372ffb7c862459f92eba5fb57eaf75e4',
        target: '_blank',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/lawndefi',
        target: '_blank',
      }
    ],
  },
  {
    label: 'Audit (Coming Soon)',
    icon: 'AuditIcon',
    href: '#',
  },
]

export default config
