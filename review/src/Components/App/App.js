import React from 'react';
import GlobalStyles from '../../Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from '../../Styles/Theme';
import Routes from '../Routes';
import { useQuery } from 'react-apollo-hooks';
import { QUERY } from './AppQueries';
import styled from 'styled-components';
import Footer from "../Footer";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { HashRouter as Router } from "react-router-dom";
import Header from "../Header/Header";

const Wrapper = styled.div`
  margin: 0 auto; 
  max-width: ${props => props.theme.maxWidth}; 
  width: 100%;
`;

export default () => {
  const { data: {isLoggedIn} } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles />
      <Router>
        <>
          <Header />
          <Wrapper>
            <Routes isLoggedIn={isLoggedIn} />
            <Footer />
          </Wrapper>
        </>
      </Router>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </>
  </ThemeProvider>
  );
}

