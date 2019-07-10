import React from 'react';
import MenuEntry from './MenuEntry.jsx';

const MenuCategoryButtons = props => (
  props.menuHeaders.map(menuHeader => (
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

export default MenuCategoryButtons;
