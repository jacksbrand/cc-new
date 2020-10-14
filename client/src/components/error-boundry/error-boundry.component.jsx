import React, { Component } from 'react';

import {
  ErrorImageOverlayStyled,
  ErrorImageContainerStyled,
  ErrorImageTextStyled,
} from './error-boundary.styles';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlayStyled>
          <ErrorImageContainerStyled imageUrl="https://i.imgur.com/oEUksmz.png" />
          <ErrorImageTextStyled>
            Gulp. You hold back tears as the white liquid spreads across the
            floor from your sad looking carton. You should have bought the
            chocolate milk, it was clearly the better choice. And then maybe you
            wouldn’t have so carelessly smacked it across the room when you
            emphatically pointed at a bird outside. Too late now. You wipe the
            single tear from your eye and go fetch the mop.
          </ErrorImageTextStyled>
          <ErrorImageTextStyled>
            Hopefully this page will be fixed by the time you're done...
          </ErrorImageTextStyled>
        </ErrorImageOverlayStyled>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
