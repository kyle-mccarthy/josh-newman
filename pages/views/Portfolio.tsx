import PortfolioPhotos from '@src/config/PortfolioGallery.json';
import dynamic from 'next/dynamic';
import React from 'react';
import styled from 'react-emotion';

const StyledPortfolio = styled('div')({
  background: '#111',
  flexGrow: 1,
});

const MasonryGallery = dynamic(import('@src/components/masonryGallery/MasonryGallery'), { ssr: false });

const Portfolio: React.SFC = () => {
  return (
    <StyledPortfolio>
      <MasonryGallery photos={PortfolioPhotos} />
    </StyledPortfolio>
  );
};

export default Portfolio;
