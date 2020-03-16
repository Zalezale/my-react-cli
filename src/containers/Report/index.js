import React, { Component } from 'react'
import './style.less'
import InputComponent from '../../components/inputComponent'
import InputTextArea from '../../components/InputTextArea/index.js'
class Report extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        document.title = '客户报备'
    }
    render() {
        return (<div className='report'>
            <div className='line'></div>
            <div className='form'>
                <InputComponent name='客户姓名' />
                <InputComponent name='联系电话' />
                <InputComponent name='报备项目' />
                <InputTextArea />
            </div>
            <button>报备</button>
        </div>)
    }
}

export default Report