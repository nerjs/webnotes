const parse = require('./parse')

module.exports = ({ title, noscript, description }) => {
    const $ = parse()

    $('head title').text(title)
    $('head meta[name=description]').attr('content', description)
    $('body noscript#links-noscript').html(noscript)

    return $.html()
}
