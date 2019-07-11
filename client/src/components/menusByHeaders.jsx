import React from 'react';
import propTypes from 'prop-types';
import MenuEntry from './MenuEntry.jsx';


const MenusByHeaders = ({ menuHeaders }) => (
  menuHeaders.map(menuHeader => (
    <div className="menu-section__14yfICNP">
      <div className="menu-section-header__3nfLpHEA">
        <h3 className="menu-section-title__22Q2IFWX">{menuHeader.header_name}</h3>
      </div>
      <div className="menu-items__2DRnPKGV">
        <MenuEntry entries={menuHeader.entries} />
      </div>
    </div>
  ))
);

MenusByHeaders.propTypes = {
  menuHeaders: propTypes.instanceOf(Array).isRequired,
};

export default MenusByHeaders;
