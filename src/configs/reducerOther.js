import { TXT } from './consts'


const initList = 'hello world'


const txtReducer = (state = initList, action) => {
    switch (action.type) {
        case TXT: return action.text
        default: return state
    }
}
export default txtReducer 