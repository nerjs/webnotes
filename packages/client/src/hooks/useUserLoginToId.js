// import { useState } from 'react'
// import { useQuery } from '@apollo/react-hooks'
// import gql from 'graphql-tag'

// const GET_USER_ID = gql`
//     query($login: String!) {
//         getUserId: user(login: $login) {
//             id
//         }
//     }
// `

// const useUserLoginToId = props => {
//     if (props.userId) return props

//     const { loading, error, data } = useQuery(GET_USER_ID, {
//         variables: {
//             login: props.userLogin,
//         },
//     })

//     return {
//         ...props,
//         loading,
//         error,
//         userId: (data && data.getUserId && data.getUserId.id) || null,
//     }
// }
const useUserLoginToId = props => props

export default useUserLoginToId
