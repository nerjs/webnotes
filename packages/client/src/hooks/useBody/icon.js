import { useState, useEffect } from 'react'

const getIconTag = () => {
    const collection = document.head.getElementsByTagName('link')

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].rel === 'icon') return collection[i]
    }

    const link = document.createElement('link')
    link.rel = 'icon'
    document.head.append(link)
    return link
}

export default icon => {
    const [domIcon] = useState(getIconTag())
    const [prevIcon] = useState(domIcon.href)

    useEffect(
        () => () => {
            domIcon.href = prevIcon
        },
        [],
    )

    useEffect(() => {
        domIcon.href = icon
    }, [icon])
}
