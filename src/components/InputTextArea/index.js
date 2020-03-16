import React, { Component } from 'react'
import './style'
class InputComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return <div className='input-text-area'>
            <textarea placeholder='      备注' />
        </div>
    }
}

export default InputComponent