import NavbarComponent from '@src/components/navbar/NavbarComponent';
import React from 'react';
import { AppStyled } from './App.styled';

interface IAppProps {
  Component: React.ComponentType;
  pageProps: any;
}

const App: React.SFC<IAppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <AppStyled>
        <Component {...pageProps} />
      </AppStyled>
      <NavbarComponent />
    </React.Fragment>
  );
};

export default App;
