import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Route } from "react-router-dom"
import routes from './configs/routes'
import './common/common.css'


ReactDom.render(
    <Router >
        {routes.map(item => {
            return <Route exact path={item.path} component={item.component} key={item.path} />
        })}
    </Router>,
    document.getElementById('app')
)