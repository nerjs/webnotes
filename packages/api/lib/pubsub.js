const { RedisPubSub } = require('graphql-redis-subscriptions')
const logger = require('nlogs')(module)

const { REDIS_HOST, REDIS_PORT } = process.env

let ready = 0
const connectionListener = err => {
    if (err) return logger.error(err)
    ready++
    if (ready === 2) logger.log('Redis PubSub connected')
}

const pubsub = new RedisPubSub({
    connection: {
        host: REDIS_HOST,
        port: REDIS_PORT,
        retryStrategy: times => {
            // reconnect after
            logger.dubug('reconnect', 'times:', times)
            return Math.min(times * 50, 2000)
        },
    },
    connectionListener,
})

pubsub.onMessage('connect', logger.warn)

module.exports = pubsub
