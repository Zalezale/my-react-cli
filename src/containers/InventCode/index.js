import React, { Component } from 'react'
import frame from '../../assets/imgs/frame.png'
import wexin from '../../assets/imgs/weixin.png'
import weibo from '../../assets/imgs/weibo.png'
import qq from '../../assets/imgs/qq.png'
import './style'
class InventCode extends Component {
    componentDidMount() {
        document.title = '邀请码'
    }
    render() {
        return <div className='InventCode'>
            <img className='frame' src={frame} />
            <h5 className='title'>邀请码</h5>
            <label className='QR' >MMMMDJL</label>
            <div className='share'>
                <img src={wexin} />
                <img src={qq} />
                <img src={weibo} />
            </div>
        </div>
    }
}

export default InventCode