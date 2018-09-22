import MasonryGallery from '@src/components/masonryGallery/MasonryGallery';
import PortfolioPhotos from '@src/config/PortfolioGallery.json';
import React from 'react';
import styled from 'react-emotion';

const StyledPortfolio = styled('div')({
  background: '#111',
  flexGrow: 1,
});

const Portfolio: React.SFC = () => {
  return (
    <StyledPortfolio>
      <MasonryGallery photos={PortfolioPhotos} />
    </StyledPortfolio>
  );
};

export default Portfolio;
