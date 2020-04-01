const mongoose = require('mongoose')
const waitPort = require('wait-port')
const merge = require('merge')
const logger = require('nlogs')(module)
const { sleep } = require('helpers-promise')
const PromiseDbGqlError = require('@nerjs/errors/PromiseDbGqlError')

mongoose.Promise = PromiseDbGqlError

const paramsDbDefault = {
    dbProtocol: 'mongodb',
    dbHost: 'localhost',
    dbPort: 27017,
    dbName: 'db',
    dbMaxTryConnect: 10,
    useUnifiedTopology: true,
    bufferCommands: true, // default
    autoIndex: true, // default
    useNewUrlParser: true, // default
    // promiseLibrary: Promise,
    poolSize: 5, // default
    useUnifiedTopology: true, // default false
}

const connect = _params => {
    const { dbProtocol, dbHost, dbPort, dbName, dbMaxTryConnect, ...params } = merge(
        {},
        paramsDbDefault,
        _params,
    )

    const paramsWaitPort = {
        host: dbHost,
        port: Number(dbPort),
    }

    const dbUri = `${dbProtocol}://${dbHost}:${Number(dbPort)}/${dbName}`

    const tryConnect = async i => {
        i++
        await waitPort(paramsWaitPort)

        try {
            await mongoose.connect(dbUri, { dbName, ...params })
            logger.info('MongoDb connected!')
            return mongoose.connection
        } catch (err) {
            err.tryCount = i
            if (i >= Number(dbMaxTryConnect)) throw err
            await sleep(i * 100)
            if (i >= Number(dbMaxTryConnect) / 2) logger.debug(`[try:${i}] Next try db connect...`)
            return await tryConnect(i)
        }
    }

    return tryConnect(0)
}

exports.connect = connect
exports.connection = mongoose.connection
