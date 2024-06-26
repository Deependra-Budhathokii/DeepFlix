/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'occ-0-3933-116.1.nflxso.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig
