import { useState, useEffect, useCallback } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ME_QUERY, REGISTRATION_MUTATION, LOGIN_MUTATION, LOGOUT_MUTATION } from './queries'
import { getValidationError } from 'helpers/filterError'

export default () => {
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [error, setError] = useState(null)

    const { loading: meLoading, error: meError, data, refetch: meRefetch } = useQuery(ME_QUERY)

    const [gqlRegistration, { loading: regLoading }] = useMutation(REGISTRATION_MUTATION)
    const [gqlLogin, { loading: loginLoading }] = useMutation(LOGIN_MUTATION)
    const [gqlLogout, { loading: logoutLoading }] = useMutation(LOGOUT_MUTATION)

    const refetchMeQuery = useCallback(
        async (variables, mutation) => {
            setError(null)

            try {
                const result = await mutation({ variables })
                await meRefetch()
                return result?.data?.result
            } catch (err) {
                setError(err)

                throw getValidationError(err, 'result', 'Validation error')
            }
        },
        [meRefetch, setError],
    )

    const registration = useCallback(variables => refetchMeQuery(variables, gqlRegistration), [
        gqlRegistration,
        refetchMeQuery,
    ])
    const login = useCallback(variables => refetchMeQuery(variables, gqlLogin), [
        gqlLogin,
        refetchMeQuery,
    ])
    const logout = useCallback(variables => refetchMeQuery(variables, gqlLogout), [
        gqlLogout,
        refetchMeQuery,
    ])

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
