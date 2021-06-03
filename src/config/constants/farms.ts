import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 0,
    lpSymbol: 'LWNS-BUSD LP',
    lpAddresses: {
      97: '0xdd2c3f67a9987c2006559779457f36b573539c91',
    },
    tokenSymbol: 'LWNS',
    tokenAddresses: {
      97: '0x95fd5320C4325d27E9c5fc97dAf12092bCC69E1F',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 0,
    lpSymbol: 'LWNS-BNB LP',
    lpAddresses: {
      97: '0xa3c30ab7a3bd609526bea029d899896e51aba580',
    },
    tokenSymbol: 'LWNS',
    tokenAddresses: {
      97: '0x95fd5320C4325d27E9c5fc97dAf12092bCC69E1F',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 0,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xe0e92035077c39594793e61802a350347c320cf2',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
