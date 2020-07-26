import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import WorkBoard from '../pages/workboard';

class Router extends Component {

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={(props) => < Home {...props} />} />
                        <Route path='/workboard/' render={(props) => < WorkBoard {...props} />} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default Router;