import React from 'react';
import styled from 'react-emotion';

const StyledAbout = styled('div')({
  background: '#080a16',
  minHeight: '100%',
  flexGrow: 1,
  display: 'flex',
});

const StyledWrapper = styled('div')({
  backgroundImage: 'url(/static/imgs/about/josh.jpg)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  minHeight: '100%',
  flexGrow: 1,
  justifyContent: 'center',
  display: 'flex',

  ['@media (max-width: 1200px)']: {
    backgroundImage: 'none',
  },
});

const StyledContainer = styled('div')({
  maxWidth: '1000px',
  width: '100%',
  display: 'flex',
  margin: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
});

const StyledTextWrapper = styled('div')({
  maxWidth: '500px',
  width: '100%',
  color: '#ffffff',
  marginLeft: 'auto',

  ['& > h1']: {
    fontSize: '35px',
    fontWeight: 'bold',
    ['&::after']: {
      content: '" "',
      display: 'block',
      width: '25%',
      height: '4px',
      background: '#ffffff',
      marginTop: '15px',
      marginBottom: '25px',
    },
  },

  ['& > h2']: {
    fontSize: '22px',
    fontWeight: 200,
    marginBottom: '15px',
  },

  ['& > p']: {
    fontWeight: 100,
    lineHeight: 1.8,
  },

  ['@media (max-width: 1200px)']: {
    margin: 'auto',
  },
});

const About: React.SFC = () => {
  return (
    <StyledAbout>
      <StyledWrapper>
        <StyledContainer>
          <StyledTextWrapper>
            <h1>Josh Newman</h1>
            <h2>Hi. I design things.</h2>
            <p>
              I am a selft-taught graphic designer with 10+ years experience, and 5+ years in the work
              field. My passion for design goes beyond a decorated canvas. I enjoy collaborating with
              others and working with clients to help push brands forward! I am always mindful of
              everyone's opinion, and I bring a positive attitude towards all of my projects. If you
              would like to work together, please don’t hesitate to reach out!
            </p>
          </StyledTextWrapper>
        </StyledContainer>
      </StyledWrapper>
    </StyledAbout>
  );
};

export default About;
