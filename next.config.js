/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		ENTRY_POINT_ADDRESS: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
		ACCOUNT_FACTORY_ADDRESS: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
	},
};

module.exports = nextConfig;
