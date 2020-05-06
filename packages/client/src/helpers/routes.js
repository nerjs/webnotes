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
    link: (noteId, state) => (state ? { pathname: `/~/${noteId}`, state } : `/~/${noteId}`),
}

export const entryRoute = {
    path: '/entry',
    link: () => '/',
    login: {
        path: '/entry/login',
        link: () => ({ pathname: '/entry/login', state: { referer: window.location.pathname } }),
    },
    registration: {
        path: '/entry/registration',
        link: () => ({
            pathname: '/entry/registration',
            state: { referer: window.location.pathname },
        }),
    },
    logout: {
        path: '/entry/logout',
        link: () => ({ pathname: '/entry/logout', state: { referer: window.location.pathname } }),
    },
}
