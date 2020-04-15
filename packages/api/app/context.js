exports.context = ({ req, connection }) => {
    if (connection) return connection.context
    return {
        session: req.session,
        sessionStore: req.sessionStore,
    }
}

exports.wsOnConnect = (conn, ws, ctx) => {
    const promise = new Promise((resolve, reject) => {
        session(ctx.request, {}, err =>
            err
                ? reject(err)
                : resolve({
                      session: ctx.request.session,
                      sessionStore: ctx.request.sessionStore,
                  }),
        )
    })

    return promise
}
