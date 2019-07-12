import React from 'react';
import propTypes from 'prop-types';

const MenuCategoryButtons = ({ restaurants, currentSubMenu, handleMenuCategoryClick }) => (
  <div className="submenu-buttons-nav">
    { restaurants.map(category => (
      category.submenu_name === currentSubMenu
        ? <button className="submenu-header-button-active submenu-header-button-link submenu-secondary-cursor submenu-header-outline" type="button" id={category.submenu_name} onClick={handleMenuCategoryClick}>{category.submenu_name}</button>
        : <button className="submenu-header-button-link submenu-secondary-cursor submenu-header-outline" type="button" id={category.submenu_name} onClick={handleMenuCategoryClick}>{category.submenu_name}</button>
    ))}
  </div>
);

MenuCategoryButtons.propTypes = {
  restaurants: propTypes.instanceOf(Array).isRequired,
  currentSubMenu: propTypes.string.isRequired,
  handleMenuCategoryClick: propTypes.func.isRequired,
};

export default MenuCategoryButtons;
