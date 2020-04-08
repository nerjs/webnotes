import qs from 'qs'

export const queryLink = obj =>
    qs.stringify(obj, { addQueryPrefix: true, strictNullHandling: true })

export const homeRoute = {
    path: '/',
    link: query => `/${queryLink(query)}`,
}

export const usersRoute = {
    path: '/users',
    link: offset => `/users${queryLink({ offset })}`,
}

export const userRoute = {
    path: ['/_:userId', '/_/:userLogin'],
    link: (userId, userLogin) => (userId ? `/_${userId}` : `/_/${userLogin}`),
}

export const noteRoute = {
    path: '/~/:noteId',
    link: noteId => `/~${noteId}`,
}
