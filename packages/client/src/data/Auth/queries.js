import gql from 'graphql-tag'

export const ME_QUERY = gql`
    {
        me {
            is
            user {
                id
                login
            }
        }
    }
`

export const REGISTRATION_MUTATION = gql`
    mutation($login: String!, $password: String!, $confirmPassword: String!) {
        result: registration(login: $login, password: $password, confirmPassword: $confirmPassword)
    }
`

export const LOGIN_MUTATION = gql`
    mutation($login: String!, $password: String!) {
        result: login(login: $login, password: $password)
    }
`

export const LOGOUT_MUTATION = gql`
    mutation {
        result: logout
    }
`

export const AUTH_SUBSCRIBE = gql`
    subscription {
        auth {
            is
            user {
                id
                login
            }
        }
    }
`
