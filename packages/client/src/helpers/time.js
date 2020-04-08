import moment from 'moment'

export const timeFormat = date => moment(date).format('DD-MMM-YY kk:mm:ss')

export const timestamp = date => new Date(date).getTime()
