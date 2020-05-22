const cheerio = require('cheerio')
const needle = require('needle')
const logger = require('nlogs')(module)

const defTmp = `
    <html>
        <head></head>
        <body></body>
    </html>
`

const tmp = {
    html: '',
}

const prepare = txt => {
    const $ = cheerio.load(txt)

    if (!$('head title').length) $('head').append($('<title></title>'))
    if (!$('head meta[name=description]').length)
        $('head').append($('<meta name="description" content="" />'))
    if (!$('body noscript').length) $('body').append($('<noscript></noscript>'))
    $('body noscript')
        .first()
        .attr('id', 'links-noscript')

    return $.html()
}

tmp.html = prepare(defTmp)

module.exports = () => cheerio.load(tmp.html)

// Auto update HTML template
const DELAY = 120000
const ERROR_DELAY = 1000

const update = async url => {
    try {
        const { statusCode, body } = await needle(`http://${url}/index.html`)

        if (statusCode !== 200) throw new Error(`CODE:${statusCode}`)
        if (!body || !body.length || typeof body !== 'string') throw new Error('Body is empty')

        tmp.html = prepare(body)

        setTimeout(() => update(url), DELAY)
    } catch (e) {
        logger.error(e)
        setTimeout(() => update(url), ERROR_DELAY)
    }
}

if (process.env.CLIENT_ASSETSS_URL) update(process.env.CLIENT_ASSETSS_URL)
