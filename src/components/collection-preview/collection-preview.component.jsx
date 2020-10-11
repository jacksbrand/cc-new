import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { Link } from 'react-router-dom';

import {
  CollectionPreviewStyled,
  PreviewStyled,
  TitleStyled,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewStyled>
    <Link style={{ width: '20px' }} to={`/shop/${title.toLowerCase()}`}>
      <TitleStyled>{title.toUpperCase()}</TitleStyled>
    </Link>
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
