import React from 'react'

export const Theme = { light: { color: 'blue' }, dart: { color: 'lightblue' } }
let globalContext = React.createContext({ theme: Theme.dart })


export default globalContext