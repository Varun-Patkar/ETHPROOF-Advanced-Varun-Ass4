# Vesting Scheduler - ETHPROOF Advanced Varun Ass1

This is a simple vesting scheduler app for organizations to create ERC20 tokens and for shareholders to withdraw their vested tokens

## Problem Statement

Using Solidity and ether.js - build a simple DApp that will allow a particular organization to create a vesting schedule for their tokens. Depending on the tokenomics model of a web3 organization, they will have various vesting schedules for different stakeholders like community, investors, pre-sale buyers, founders etc.

You can build a simple DApp which will have a front end and Solidity Smart contracts with the following functionality:

1. An organization should be able to register themselves and their token (basically spinning off a contract for one ERC20 token).
2. Organisation should be able to mention the type of stakeholder and their vesting period (timelock).
3. Org should be able to whitelist addresses for certain stakeholders (founders, investors etc.).
4. Whitelisted addresses should be able to claim their tokens after the vesting period.

In order to pass the assessment, complete the following steps:

1. Create Solidity contracts for registering orgs and adding stakeholders for each.
2. Create a front end page for users to connect their wallet.
3. Create a front end page for admins to register their org and add stakeholders + vesting details.
4. Create a page for users to be able to withdraw if they are whitelisted otherwise only org admin should be able to withdraw.
   You are recommended to use Testnet for testing purposes.

There are four requirements for the assessment:

1. Submit your project on GitHub.
2. You will include a README.md file in your project's GitHub repository (root folder). The README should provide a concise and clear overview of your project's purpose and functionality. This will help other developers understand the motivation behind your project and how to use it.
3. Record a video of 5 min or less. Loom is a free online tool you could use. In the video, provide a code walk-through where you share your screen and explain the code. During the code walk-through, run your code and explain the resulting output.
4. Make sure your video includes a demo of your code (on CLI or GUI) to show the working of it in a test environment

## Getting Started

### Installation & Testing

- Clone the repository on your local machine

```
git clone https://github.com/Varun-Patkar/ETHPROOF-Advanced-Varun-Ass1.git
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

## Authors

- [Varun Anand Patkar](https://github.com/Varun-Patkar)

## License

This project is licensed under the MIT License - see the LICENSE file for details
