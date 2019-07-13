import React from 'react';
import propTypes from 'prop-types';
import style from './style/MenuCategoryButtons.style.css';

const MenuCategoryButtons = ({ restaurants, currentSubMenu, handleMenuCategoryClick }) => (
  <div className="submenu-buttons-nav">
    { restaurants.map(category => (
      category.submenu_name === currentSubMenu
        ? <button className={`${style.submenu_header_button_active} ${style.submenu_header_button_link} ${style.submenu_secondary_cursor} ${style.submenu_header_outline}`} type="button" id={category.submenu_name} onClick={handleMenuCategoryClick}>{category.submenu_name}</button>
        : <button className={`${style.submenu_header_button_link} ${style.submenu_secondary_cursor} ${style.submenu_header_outline}`} type="button" id={category.submenu_name} onClick={handleMenuCategoryClick}>{category.submenu_name}</button>
    ))}
  </div>
);

MenuCategoryButtons.propTypes = {
  restaurants: propTypes.instanceOf(Array).isRequired,
  currentSubMenu: propTypes.string.isRequired,
  handleMenuCategoryClick: propTypes.func.isRequired,
};

export default MenuCategoryButtons;
