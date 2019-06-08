import React from 'react';
import GlobalStyles from '../../Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from '../../Styles/Theme';
import AppRouter from '../Router';
import { useQuery } from 'react-apollo-hooks';
import { QUERY } from './AppQueries';
import styled from 'styled-components';
import Footer from "../Footer";

const Wrapper = styled.div`
  margin: 0 auto; 
  max-width: 935px; 
  width: 100%;
`;

export default () => {
  const { data: {isLoggedIn} } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <AppRouter isLoggedIn={isLoggedIn} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

