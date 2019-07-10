import React from 'react';

const MenuEntry = props => (
  props.entries.map(entry => (
    <div className="menu-item__2ZxJOnTY">
      <div className="menu-price__1KiCimAr">{entry.menu_price}</div>
      <div className="entry-item-name">{entry.menu_name}</div>
      <div className="menu-description__2HXkC4oE">{entry.menu_description}</div>
    </div>
  ))
);

export default MenuEntry;
