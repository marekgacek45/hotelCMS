import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname: process.env.DIRECTUS_API_ENDPOINT!.replace('https://', ''),
        
      }
    ]
  }
};

export default nextConfig;
