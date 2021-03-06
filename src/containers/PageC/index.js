import React, { Component } from 'react'
import connect from '../connect'
import Footer from '../../components/footer'
import './style.less'
import common from '../../until/common'
class PageC extends Component {
    gtA = () => {
        this.props.history.push('pagea')
    }
    render() {
        const { state, actions } = this.props
        const { reducer, reducerOther } = state
        const { addItem, subtractItem } = actions
        common()
        return <div className='container'>
            <a onClick={this.gtA.bind(this)}>去a页面</a>
            <ul>
                {
                    reducer.map((item, position) => <li key={position}><span onClick={() => addItem(item)}>+     </span>{item}<span onClick={() => subtractItem(position)}>     -</span></li>)
                }
            </ul>
            <h5>{reducerOther}</h5>
            <Footer />
        </div>
    }
}
export default connect(PageC)