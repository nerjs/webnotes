const { withFilter } = require('graphql-subscriptions')
const pubsub = require('./pubsub')

exports = module.exports = {
    UPDATE_AUTH: 'UPDATE_AUTH',
}

exports.filter = (triggers, filterFn) => ({
    subscribe: withFilter(() => pubsub.asyncIterator(triggers), filterFn),
})
