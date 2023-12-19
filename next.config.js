/** @type {import('next').NextConfig} */

// const repo = 'virtual_fair_static'
// const repo = 'virtual_fair_static'

const assetPrefix = process.env.NEXT_PUBLIC_ROOT;
const basePath = process.env.NEXT_PUBLIC_ROOT;

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig
