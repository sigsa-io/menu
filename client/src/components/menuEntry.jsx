import React from 'react';
import propTypes from 'prop-types';

const MenuEntry = ({ entries }) => (
  entries.map(entry => (
    <div className="menu-item__2ZxJOnTY">
      <div className="menu-price__1KiCimAr">{entry.menu_price}</div>
      <div className="entry-item-name">{entry.menu_name}</div>
      <div className="menu-description__2HXkC4oE">{entry.menu_description}</div>
    </div>
  ))
);

MenuEntry.propTypes = {
  entries: propTypes.instanceOf(Array).isRequired,
};

export default MenuEntry;
