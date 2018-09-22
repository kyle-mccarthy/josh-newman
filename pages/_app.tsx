import { default as CustomApp } from '@src/components/app/App';
import App, {Container} from 'next/app';
import React from 'react';

export default class MyApp extends App {
  public static async getInitialProps({ Component, router, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  public render() {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <CustomApp Component={Component} {...pageProps} />
      </Container>
    );
  }
}
