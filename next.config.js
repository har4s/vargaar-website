/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: false,
	poweredByHeader: false,
	eslint: {
		// Disabling on production builds.
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: "*",
			},
		],
	},
	output: "standalone",
};

module.exports = nextConfig;
