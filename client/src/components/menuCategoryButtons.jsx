import React from 'react';

const MenuCategoryButtons = props => (
  <div>
    { props.restaurants.map(category => (
      category.submenu_name === props.currentSubMenu
        ? <button className="button-menu-link-active__3KrRGgFS button-menu-link__1j5RFIKk secondary__37FrTgAl base__1GdpdUto" type="button" id={category.submenu_name} onClick={props.handleMenuCategoryClick}>{category.submenu_name}</button>
        : <button className="button-menu-link__1j5RFIKk secondary__37FrTgAl base__1GdpdUto" type="button" id={category.submenu_name} onClick={props.handleMenuCategoryClick}>{category.submenu_name}</button>
    ))}
  </div>
);

export default MenuCategoryButtons;
