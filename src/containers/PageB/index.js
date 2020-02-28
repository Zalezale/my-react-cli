import React, { Component } from 'react'
import connect from '../connect'
import Footer from '../../components/footer'
import ErrorCatch from '../../components/errorCatch'
import { DatePicker } from 'antd';
import common from '../../until/common'
import Context, { Theme } from '../context'


class PageB extends Component {
    static ContextType = Context
    constructor(props) {
        super(props)
        this.state = {
            status: 0,
            myTheme: Theme.dart
        }

    }
    toggleTheme = () => {
        let { status } = this.state
        this.setState({
            status: status ? 0 : 1,
            myTheme: status ? Theme.dart : Theme.light
        })
    }
    componentDidMount() {
        console.log('pageb:' + JSON.stringify(this.context))
    }
    gtA = () => {
        this.props.history.push('pagea')
    }
    render() {
        const { state, actions } = this.props
        const { reducer, reducerOther } = state
        const { addItem, subtractItem } = actions
        const { myTheme } = this.state
        common()
        return <div className='container'>
            <a onClick={this.gtA.bind(this)}>去a页面</a>
            <button onClick={this.toggleTheme}>context切换主题</button>
            <ul>
                {
                    reducer.map((item, position) => <li key={position}><span onClick={() => addItem(item)}>+     </span>{item}<span onClick={() => subtractItem(position)}>     -</span></li>)
                }
            </ul>
            <h5>{reducerOther}</h5>
            <DatePicker />
            <ErrorCatch>
                <Context.Provider value={myTheme}>
                    <Context.Consumer>
                        {theme => {
                            return <Footer theme={theme} />
                        }}
                    </Context.Consumer>
                </Context.Provider>
            </ErrorCatch>
        </div>
    }
}
export default connect(PageB)