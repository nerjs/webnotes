const logger = require('nlogs')(module)
const { connect, Notes } = require('.')

connect()
;(async () => {
    const note = new Notes({
        title: 'Tratata',
        type: 'test1',
        test1: 'test1 prop',
        test2: 'test2 prop',
    })
    // logger.log(note)
    await note.save()
    // logger.debug(await note.save())
})()
    .catch(logger.error)
    .finally(() => process.exit())
