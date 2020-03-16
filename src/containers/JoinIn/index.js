import React, { Component } from 'react'
import earth from '../../assets/imgs/logo.jpg'
import './style'
class JoinIn extends Component {
    componentDidMount() {
        document.title = '代理加盟'
    }
    render() {
        return <div className='join-in'>
            <div className='intro'>
                <img src={earth} className='earth' />
                <div className='detail'>
                    <div className='name'>
                        <label>姓名：luces</label>
                        <span>大区域经理</span>
                    </div>
                    <div className='tel'>
                        电话：1234567890
                    </div>
                </div>
                <div className='number'>
                    <label>200</label>
                    <span>K</span>
                </div>
            </div>
            <div className='actions'>
                <a className='button'>我的订单</a>
                <a className='button'>我的上级</a>
                <a className='button'>我的下级</a>
                <a className='button'>购买产品</a>
            </div>
        </div>
    }
}

export default JoinIn