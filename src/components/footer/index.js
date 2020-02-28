import React, { Component } from 'react'
import './style.less'
import PropTypes from 'prop-types'
class Footer extends Component {
    static propTypes = {
        theme: PropTypes.object,
    }
    render() {
        console.log(this.props.theme)
        setTimeout(() => {
            b
        }, 0)
        console.log(this.props.theme)
        return <div className='footer' style={{ background: this.props.theme.color }}>
            <h5>我是底部哦</h5>
        </div>
    }
}

Footer.defaultProps = {
    theme: { color: 'yellow' }
}
export default Footer