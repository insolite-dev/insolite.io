/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
	experimental: { runtime: 'edge'}
}

module.exports = nextConfig
