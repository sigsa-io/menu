import React from 'react';

const MenuEntry = props => (
  props.entries.map(entry => (
    <div className="entry-item">
      <div>{entry.menu_price}</div>
      <div>{entry.menu_name}</div>
      <div>{entry.menu_description}</div>
    </div>
  ))
);

export default MenuEntry;