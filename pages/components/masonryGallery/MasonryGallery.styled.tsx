import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import styled from 'react-emotion';

export const Tile = styled(GridListTile)({
  filter: 'brightness(50%)',
  transition: 'filter 250ms',
  ['&:hover']: {
    filter: 'brightness(100%)',
    cursor: 'pointer',
  },
});

export const StyledMasonryGallery = styled(GridList)({
  maxWidth: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overflow: 'hidden',
});
