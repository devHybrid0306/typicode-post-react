import React from 'react';
import styled from 'styled-components';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { useHistory } from 'react-router-dom';

const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 2em;
`;

const HomeWrapper = styled.div`
  position: absolute;
  left: 1%;
  cursor: pointer;
`;

interface IMainLayoutProps {
  children: JSX.Element;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  const history = useHistory();

  return (
    <MainLayoutWrapper>
      <HomeWrapper>
        <AccountBalanceIcon onClick={() => history.push('/')} style={{ fontSize: 50 }} />
      </HomeWrapper>
      {children}
    </MainLayoutWrapper>
  );
};

export default MainLayout;
