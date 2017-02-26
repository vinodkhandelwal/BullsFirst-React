import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app.js';
import AccountsPage from './components/accounts/AccountsPage.js';
import TransfersPage from './components/transfers/TransfersPage.js';
import TradesPage from './components/trades/TradesPage.js';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AccountsPage}/>
        <Route  path="/transfer" component={TransfersPage}/>
        <Route  path="/trades" component={TradesPage}/>
    </Route>
);
