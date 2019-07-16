module.exports = {
    server: {
        port: 3000,
        basePath: '/api'
    },
    database: {
        mongodb: {
            username: 'function',
            password: 'function',
            port: 27017,
            host: 'localhost',
            retryWrites: true,
        }
    }
}
