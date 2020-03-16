import React, { Component } from 'react'
import './style.less'
import proDetail from '../../assets/imgs/proDetail.png'

class ProIntro extends Component {
    componentDidMount() {
        document.title = '项目介绍'
    }
    render() {
        return <div className='pro-intro'>
            <img src={proDetail} />
            <div className='detail'>
                Filecoin是一个可将云存储转变为一个算法市场的去中心化存储网络。
                矿工通过提供数据存储和检索来获得原生代币（也称为“Filecoin”）。
                相反而言，客户通过付费使得矿工提供存储，分发和检索数据。
                 “Filecoin”可以指（a）网络，（b）协议，（c）网络上的代币，以及（d）项目
                Filecoin和IPFS是互补协议，两者均由Protocol Labs创建。IPFS 允许网络中的参与者互相存储，索取和传输可验证的数据。
                IPFS是开源的，可以被免费下载和使用，并且已经被大量的团队使用。运用IPFS，各个节点可存储它们认为重要的数据；没有简单的方法可以激励他人加入网络或存储特定数据。
                为了解决这一关键问题，Filecoin的设计旨在提供一个持久的数据存储系统。在Filecoin的激励结构下，客户付费以在特定的冗余和可用性水平上存储数据，矿工通过不断地存储数据并以加密方式证明数据存储来获得付款和奖励。
                 简而言之：IPFS按内容寻址并使其移动； Filecoin就是缺失的激励机制。
            </div>
        </div>
    }
}

export default ProIntro