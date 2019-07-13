import React from 'react';
import axios from 'axios';
import MenuCategoryButtons from '.client/src/components/MenuCategoryButtons.jsx';
import MenusByHeaders from '.client/src/components/MenusByHeaders.jsx';
import style from './style/App.style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantData: {},
      currentSubMenu: '',
      currentCollapseToggle: false,
    };
    this.handleMenuCategoryClick = this.handleMenuCategoryClick.bind(this);
    this.handleCollapseButtonClick = this.handleCollapseButtonClick.bind(this);
  }

  componentDidMount() {
    const restaurantId = window.location.pathname.split('/')[1];
    axios.get(`/menuData/${restaurantId}`)
      .then((res) => {
        const restaurantsData = res.data;
        this.setState({
          restaurantData: restaurantsData[0],
          currentSubMenu: restaurantsData[0].menu_category[0].submenu_name,
        });
      });
  }

  handleMenuCategoryClick(e) {
    this.setState({ currentSubMenu: e.target.id });
  }

  handleCollapseButtonClick() {
    const { currentCollapseToggle } = this.state;
    const newToggle = !currentCollapseToggle;
    this.setState({ currentCollapseToggle: newToggle });
  }

  render() {
    const { restaurantData } = this.state;
    const { currentSubMenu } = this.state;
    const { currentCollapseToggle } = this.state;
    const menuCategory = restaurantData.menu_category || [];
    let menuHeaders = [];
    for (let i = 0; i < menuCategory.length; i += 1) {
      if (menuCategory[i].submenu_name === currentSubMenu) {
        menuHeaders = menuCategory[i].headers || [];
      }
    }

    let collapseButton;
    let menuContainerClassName;

    if (!currentCollapseToggle) {
      collapseButton = <button className={`${style.button_static} ${style.button_shade} ${style.button_base}`} type="button" id="collapse-button" onClick={this.handleCollapseButtonClick}>View full menu</button>;
      menuContainerClassName = style.menus_container_collapsed;
    } else {
      collapseButton = <button className={`${style.button_floats} ${style.button_static} ${style.button_shade} ${style.button_base}`} type="button" id="collapse-button" onClick={this.handleCollapseButtonClick}>Collapse menu</button>;
      menuContainerClassName = style.menus_container;
    }

    return (
      <div className={`${style.restaurant_menu}`}>
        <h2 className={`${style.section_header}`}>Menu</h2>
        <div>
          <div>
            <div className={`${style.menu_nav_bar}`}>
              <MenuCategoryButtons
                restaurants={menuCategory}
                currentSubMenu={currentSubMenu}
                handleMenuCategoryClick={this.handleMenuCategoryClick}
              />
            </div>
            <div className={menuContainerClassName} id="menu-container-id">
              <MenusByHeaders menuHeaders={menuHeaders} />
              <div className={`${style.gradient_menu_effect}`} />
            </div>
            <div className={`${style.button_center_text}`}>
              {collapseButton}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
