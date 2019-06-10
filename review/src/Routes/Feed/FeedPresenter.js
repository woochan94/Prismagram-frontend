import React from "react"; 
import Helmet from "react-helmet";
import styled from "styled-components"; 
import Loader from "../../Components/Loader";
import Post from "../../Components/Post"; 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

export default ({ data, loading }) => {
    return (
      <Wrapper>
        <Helmet>
          <title>Feed | Prismagram </title>
        </Helmet>
        {loading && <Loader />}
        {!loading &&
          data &&
          data.seeFeed &&
          data.seeFeed.map(post => (
            <Post
              key={post.id} 
              id={post.id}
              user={post.user}
              files={post.files}
              likeCount={post.likeCount}
              isLiked={post.isLiked}
              comments={post.comments}
              createdAt={post.createdAt}
              caption={post.caption}
              location={post.location}
            />
          ))}
      </Wrapper>
    );
  };