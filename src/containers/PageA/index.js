import React, { Component } from 'react'

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
        return <div>
            <a onClick={this.gtB.bind(this)}>去b页面</a>
            <a onClick={this.gtC.bind(this)}>去c页面</a>
        </div>
    }
}
export default PageA