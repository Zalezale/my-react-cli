import React, { Component } from 'react'
import './style.less'
import logoPic from '../../assets/imgs/logo.jpg'
import userPic from '../../assets/imgs/user.png'
import passwordPic from '../../assets/imgs/password.png'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    actions = (path) => {
        this.props.history.push(path)
    }
    render() {
        return (<div className='login'>
            <img src={logoPic} className='logo' />
            <div className='input'>
                <img src={userPic} />
                <input type='text' placeholder='用户名' />
            </div>
            <div className='input'>
                <img src={passwordPic} />
                <input type='text' placeholder='密码' />
            </div>
            <button>登陆 </button>
            <div className='other-actions'>
                <a onClick={() => this.actions('register')}>注册</a>
                <a>忘记密码</a>
            </div>
        </div>)
    }
}

export default Login