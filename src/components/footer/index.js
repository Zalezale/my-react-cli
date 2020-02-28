import React, { Component } from 'react'
import './style.less'
class Footer extends Component {
    render() {
        console.log(this.props.theme)
        setTimeout(() => {
            b
        }, 0);
        console.log(this.props.theme)
        return <div className='footer' style={{ background: this.props.theme.color }}>
            <h5>我是底部哦</h5>
        </div>
    }
}
export default Footer