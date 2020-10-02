import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionFooterStyled,
  CollectionItemStyled,
  CustomButtonStyled,
  ImageStyled,
  NameStyled,
  PriceStyled,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemStyled>
      <ImageStyled
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterStyled>
        <NameStyled>{name}</NameStyled>
        <PriceStyled>{`£${price}`}</PriceStyled>
      </CollectionFooterStyled>
      <CustomButtonStyled onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButtonStyled>
    </CollectionItemStyled>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
