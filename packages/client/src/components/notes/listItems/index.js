import { NOTE_TYPES } from '@webnotes/global'
import DirListItem from './Dir'
import TextListItem from './Text'
import LinkListItem from './Link'

export default {
    [NOTE_TYPES.DIR]: DirListItem,
    [NOTE_TYPES.TEXT]: TextListItem,
    [NOTE_TYPES.LINK]: LinkListItem,
}
