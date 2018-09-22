import React from 'react';
import { StyledLink, StyledNavbarComponent } from './NavbarComponent.styled';

const NavbarComponent: React.SFC = () => {
  return (
    <StyledNavbarComponent>
      <StyledLink href="/">Home</StyledLink>
      <StyledLink href="/portfolio">My Work</StyledLink>
      <StyledLink href="/about">About</StyledLink>
    </StyledNavbarComponent>
  );
};

export default NavbarComponent;
