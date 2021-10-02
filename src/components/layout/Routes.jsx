import React from 'react'

import { Route,Switch } from 'react-router-dom'

import Dashboard from '../../pages/Dashboard'
import Customers from '../../pages/Customers'
import Analytics from '../../pages/Analytics'
import Ont from '../../pages/Ont'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/analytics' component={Analytics}/>
            <Route path='/ont' component={Ont}/>

        </Switch>
    )
}

export default Routes
