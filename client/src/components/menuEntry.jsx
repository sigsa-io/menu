import React from 'react';
import propTypes from 'prop-types';
import style from './style/MenuEntry.style.css';

const MenuEntry = ({ entries }) => (
  entries.map(entry => (
    <div className={style.menu_entry_item}>
      <div className={style.menu_entry_price}>{entry.menu_price}</div>
      <div className={style.entry_item_name}>{entry.menu_name}</div>
      <div className={style.menu_entry_description}>{entry.menu_description}</div>
    </div>
  ))
);

MenuEntry.propTypes = {
  entries: propTypes.instanceOf(Array).isRequired,
};

export default MenuEntry;
