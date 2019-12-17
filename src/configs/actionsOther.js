import { TXT } from './consts'


export const updateTxt = (data) => {
    return {
        type: TXT,
        text: data
    }
}