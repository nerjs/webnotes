import { useEffect } from 'react'

export default title => {
    useEffect(() => {
        const prevTitle = window.document.title
        window.document.title = title

        return () => {
            window.document.title = prevTitle
        }
    }, [title])
}
