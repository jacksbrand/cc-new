import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item-component';

import { DirectoryMenuStyled } from './directory-component.styles';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuStyled>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuStyled>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
