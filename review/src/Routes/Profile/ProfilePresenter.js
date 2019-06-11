import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Avatar from "../../Components/Avatar";
import Loader from "../../Components/Loader";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton";
import SquarePost from "../../Components/SquarePost";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const HeaderColumn = styled.div``;

const UsernameRow = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  font-size: 26px;
  display: block;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const FullName = styled(FatText)`
  font-size: 16px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

const Posts = styled.div`
  display: grid;
  grid-column-gap: 25px;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

export default ({ loading, data, logOut }) => {
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    )
  } else if (!loading && data) {
    return (
      <Wrapper>
        <Helmet>
          <title>{data.username} | Prismagram </title>
        </Helmet>
        <Header>
          <HeaderColumn>
            <Avatar size="lg" url={data.avatar} />
          </HeaderColumn>
          <HeaderColumn>
            <UsernameRow>
              <Username>{data.username}</Username>{" "}
              {data.isSelf ? (
                <Button onClick={logOut} text="Log Out" />
              ) : (
                  <FollowButton isFollowing={data.isFollowing} id={data.id} />
                )}
            </UsernameRow>
            <Counts>
              <Count>
                <FatText text={String(data.postsCount)} /> posts
                            </Count>
              <Count>
                <FatText text={String(data.followersCount)} /> followers
                            </Count>
              <Count>
                <FatText text={String(data.followingCount)} /> following
                            </Count>
            </Counts>
            <FullName text={data.fullName} />
            <Bio>{data.bio}</Bio>
          </HeaderColumn>
        </Header>
        <Posts>
          {data.posts &&
            data.posts.map(post => (
              <SquarePost
                key={post.id}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
              />
            ))}
        </Posts>
      </Wrapper>
    )
  }
  return null;
}