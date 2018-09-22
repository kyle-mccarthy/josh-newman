
import { IPhoto } from '@src/types';
import { Bind } from 'lodash-decorators';
import React from 'react';
import Lightbox from 'react-images';
import { StyledMasonryGallery, Tile } from './MasonryGallery.styled';

interface IMasonryGalleryProps {
  photos: IPhoto[];
}

interface IMasonryGalleryState {
  lightboxOpen: boolean;
  slide?: number;
}

class MasonryGallery extends React.Component<IMasonryGalleryProps, IMasonryGalleryState> {
  public readonly state: IMasonryGalleryState = { lightboxOpen: false };

  @Bind()
  public handleTileClicked(tileIndex: number) {
    return () => {
      this.setState({
        lightboxOpen: true,
        slide: tileIndex,
      });
    };
  }

  @Bind()
  public handleLightboxClose() {
    this.setState({
      lightboxOpen: false,
    });
  }

  @Bind()
  public handleNextImage() {
    this.setState((prevState: IMasonryGalleryState) => ({
      slide: (prevState.slide || 0) + 1,
    }));
  }

  @Bind()
  public handlePrevImage() {
    this.setState((prevState: IMasonryGalleryState) => ({
      slide: (prevState.slide || 1) - 1,
    }));
  }

  public render() {
    return (
      <React.Fragment>
        <StyledMasonryGallery cols={3} cellHeight={300} spacing={5}>
          {this.props.photos.map((img: IPhoto, i: number) => (
            <Tile
              key={i}
              rows={img.rows || 1}
              cols={img.cols || 1}
              onClick={this.handleTileClicked(i)}
            >
              <img src={img.src} />
            </Tile>
          ))}
        </StyledMasonryGallery>
        <Lightbox
          images={this.props.photos.map((img: IPhoto) => ({ src: img.src }))}
          isOpen={this.state.lightboxOpen}
          currentImage={this.state.slide}
          onClose={this.handleLightboxClose}
          onClickNext={this.handleNextImage}
          onClickPrev={this.handlePrevImage}
        />
      </React.Fragment>
    );
  }
}

export default MasonryGallery;
