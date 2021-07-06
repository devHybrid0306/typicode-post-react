import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { paths } from '../../constants/paths';
import { IPost } from '../../services';

const PostCardLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  width: 50%;
  margin: 1em;
`;

const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const Title = styled.div`
  background-color: black;
  color: white;
  font-size: 25px;
  padding: 0.5em;
`;

const Body = styled.h4`
  padding: 0.5em;
`;

interface IPostCardProps {
  postDetail: IPost;
  isActive: boolean;
}

const PostCard: React.FC<IPostCardProps> = ({ postDetail, isActive }) => {
  const { id, userId, title, body } = postDetail;

  return (
    <PostCardLink
      to={{ pathname: `${paths.main}${id}`, state: { userId } }}
      onClick={(e) => (isActive ? null : e.preventDefault())}
    >
      <PostCardWrapper>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </PostCardWrapper>
    </PostCardLink>
  );
};

export default PostCard;
