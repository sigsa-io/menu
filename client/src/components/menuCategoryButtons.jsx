import React from 'react';

const MenuCategoryButtons = props => (
  <div>
    { props.restaurants.map(category => (
      <button className="button-menu-header" type="button" id={category.submenu_name} onClick={props.handleMenuCategoryClick}>{category.submenu_name}</button>
    ))}
  </div>
);

export default MenuCategoryButtons;
