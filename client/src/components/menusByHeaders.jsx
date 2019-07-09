import React from 'react';
// import MenuEntry from './MenuEntry';

const MenuCategoryButtons = props => (
  props.menuHeaders.map(menuHeader => (
    <div>
      <div>
        <h3 className="menu-header-title">{menuHeader.header_name}</h3>
      </div>
      <div>
        {/* <MenuEntry /> */}
        YASS
      </div>
    </div>
  ))
);

export default MenuCategoryButtons;
