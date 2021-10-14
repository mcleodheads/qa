import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {routes} from "../utils/routes";
import {HOME_ROUTE} from "../utils/paths";

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