import React from "react"; 
import ProfilePresenter from "./ProfilePresenter"; 
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import { GET_USER, LOG_OUT } from "./ProfileQueries";

export default withRouter(({match: { params: { username }}}) => {
    const { data, loading } = useQuery(GET_USER, { variables: { username }});
    const logOut = useMutation(LOG_OUT);
    return (
        <ProfilePresenter
            data={data.seeUser}
            loading={loading}
            logOut={logOut}
        />
    );

})