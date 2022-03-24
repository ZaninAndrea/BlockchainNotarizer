async function main() {
    const HashLogger = await ethers.getContractFactory("HashLogger")

    // Start deployment, returning a promise that resolves to a contract object
    const hashLogger = await HashLogger.deploy()
    console.log("Contract deployed to address:", hashLogger.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
