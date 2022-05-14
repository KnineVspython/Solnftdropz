const global_data = require('./global.config.js')

// Primary NextJS configuration
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['media.discordapp.net'],
  },
  publicRuntimeConfig: global_data,
  // prettier-ignore
  webpack: (config, { dev, isServer }) => {
    // this optimeses the overall loading time of the app
    // the preact runtime is less than 3kb of size
    if (dev || isServer) return config
    Object.assign(config.resolve.alias, {
      'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    })
    return config
  },
  // prettier-ignore
  headers: async () => [{
    source: '/(.*)',
    headers: [
      { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
    ],
  }],
  // prettier-ignore
  redirects: async () => [{
    permanent: false,
    source: '/posts',
    destination: '/',
  }],
}

module.exports = config
