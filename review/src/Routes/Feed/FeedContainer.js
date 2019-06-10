import React from "react";
import FeedPresenter from "./FeedPresenter"; 
import { FEED_QUERY } from './FeedQueries';
import { useQuery } from "react-apollo-hooks";

export default () => {
    const { data, loading } = useQuery(FEED_QUERY);

    return (
        <FeedPresenter
            data={data}
            loading={loading}
        />
    );
}