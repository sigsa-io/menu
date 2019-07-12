import React from 'react';
import propTypes from 'prop-types';
import MenuEntry from './MenuEntry';


const MenusByHeaders = ({ menuHeaders }) => (
  menuHeaders.map(menuHeader => (
    <div className="menu-section-overall">
      <div className="menu-section-header">
        <h3 className="menu-section-title">{menuHeader.header_name}</h3>
      </div>
      <div className="menu-items">
        <MenuEntry entries={menuHeader.entries} />
      </div>
    </div>
  ))
);

MenusByHeaders.propTypes = {
  menuHeaders: propTypes.instanceOf(Array).isRequired,
};

export default MenusByHeaders;
