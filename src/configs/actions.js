import { ADD, SUBTRACT } from './consts'

export const addItem = (data) => {
    return {
        type: ADD,
        value: data
    }
}
export const subtractItem = (data) => {
    return {
        type: SUBTRACT,
        value: data
    }
}