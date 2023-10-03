/** @type {{images: {remotePatterns: [{protocol: string, port: string, host: string}]}}} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: ''
        }],
    }
}

module.exports = nextConfig
