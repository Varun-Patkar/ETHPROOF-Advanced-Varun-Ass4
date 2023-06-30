# Smart Contract Wallet - ETHPROOF Advanced Varun Ass4

This is a Smart Contract Wallet app which allows users to use a smart contract as their wallet instead of an EOA to send and recieve funds and view balance. This also use EIP-4337 for Account Abstraction.

## Companion Video

[Loom Companion Video](https://www.loom.com/share/29003158ce56474eabfb30bfe17240f6?sid=c5166f5a-8b4c-47bf-8ed3-51aac104c4eb)

## Problem Statement

With the help of Solidity, design a smart contract wallet for users using account abstraction.

You can build a simple wallet which would create a smart contract wallet (not an EOA) at the backend and perform simple wallet operations like transfer of crypto from one wallet to another, fetching the wallet balances etc.

Here are some suggested features for the smart contract wallet, however you can add a few extra features of your own, to get bonus points:

1. Create a smart contract wallet for every user who wants to “Create a Wallet”.
2. Users should be able to send and receive funds through their wallet.
3. Users should be able to view their wallet balances.

In order to pass the assessment, complete the following steps:

1. Create Solidity contracts for creating smart contract wallets.
2. Use the reference of EIP-4337 to create new structs that facilitate user operations with this wallet.
3. Create a small front-end page where we can see the balance of a user/address.

Use Testnet for testing purposes.

## Assessment Requirements

There are four requirements for the assessment:

1. Submit your project on GitHub.
2. You will include a README.md file in your project's GitHub repository (root folder). The README should provide a concise and clear overview of your project's purpose and functionality. This will help other developers understand the motivation behind your project and how to use it.
3. Record a video of 5 min or less. Loom is a free online tool you could use. In the video, provide a code walk-through where you share your screen and explain the code. During the code walk-through, run your code and explain the resulting output.
4. Make sure your video includes a demo of your code (on CLI or GUI) to show the working of it in a test environment

## Functionality

Your project must provide the following to be successfully completed:

1. Create a smart contract wallet for every user who wants to “Create a Wallet”.
2. Users should be able to send and receive funds through their wallet.
3. Users should be able to view their wallet balances.

## Getting Started

### Installation & Testing

- Clone the repository on your local machine

```
git clone https://github.com/Varun-Patkar/ETHPROOF-Advanced-Varun-Ass4.git
```

- Install all node dependencies

```
npm install
```

- Deploy the test blockchain using hardhat

```
npx hardhat node
```

- Deploy the contract on the blockchain using the deploy.js script

```
npx hardhat run scripts/deploy.js --network localhost
```

- Finally, Start the next.js development live server

```
npm run dev
```

## Help

- You may get the error 'Nonce too high'. This can be readily fixed by going to Metamask (or your other wallet) and clearing activity and nonce data.
- When creating account, 2 transactions will be shown. Please accept the first one and close the dialog box of second. This is because of useEffect() function problem which renders twice when in development and only once in production.

## Authors

- [Varun Anand Patkar](https://github.com/Varun-Patkar)

## License

This project is licensed under the MIT License - see the LICENSE file for details
