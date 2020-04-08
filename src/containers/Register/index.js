import React, { Component } from 'react'
import logoPic from '../../assets/imgs/logo.jpg'
import userPic from '../../assets/imgs/user.png'
import passwordPic from '../../assets/imgs/password.png'
import phonePic from '../../assets/imgs/phone.png'
import './style.less'
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (<div className='register'>
            <img src={logoPic} className='logo' />
            <div className='input'>
                <img src={userPic} />
                <input type='text' placeholder='用户名' />
            </div>
            <div className='input'>
                <img src={phonePic} />
                <input type='text' placeholder='手机号' />
            </div>
            <div className='input'>
                <img src={passwordPic} />
                <input type='text' placeholder='密码' />
            </div>

            <button>下一步</button>
        </div>)
    }
}

export default Register