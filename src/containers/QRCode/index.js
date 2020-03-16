import React, { Component } from 'react'
import frame from '../../assets/imgs/frame.png'
import earth from '../../assets/imgs/logo.jpg'
import './style'
class QRCode extends Component {
    componentDidMount() {
        document.title = '二维码'
    }
    render() {
        return <div className='QRCode'>
            <img className='frame' src={frame} />
            <h5 className='title'>二维码</h5>
            <img className='QR' src={earth} />
        </div>
    }
}

export default QRCode