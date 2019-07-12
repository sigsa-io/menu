import React from 'react';
import propTypes from 'prop-types';

const MenuEntry = ({ entries }) => (
  entries.map(({ menu_price, menu_name, menu_description }) => (
    <div className="menu-entry-item">
      <div className="menu-entry-price">{menu_price}</div>
      <div className="entry-item-name">{menu_name}</div>
      <div className="menu-entry-description">{menu_description}</div>
    </div>
  ))
);

MenuEntry.propTypes = {
  entries: propTypes.instanceOf(Array).isRequired,
};

export default MenuEntry;
