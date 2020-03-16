import React, { Component } from 'react'
import './style.less'
import proDetail from '../../assets/imgs/proDetail.png'
class Prolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            proList: [1, 2, 3, 4, 5]
        }
    }
    goToDetail = () => {
        this.props.history.push('/prointro')
    }
    componentDidMount() {
        document.title = '项目介绍'
    }
    render() {
        const { proList } = this.state
        return <div className='pro-list'>
            {proList.map(item => {
                return <img src={proDetail} key={item} onClick={() => this.goToDetail()} />
            })}
        </div>
    }
}

export default Prolist