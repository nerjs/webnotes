import { useState, useEffect } from 'react'

export default title => {
    const [prevTitle] = useState(document.title)

    useEffect(
        () => () => {
            document.title = prevTitle
        },
        [],
    )

    useEffect(() => {
        document.title = title
    }, [title])
}
