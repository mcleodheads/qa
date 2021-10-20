import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import {routes} from "./routes";
import {HOME_ROUTE} from "./paths";

const AppRoute = () => {
    return (
        <Switch>
            {
                routes.map(({path, component}, index) => (
                    <Route
                        path={path}
                        component={component}
                        exact
                        key={index}
                    />
                ))
            }
            <Redirect to={HOME_ROUTE} />
        </Switch>
    );
};

export default AppRoute;