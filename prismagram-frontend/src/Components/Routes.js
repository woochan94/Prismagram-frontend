import React from "react";
import PropTyeps from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore"; 
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";

// exact가 붙어있으면 주어진 경로와 정확히 맞아 떨어져야만 한다는 것을 의미 
const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/explore" component={Explore} />
        <Route path="/search" component={Search} />
        <Route path="/:username" component={Profile} />
        <Redirect from="*" to="/" />
    </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Redirect from="*" to="/" />
    </Switch>
);

// 로그인 처리 Router 
// Switch 컴포넌트는 컴포넌트가 중복되었을 경우 Switch에 감싸면 매칭되는 첫번째 라우트만 보여주고 나머지는 보여주지 않음
const AppRouter = ({ isLoggedIn }) => (
     <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
);

AppRouter.PropTyeps = {
    isLoggedIn: PropTyeps.bool.isRequired
}

export default AppRouter;