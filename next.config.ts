import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Add this line
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/api/*/file/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3001',  
        pathname: '/api/*/file/**',
      },
      {
        protocol: 'https',
        hostname: 'mommhrxeyyorqkffsofd.supabase.co',
        pathname: '/**',
      },
    ],
    
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    // Add any experimental features if needed
  },
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

export default withPayload(nextConfig)