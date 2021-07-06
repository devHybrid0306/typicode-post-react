import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { IComment } from '../../services';

const CommentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 1em;
  width: 40%;
  padding: 1em;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row; */
  align-items: center;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5em;
`;

const UserName = styled.h3`
  margin: 5px;
`;

const UserEmail = styled.h4`
  margin: 5px;
  font-weight: 500;
`;

const CommentCard = ({ name, email, body }: IComment) => {
  return (
    <CommentCardWrapper>
      <UserWrapper>
        <AccountCircleIcon style={{ fontSize: 70 }} />
        <UserInfoWrapper>
          <UserName>{name}</UserName>
          <UserEmail>{email}</UserEmail>
        </UserInfoWrapper>
      </UserWrapper>
      <p>{body}</p>
    </CommentCardWrapper>
  );
};

export default CommentCard;
