import React, { Component } from 'react'
import connect from '../connect'

class PageA extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    gtB() {
        this.props.history.push('/pageb')
    }
    gtC() {
        this.props.history.push('/pagec')
    }
    render() {
        const { state, actions } = this.props
        const { addItem, subtractItem } = actions
        return <div>
            <a onClick={this.gtB.bind(this)}>去b页面</a>
            <a onClick={this.gtC.bind(this)}>去c页面</a>
            <ul>
                {
                    state.map((item, position) => <li key={position}><span onClick={() => addItem(item)}>+     </span>{item}<span onClick={() => subtractItem(position)}>     -</span></li>)
                }
            </ul>
        </div>
    }
}


export default connect(PageA)