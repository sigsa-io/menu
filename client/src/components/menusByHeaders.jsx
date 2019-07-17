import React from 'react';
import propTypes from 'prop-types';
import MenuEntry from './menuEntry';
import style from './style/MenusByHeaders.style.css';

const MenusByHeaders = ({ menuHeaders }) => (
  menuHeaders.map((menuHeader, key) => (
    <div key={key} className={style.menu_section_overall}>
      <div className={style.menu_section_header}>
        <h3 className={style.menu_section_title}>{menuHeader.header_name}</h3>
      </div>
      <div className={style.menu_items}>
        <MenuEntry entries={menuHeader.entries} />
      </div>
    </div>
  ))
);

MenusByHeaders.propTypes = {
  menuHeaders: propTypes.instanceOf(Array).isRequired,
};

export default MenusByHeaders;
