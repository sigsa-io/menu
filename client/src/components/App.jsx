import React from 'react';
import axios from 'axios';
import MenuCategoryButtons from './MenuCategoryButtons';
import MenusByHeaders from './MenusByHeaders';

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
      collapseButton = <button className="button-static button-shade button-base" type="button" id="collapse-button" onClick={this.handleCollapseButtonClick}>View full menu</button>;
      menuContainerClassName = 'menus-container-collapsed';
    } else {
      collapseButton = <button className="button-floats button-static button-shade button-base" type="button" id="collapse-button" onClick={this.handleCollapseButtonClick}>Collapse menu</button>;
      menuContainerClassName = 'menus-container';
    }

    return (
      <div className="restaurant-menu">
        <h2 className="section-header">Menu</h2>
        <div>
          <div>
            <div className="menu-nav-bar">
              <MenuCategoryButtons
                restaurants={menuCategory}
                currentSubMenu={currentSubMenu}
                handleMenuCategoryClick={this.handleMenuCategoryClick}
              />
            </div>
            <div className={menuContainerClassName} id="menu-container-id">
              <MenusByHeaders menuHeaders={menuHeaders} />
              <div className="gradient-menu-effect" />
            </div>
            <div className="button-center-text">
              {collapseButton}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
