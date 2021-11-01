module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [{
            source: '/api/:store*',
            destination: 'https://donation-app-eight.vercel.app/',
        }, ];
    },
};