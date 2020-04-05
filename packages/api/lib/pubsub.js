const { RedisPubSub } = require('graphql-redis-subscriptions')

const { REDIS_HOST, REDIS_PORT } = process.env

const pubsub = new RedisPubSub({
    connection: {
        host: REDIS_HOST,
        port: REDIS_PORT,
        retryStrategy: times => {
            // reconnect after
            return Math.min(times * 50, 2000)
        },
    },
})

module.exports = pubsub
