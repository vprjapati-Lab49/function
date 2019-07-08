import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Dashboard from './components/Dashboard';
import { globalContainer as styles } from './App.styles';

const App = ({history}) => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route
                component={Dashboard}
            />
        </Switch>
    </ConnectedRouter>
);

export default withStyles(styles)(App);