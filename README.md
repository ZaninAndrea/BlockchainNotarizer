# Blockchain Notarilization PoC

A Proof of Concept for blockchain notarization. A smart contract is deployed that can emit an event to record the SHA256 digest of any data you want to notarize.

## How to use

You need a .env file containing the following fields

```
API_URL = <url of the alchemy endpoint for the network you want to connect to>
ALCHEMY_API_KEY = <api key for the alchemy endpoint>
PRIVATE_KEY = <private key for the account that owns the smart contract>
CONTRACT_ADDRESS = <address of the contract, necessary only for record>
```

Then you can use the following commands:

-   `npm run build`: to compile the solidity source file using hardhat
-   `npm run deploy`: to deploy an instance of the smart contract using hardhat
-   `npm run record`: to record a new transaction, this run a plain js script, so it can easily be adapted to run inside Azure Functions or other similar environments
