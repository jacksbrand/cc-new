import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionPreviewStyled,
  PreviewStyled,
  TitleStyled,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewStyled>
    <TitleStyled>{title.toUpperCase()}</TitleStyled>
    <PreviewStyled>
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewStyled>
  </CollectionPreviewStyled>
);

export default CollectionPreview;
