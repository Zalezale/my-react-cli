import React, { Component } from 'react'
import './style.less'
import InputComponent from '../../components/inputComponent'
class ChgPassWord extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        document.title = '修改密码'
    }
    render() {
        return (<div className='change-password'>
            <div className='line'></div>
            <div className='form'>
                <InputComponent name='新密码' />
                <InputComponent name='确认密码' />
                <InputComponent name='手机号' />
                <InputComponent name='验证码' />
            </div>
            <button>确认</button>
        </div>)
    }
}

export default ChgPassWord