const networkConfig = {
    4: {
        /* since "4" is the chainId of rinkeby */
        name: "rinkeby",
        ethUsdPriceFeedAddress: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
    },
    137: {
        // similarly "137" of polygon
        name: "polygon",
        ethUsdPriceFeedAddress: "0xDf3f72Be10d194b58B1BB56f2c4183e661cB2114",
    },
    1: {
        name: "ethereum",
        ethUsdPriceFeedAddress: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 200000000000

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
}
