import React, { Component } from 'react'
import connect from '../connect'
import './style.less'
import low from './imgs/25kb.jpg'
import height from './imgs/118kb.jpg'
import context from '../context'

class PageA extends Component {
    static contextType = context
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('pagea:' + JSON.stringify(this.context))
    }
    gtB() {
        this.props.history.push('/pageb')
    }
    gtC() {
        this.props.history.push('/pagec')
    }
    render() {
        const { state, actions } = this.props
        const { reducer, reducerOther } = state
        const { addItem, subtractItem, updateTxt } = actions
        return <div className='container-pagea'>
            <a onClick={this.gtB.bind(this)}>去b页面</a>
            <a onClick={this.gtC.bind(this)}>去c页面</a>
            <ul>
                {
                    reducer.map((item, position) => <li key={position}><span onClick={() => addItem(item)}>+     </span>{item}<span onClick={() => subtractItem(position)}>     -</span></li>)
                }
            </ul>
            <input type='text' placeholder={reducerOther} onChange={(e) => updateTxt(e.target.value)} />
            <img src={low} style={{ width: '200px', display: 'block' }} />
            <img src={height} style={{ width: '200px', display: 'block' }} />
        </div>
    }
}


export default connect(PageA)