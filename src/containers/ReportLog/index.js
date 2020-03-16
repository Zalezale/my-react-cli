import React, { Component } from 'react'
import './style.less'
import logo from '../../assets/imgs/logo.jpg'
class ReportLog extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        document.title = '报备记录'
    }
    render() {
        const log = [1, 2, 3, 4, 5, 6]
        return (<div className='report-log'>
            {log.map(item => {
                return <div key={item} className='log'>
                    <div className='detail'>
                        <img src={logo} />
                        <div className='pro-detail'>
                            <label>项目XXXXX</label>
                            <span>备注：水电费水电费时尚</span>
                        </div>
                    </div>
                    <span>今天22:22</span>
                </div>
            })}
        </div>)
    }
}

export default ReportLog