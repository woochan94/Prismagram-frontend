import React from "react"; 
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
            />
          ))}
      </Wrapper>
    );
  };