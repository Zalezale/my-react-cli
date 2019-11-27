import React, { Component } from 'react'

class PageB extends Component {
    gtA = () => {
        this.props.history.push('pagea')
    }
    render() {
        return <div>
            <a onClick={this.gtA}>pagea</a>
        </div>
    }
}
export default PageB