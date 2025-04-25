import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@payloadcms/next'],
  },
  serverExternalPackages: ['pg', 'pg-connection-string', 'pg-cloudflare'],
  transpilePackages: ['@payloadcms/next'],
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    quietDeps: true,
    includePaths: [path.join(process.cwd(), 'node_modules')],
  },
  webpack: (config, { isServer, webpack }) => {
    // Use IgnorePlugin to ignore problematic modules
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
      }),
    );
    
    // Setup fallbacks for Node.js modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      tls: false,
      fs: false,
      dns: false,
      child_process: false,
      pg: isServer ? false : './empty.js',
      'cloudflare:sockets': false,
    };
    
    // Exclude server-only modules from client bundles
    if (!isServer) {
      config.externals = [...(config.externals || []), 'pg', 'pg-native', 'pg-cloudflare'];
    }
    
    // Avoid manipulating the SASS loader directly as it can cause type errors
    // Instead, rely on the global sassOptions configuration above
    
    return config;
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })