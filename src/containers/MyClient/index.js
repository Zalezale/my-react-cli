import React, { Component } from 'react'
import earth from '../../assets/imgs/logo.jpg'
import address from '../../assets/imgs/address.png'
import './style'
class MyClient extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        document.title = '报备记录'
    }
    render() {
        const clients = [1, 2, 3, 4]
        return (<div className='my-client'>
            <div className='line'></div>
            {clients.map(item => {
                return <div className='client' key={item}>
                    <div className='detail'>
                        <img src={earth} className='head-portrail' />
                        <div className='name'>
                            <label>郭某鹏</label>
                            <div className='address'>
                                <img src={address} /><span>上海</span>
                            </div>
                        </div>
                    </div>
                    <div className='tel' >
                        <div className='tip'>
                            <span className={item === 1 ? 'stop' : 'using'}></span>
                            <label style={{ color: item === 1 ? '#FF3B30' : '#00B578' }}>{item === 1 ? '停用' : '使用'}</label>
                        </div>
                        <label className='phone'>121341231234</label>
                    </div>
                </div>
            })}
        </div>)
    }
}

export default MyClient