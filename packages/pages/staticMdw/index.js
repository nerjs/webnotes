const logger = require('nlogs')(module)
const moment = require('moment')
const { ROUTES } = require('@webnotes/global')
const template = require('./template')

module.exports = (req, res, next) => {
    res.locals.title = 'Webnotes'
    res.locals.head = []
    res.locals.js = []

    res.clientTemplate = ({
        title,
        description,
        lastModified,
        userName,
        userUrl,
        noteTitle,
        noteUrl,
    }) => {
        const linksArr = []

        if (userName && userUrl) linksArr.push({ url: userUrl, name: userName })
        if (noteTitle && noteUrl) linksArr.push({ url: noteUrl, name: noteTitle })

        const links =
            linksArr.length === 0
                ? 'link: <a href="/">Webnotes</a>'
                : `${linksArr.length > 1 ? 'links' : 'link'}: ${linksArr
                      .map(({ url, name }) => `<a href=${url}>${name}</a>`)
                      .join(', ')}`

        const noscript = `
            You need JavaScript enabled to run this application.<br/>
            Or install a browser that <a href="${ROUTES.PATH_BADBROWSER}" >supports JavaScript</a>.<br/>
            After that you can return by the ${links}
        `

        res.append('Last-Modified', moment(lastModified).format('ddd, D MMM YYYY HH:mm:ss Z'))

        res.send(
            template({
                title,
                description,
                noscript,
            }),
        )
    }

    next()
}
