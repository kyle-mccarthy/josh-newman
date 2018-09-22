declare module 'react-images' {
  export interface ILightboxProps {
    backdropClosesModal?: boolean;
    closeButtonTitle?: string;
    currentImage?: number;
    customControls?: React.ReactNode[];
    enableKeyboardInput?: boolean;
    imageCountSeparator?: string;
    images: IPhoto[];
    isOpen?: boolean;
    leftArrowTitle?: string;
    onClickImage?: (ev: any) => any;
    onClickNext?: (ev: any) => any;
    onClickPrev?: (ev: any) => any;
    onClose: (ev: any) => any;
    preloadNextImage?: boolean;
    preventScroll?: boolean;
    rightArrowTitle?: string;
    showCloseButton?: boolean;
    showImageCount?: boolean;
    showThumbnails?: boolean;
    spinner?: (ev: any) => any;
    spinnerColor?: string;
    spinnerSize?: number;
    theme?: object;
    thumbnailOffset?: number;
    width?: number;
  }

  export interface IPhoto {
    src: string;
    srcSet?: string | string[];
    caption?: string | React.ReactElement<any>;
    thumbnail?: string;
  }

  export default class Lightbox extends React.Component<ILightboxProps, any> {}
}
