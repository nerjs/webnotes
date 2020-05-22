import { NOTE_TYPES } from '@webnotes/global'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import LinkIcon from '@material-ui/icons/Link'
import FolderIcon from '@material-ui/icons/Folder'

export default {
    [NOTE_TYPES.DIR]: FolderIcon,
    [NOTE_TYPES.TEXT]: TextFieldsIcon,
    [NOTE_TYPES.LINK]: LinkIcon,
}
