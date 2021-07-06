import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: black;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  cursor: pointer;
`;

interface IPostButtonProps {
  text: string;
  handleClick: any;
}

const PostButton: React.FC<IPostButtonProps> = ({ text, handleClick }) => {
  return <Button onClick={handleClick}>{text}</Button>;
};

export default PostButton;
