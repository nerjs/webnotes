const { withFilter } = require('graphql-subscriptions')
const pubsub = require('./pubsub')

const filter = (triggers, filterFn) => ({
    subscribe: withFilter(() => pubsub.asyncIterator(triggers), filterFn),
    resolver: () => {
        console.log('subscribe resolver')
    },
})

module.exports = {
    filter,

    UPDATE_AUTH: 'UPDATE_AUTH',
}
