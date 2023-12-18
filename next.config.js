/** @type {import('next').NextConfig} */

const repo = 'virtual_fair_static'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig
