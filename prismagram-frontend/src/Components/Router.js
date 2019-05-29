import React from "react";
import PropTyeps from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";


const LoggedInRoutes = () => (
    <>
        {/* exact가 붙어있으면 주어진 경로와 정확히 맞아 떨어져야만 한다는 것을 의미 */}
        <Route exact path="/" component={Feed} />
    </>
);

const LoggedOutRoutes = () => (
    <>
        <Route exact path="/" component={Auth} />
    </>
);

// 로그인 처리 Router 
const AppRouter = ({ isLoggedIn }) => (
    <Router>
        {/* Switch 컴포넌트는 컴포넌트가 중복되었을 경우 Switch에 감싸면 매칭되는 첫번째 라우트만 보여주고 나머지는 보여주지 않음 */}
        <Switch>
            {isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}
        </Switch>
    </Router>
);

AppRouter.PropTyeps = {
    isLoggedIn: PropTyeps.bool.isRequired
}

export default AppRouter;