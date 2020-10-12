import React from 'react';

import {
  SpinnerContainerStyled,
  SpinnerOverlayStyled,
} from './with-spinner.styles';

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlayStyled>
        <SpinnerContainerStyled />
      </SpinnerOverlayStyled>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
