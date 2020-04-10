import { useContext } from 'react'
import { AuthContext } from 'data/Auth'

const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}

export default useAuth
