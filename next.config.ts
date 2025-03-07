import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
