import React, { Component } from 'react'
import connect from '../connect'

class PageB extends Component {
    gtA = () => {
        this.props.history.push('pagea')
    }
    render() {
        const { state, actions } = this.props
        const { addItem, subtractItem } = actions
        return <div>
            <a onClick={this.gtA.bind(this)}>去a页面</a>
            <ul>
                {
                    state.map((item, position) => <li key={position}><span onClick={() => addItem(item)}>+     </span>{item}<span onClick={() => subtractItem(position)}>     -</span></li>)
                }
            </ul>
        </div>
    }
}
export default connect(PageB)