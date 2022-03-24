const { ethers } = require("ethers")
const { createHash } = require("crypto")
const HashLogger = require("../artifacts/contracts/HashLogger.sol/HashLogger.json")

require("dotenv").config()
const { CONTRACT_ADDRESS, ALCHEMY_API_KEY, PRIVATE_KEY } = process.env

function hash(string) {
    return "0x" + createHash("sha256").update(string).digest("hex")
}

// Setup connection to the smart contract through the Alchemy API
// using the private key to sign transactions
const provider = new ethers.providers.AlchemyProvider(
    "maticmum",
    ALCHEMY_API_KEY
)
const signer = new ethers.Wallet(PRIVATE_KEY, provider)
const hashLogger = new ethers.Contract(CONTRACT_ADDRESS, HashLogger.abi, signer)

async function main() {
    const documentHash = hash("Hello World")

    // Run the record method and wait for the transaction to be mined and verified by one block
    const transaction = await hashLogger.record(documentHash)
    const receipt = await transaction.wait(1)
    const { transactionHash, blockHash } = receipt
    console.log(documentHash, transactionHash, blockHash)

    // Verify whether the transaction has sufficient confirmations to consider it safe
    const { confirmations } = await provider.getTransaction(transactionHash)
    console.log(confirmations > 4)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
