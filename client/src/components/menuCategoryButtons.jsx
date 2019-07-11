import React from 'react';
import propTypes from 'prop-types';

const MenuCategoryButtons = ({ restaurants, currentSubMenu, handleMenuCategoryClick }) => (
  <div className="submenu-buttons-nav">
    { restaurants.map(category => (
      category.submenu_name === currentSubMenu
        ? <button className="button-menu-link-active__3KrRGgFS button-menu-link__1j5RFIKk secondary__37FrTgAl base__1GdpdUto" type="button" id={category.submenu_name} onClick={handleMenuCategoryClick}>{category.submenu_name}</button>
        : <button className="button-menu-link__1j5RFIKk secondary__37FrTgAl base__1GdpdUto" type="button" id={category.submenu_name} onClick={handleMenuCategoryClick}>{category.submenu_name}</button>
    ))}
  </div>
);

MenuCategoryButtons.propTypes = {
  restaurants: propTypes.instanceOf(Array).isRequired,
  currentSubMenu: propTypes.string.isRequired,
  handleMenuCategoryClick: propTypes.func.isRequired,
};

export default MenuCategoryButtons;
