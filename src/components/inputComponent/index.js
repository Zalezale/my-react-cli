import React, { Component } from 'react'
import './style'
class InputComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { name } = this.props
        return <div className='input'>
            <label>{`${name}:`}</label>
            <input type='text' />
        </div>
    }
}

export default InputComponent