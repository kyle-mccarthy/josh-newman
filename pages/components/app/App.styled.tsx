import styled, { injectGlobal } from 'react-emotion';

injectGlobal({
  ['*']: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: 'Gothic A1, Helvetica, arial sans-serif',
  },
});

export const AppStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: 'calc(100vh - 47px)',
  marginBottom: '47px', // account for fixed navbar
});
