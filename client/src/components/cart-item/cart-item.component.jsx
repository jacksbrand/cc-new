import React from 'react';

import {
  CartItemStyled,
  ImageStyled,
  ItemDetailsStyled,
  NameStyled,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemStyled>
    <ImageStyled src={imageUrl} alt='item' />
    <ItemDetailsStyled>
      <NameStyled>{name}</NameStyled>
      <span className='price'>
        {quantity} * £{price}
      </span>
    </ItemDetailsStyled>
  </CartItemStyled>
);

export default CartItem;
