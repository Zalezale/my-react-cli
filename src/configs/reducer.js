import { ADD, SUBTRACT } from './consts'


const initList = [1, 2, 3]


const listReducer = (state = initList, action) => {
    let newState = state.map(item => item)
    switch (action.type) {
        case ADD: return newState.push(action.value) && newState;
        case SUBTRACT: return newState.splice(action.value, 1) && newState;
        default: return state
    }
}
export default listReducer 