import { useState, useEffect, useCallback } from 'react'
import { useQuery, useMutation, useSubscription, useApolloClient } from '@apollo/react-hooks'
import {
    ME_QUERY,
    REGISTRATION_MUTATION,
    LOGIN_MUTATION,
    LOGOUT_MUTATION,
    AUTH_SUBSCRIBE,
} from './queries'
import { getValidationError } from 'helpers/filterError'

const getRedirectUrl = (redirect = '/') => {
    const fullLink = `${redirect}`.match(/^https?:\/\//)

    return fullLink ? redirect : `${window.location.origin}${redirect}`
}

export default () => {
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [error, setError] = useState(null)

    const { loading: meLoading, error: meError, data, refetch: meRefetch, ...fd } = useQuery(
        ME_QUERY,
    )

    const [gqlRegistration, { data: registrationData, loading: regLoading }] = useMutation(
        REGISTRATION_MUTATION,
    )
    const [gqlLogin, { data: loginData, loading: loginLoading }] = useMutation(LOGIN_MUTATION)
    const [gqlLogout, { data: logoutData, loading: logoutLoading }] = useMutation(LOGOUT_MUTATION)
    const { data: subData } = useSubscription(AUTH_SUBSCRIBE)

    const refetchMeQuery = useCallback(
        async (variables, mutation, redirect) => {
            setError(null)

            try {
                const result = await mutation({ variables })
                meRefetch().then(mrData => {
                    setIsAuth(!!mrData?.data?.me?.is)
                    window.location.href = getRedirectUrl(redirect)
                })
                return result?.data?.result
            } catch (err) {
                setError(err)

                throw getValidationError(err, 'result', 'Validation error')
            }
        },
        [meRefetch, setError, setIsAuth],
    )

    const registration = useCallback(
        (variables, redirect) => refetchMeQuery(variables, gqlRegistration, redirect),
        [gqlRegistration, refetchMeQuery],
    )
    const login = useCallback(
        (variables, redirect) => refetchMeQuery(variables, gqlLogin, redirect),
        [gqlLogin, refetchMeQuery],
    )
    const logout = useCallback(
        (variables, redirect) => refetchMeQuery(variables, gqlLogout, redirect),
        [gqlLogout, refetchMeQuery],
    )

    const clearError = useCallback(() => setError(null), [setError])

    useEffect(() => {
        if (meError || !data || !data.me || !data.me.is) {
            setIsAuth(false)
            setUser(null)
        } else {
            setIsAuth(!!data.me.is)
            setUser(data.me.user || null)
        }
    }, [meError, data, setUser, setIsAuth])

    const loading = !!(meLoading || regLoading || loginLoading || logoutLoading)

    useEffect(() => {
        if (!subData?.auth || loading) return

        if (subData?.auth?.is === isAuth && subData?.auth?.user) {
            setUser(subData.auth.user)
        } else if (!registrationData && !loginData && !logoutData && subData.auth?.is !== isAuth) {
            setTimeout(() => {
                window.location.href = window.location.href
            }, 1000)
        }
        console.log(
            subData?.auth?.is === isAuth && subData?.auth?.user,
            !registrationData && !loginData && !logoutData && subData.auth?.is !== isAuth,
        )
    }, [isAuth, registrationData, loginData, logoutData, subData, loading, setUser, logout])

    return {
        loading,
        error,
        user,
        isAuth,
        registration,
        login,
        logout,
        clearError,
    }
}
