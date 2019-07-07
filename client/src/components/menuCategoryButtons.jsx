import React from 'react';

const MenuCategoryButtons = props => (
  props.restaurants.map(category => (
    <button className="button-menu-header" type="button">{ category }</button>
  ))
);

export default MenuCategoryButtons;
