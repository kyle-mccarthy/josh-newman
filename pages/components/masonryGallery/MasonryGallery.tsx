
import { IPhoto } from '@src/types';
import { Bind, Debounce } from 'lodash-decorators';
import React from 'react';
import Lightbox from 'react-images';
import { StyledMasonryGallery, Tile } from './MasonryGallery.styled';

interface IMasonryGalleryProps {
  photos: IPhoto[];
}

interface IMasonryGalleryState {
  lightboxOpen: boolean;
  slide?: number;
  columns: number;
}

class MasonryGallery extends React.Component<IMasonryGalleryProps, IMasonryGalleryState> {
  public readonly state: IMasonryGalleryState = { lightboxOpen: false, columns: 3 };
  public resizeListener: any;

  public componentDidMount() {
    if (this.state.columns !== this.getColumnsFromWidth()) {
      this.setState({
        columns: this.getColumnsFromWidth(),
      });
    }

    window.addEventListener('resize', this.handleResize);
  }

  public componentWillReceiveProps() {
    window.removeEventListener('resize', this.handleResize);
  }

  @Debounce(250)
  @Bind()
  public handleResize() {
    const columns = this.getColumnsFromWidth();
    if (columns !== this.state.columns) {
      this.setState({
        columns,
      });
    }
  }

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

  @Bind()
  public getColumnsFromWidth() {
    if (typeof window === 'undefined' || window.innerWidth > 800) {
      return 3;
    } else if (window.innerWidth > 600) {
      return 2;
    }
    return 1;
  }

  public render() {
    return (
      <React.Fragment>
        <StyledMasonryGallery cols={this.state.columns} cellHeight={300} spacing={5}>
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
