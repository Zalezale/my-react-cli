import React, { Component } from 'react'
import earth from '../../assets/imgs/logo.jpg'
import right from '../../assets/imgs/right.png'
import './style'
class Personage extends Component {
    actions = (path) => {
        this.props.history.push(path)
    }
    componentDidMount() {
        document.title = '个人中心'
    }
    render() {
        return <div className='personage'>
            <div className='intro'>
                <img src={earth} />
                <span>大区域经理</span>
            </div>
            <div className='actions'>
                <a className='button' onClick={() => this.actions('/inventcode')}>
                    <span>我的邀请码</span>
                    <img src={right} />
                </a>
                <a className='button'>
                    <span>我的支付宝</span>
                    <img src={right} />
                </a>
                <a className='button' onClick={() => this.actions('/qrcode')}>
                    <span>分享二维码</span>
                    <img src={right} />
                </a>
                <a className='button' onClick={() => this.actions('/changepassword')}>
                    <span>修改密码</span>
                    <img src={right} />
                </a>
                <a className='button' onClick={() => this.actions('/login')}>
                    <span>退出登陆</span>
                    <img src={right} />
                </a>
            </div>
        </div>
    }
}

export default Personage