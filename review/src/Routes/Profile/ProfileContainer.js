import React from "react"; 
import ProfilePresenter from "./ProfilePresenter"; 
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { GET_USER } from "./ProfileQueries";

export default withRouter(({match: { params: { username }}}) => {
    const { data, loading } = useQuery(GET_USER, { variables: { username }});
    return (
        <ProfilePresenter
            data={data.seeUser}
            loading={loading}
        />
    );

})