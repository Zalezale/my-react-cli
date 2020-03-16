import React, { Component } from 'react'
import banner from '../../assets/imgs/banner.png'
import './style'
class HomePage extends Component {
    cat = (path) => {
        this.props.history.push(path)
    }
    componentDidMount() {
        document.title = '首页'
    }
    render() {
        return <div className='home-page'>
            <img className='logo' src={banner} />
            <div className='actions'>
                <button onClick={() => this.cat('/report')}>客户报备</button>
                <button onClick={() => this.cat('/reportlog')}>报备记录</button>
                <button onClick={() => this.cat('/myclient')}>我的客户</button>
                <button onClick={() => this.cat('/prolist')}>项目介绍</button>
                <button onClick={() => this.cat('/prolist')}>公告信息</button>
            </div>
        </div>
    }
}

export default HomePage