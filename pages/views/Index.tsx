import HomeHeroComponent from '@src/components/homeHero/HomeHeroComponent';
import React from 'react';
import styled from 'react-emotion';
import NoSSR from 'react-no-ssr';

const StyledIndex = styled('div')({
  backgroundImage: 'url(/static/imgs/afriendsjourney.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  minHeight: '100%',
  flexGrow: 1,
});

const Index: React.SFC = () => {
  return (
    <StyledIndex>
      <NoSSR>
        <HomeHeroComponent />
      </NoSSR>
    </StyledIndex>
  );
};

export default Index;
