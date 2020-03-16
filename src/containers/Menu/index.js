import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import asyncImportComponent from '../../components/asyncImportComponent'
import HomePage from '../HomePage/index'
import homepagepng from '../../assets/imgs/homePage.png'
import homepageClickpng from '../../assets/imgs/homePageClick.png'
import joininpng from '../../assets/imgs/joinIn.png'
import joininClickpng from '../../assets/imgs/joinInCLick.png'
import personagepng from '../../assets/imgs/personage.png'
import personageClickpng from '../../assets/imgs/personageClick.png'
import './style'
class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            actionTab: 0
        }
    }
    clickTab = (tab) => {
        this.setState({
            actionTab: tab
        })
    }
    render() {
        const { actionTab } = this.state
        return <div className='menu'>
            <Switch>
                <Route exact path={["/menu", "/menu/homepage"]} component={HomePage}>
                </Route>
                <Route exact path="/menu/joinin" component={asyncImportComponent(() => import('../JoinIn/index.js'))}>
                </Route>
                <Route exact path="/menu/personage" component={asyncImportComponent(() => import('../Personage/index.js'))}>
                </Route>
                <Route>
                </Route>
            </Switch>
            <div className='nav-menu'>
                <NavLink to="/menu/homepage" onClick={() => this.clickTab(0)}>
                    <div className='icon' >
                        <img className='icon-img' src={actionTab === 0 ? homepageClickpng : homepagepng} />
                        <span>首页</span>
                    </div>
                </NavLink>
                <NavLink to="/menu/joinin" onClick={() => this.clickTab(1)}>
                    <div className='icon'>
                        <img className='icon-img' src={actionTab === 1 ? joininClickpng : joininpng} />
                        <span>加盟代理</span>
                    </div>

                </NavLink>
                <NavLink to="/menu/personage" onClick={() => this.clickTab(2)}>
                    <div className='icon'>
                        <img className='icon-img' src={actionTab === 2 ? personageClickpng : personagepng} />
                        <span>个人中心</span>
                    </div>

                </NavLink>
            </div>
        </div>
    }
}

export default Menu