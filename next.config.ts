import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Any of your existing config options here

  // // For example, you might need to do this (depends on your Next version and setup):
  // experimental: {
  //   reactCompiler: false,
  // },
}

export default withPayload(nextConfig)
