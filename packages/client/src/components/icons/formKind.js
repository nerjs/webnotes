import { NOTE_TYPES } from '@webnotes/global'
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder'
import kindIcons from './kind'

export default {
    ...kindIcons,
    [NOTE_TYPES.DIR]: CreateNewFolderIcon,
}
