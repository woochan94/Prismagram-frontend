// Router Component는 어떤 라우터를 보여줄지 다루는 Component이다. 
import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";

const LoggedInRoutes = () => (
    <>
        <Route exact path="/" component={Feed} />
    </>
);

const LoggedOutRoutes = () => (
    <>
        <Route exact path="/" component={Auth} />
    </>
);

const AppRouter = ({ isLoggedIn }) => (
    <Router>
        <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}${console.log(isLoggedIn)}</Switch>
    </Router>
);

// Router는 항상 proptypes를 가져야 한다. 
AppRouter.propTypes = {
    isLoggedIn : PropTypes.bool.isRequired
}

export default AppRouter;