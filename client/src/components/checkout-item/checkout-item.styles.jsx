import styled, { css } from 'styled-components';

const sharedStyles = css`
  width: 23%;
`;

export const CheckoutItemContainerStyled = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainerStyled = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NameStyled = styled.span`
  ${sharedStyles}
`;

export const PriceStyled = styled.span`
  ${sharedStyles}
`;

export const QuantityStyled = styled.span`
  ${sharedStyles}
  padding-left: 20px;
  display: flex;
`;

export const ArrowStyled = styled.div`
  cursor: pointer;
  font-size: 17px;
  user-select: none;

  &:hover {
    color: #949494;
  }
`;

export const ValueStyled = styled.span`
  margin: 0 10px;
`;

export const RemoveButtonStyled = styled.div`
  padding-left: 12px;
  cursor: pointer;
  user-select: none;
`;
