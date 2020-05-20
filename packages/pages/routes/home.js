const lastModified = new Date()

module.exports = (req, res) =>
    res.clientTemplate({
        title: 'Webnotes',
        description: 'webnotes description',
        lastModified,
    })
