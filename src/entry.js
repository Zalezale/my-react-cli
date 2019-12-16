import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Route } from "react-router-dom"
import routes from './configs/routes'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './configs/reducer'
import './common/common.css'

const store = createStore(reducer)

ReactDom.render(
    <Provider store={store}>
        <Router >
            {routes.map(item => {
                return <Route exact path={item.path} component={item.component} key={item.path} />
            })}
        </Router>
    </Provider>,
    document.getElementById('app')
)