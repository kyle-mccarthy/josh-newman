import Link, { LinkState } from 'next/link';
import { withRouter, WithRouterProps } from 'next/router';
import React from 'react';
import styled from 'react-emotion';

export const StyledNavbarComponent = styled('div')({
  backgroundColor: '#333',
  fontFamily: 'Roboto Condensed, arial, sans-serif',
  color: 'white',
  width: '100%',
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  bottom: '0',
});

interface IStyledHrefProps {
  selected?: boolean;
}

export const StyledHref = styled('a')((props: IStyledHrefProps) => ({
  color: 'white',
  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: '14px 16px',
  display: 'block',
  backgroundColor: props.selected ? '#111' : 'transparent',
  ['&:hover']: {
    cursor: 'pointer',
  },
}));

interface IStyledLinkProps extends LinkState, WithRouterProps {
  children: any;
}

const CustomLink: React.SFC<IStyledLinkProps> = ({ children, router, ...rest }) => (
  <Link {...rest}>
    <StyledHref selected={router.asPath === rest.href}>{children}</StyledHref>
  </Link>
);

export const StyledLink = withRouter<IStyledLinkProps>(CustomLink) as React.ComponentType<IStyledLinkProps>;
