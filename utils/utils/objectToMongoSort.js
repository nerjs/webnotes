module.exports = (obj, fields) => {
    if (!obj || typeof obj !== 'object' || !Object.keys(obj).length) return {}

    const res = {}

    Object.keys(fields).forEach(key => {
        if (obj[key] === undefined || obj[key] === null) return
        res[fields[key]] = obj[key] ? 1 : -1
    })

    if (!Object.keys(res).length) return {}

    return { sort: res }
}
