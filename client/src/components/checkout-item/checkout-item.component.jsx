import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import {
  ArrowStyled,
  CheckoutItemContainerStyled,
  ImageContainerStyled,
  NameStyled,
  PriceStyled,
  QuantityStyled,
  RemoveButtonStyled,
  ValueStyled,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainerStyled>
      <ImageContainerStyled>
        <img src={imageUrl} alt='item-in-cart' />
      </ImageContainerStyled>
      <NameStyled>{name}</NameStyled>
      <QuantityStyled>
        <ArrowStyled
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          &#10094;
        </ArrowStyled>
        <ValueStyled>{quantity}</ValueStyled>
        <ArrowStyled
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </ArrowStyled>
      </QuantityStyled>
      <PriceStyled>{price}</PriceStyled>
      <RemoveButtonStyled onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonStyled>
    </CheckoutItemContainerStyled>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
