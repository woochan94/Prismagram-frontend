import React from 'react';
import GlobalStyles from '../../Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from '../../Styles/Theme';
import AppRouter from '../Router';
import { useQuery } from 'react-apollo-hooks';
import { QUERY } from './AppQueries';

export default () => {
  const { data: {isLoggedIn} } = useQuery(QUERY);
  console.log(isLoggedIn);

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <AppRouter isLoggedIn={isLoggedIn} />
      </>
    </ThemeProvider>
  );
}

