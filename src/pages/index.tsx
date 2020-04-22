import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Cart from './Cart'
import ProductList from './ProductList'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ProductList} exact />
            <Route path="/cart" component={Cart} exact />
        </Switch>
    </BrowserRouter>
)

export default Routes
