require("dotenv").config()

require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const RINKEBY_URL = process.env.RINKEBY_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKETCAP = process.env.COINMARKETCAP
const ETHERSACN_API_KEY = process.env.ETHERSACN_API_KEY

console.log(COINMARKETCAP)

module.exports = {
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            url: RINKEBY_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
        },
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP,
        token: "ETH",
    },
    etherscan: {
        apiKey: {
            rinkeby: ETHERSACN_API_KEY,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
            // 4: 1,
        },
        user: {
            default: 1,
        },
    },
}
