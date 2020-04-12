import useIcon from './icon'
import useTitle from './title'

export default props => {
    const { title, icon } = typeof props === 'object' ? props : { title: props }

    useTitle(title)
    useIcon(icon)
}
