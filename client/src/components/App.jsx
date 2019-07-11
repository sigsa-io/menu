import React from 'react';
import axios from 'axios';
import MenuCategoryButtons from './MenuCategoryButtons.jsx';
import MenusByHeaders from './MenusByHeaders.jsx';

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
    axios.get('http://localhost:3002/api/menuData/')
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
      collapseButton = <button className="button-static__33d7U9QU ghost__3NHGenYo base__1FLAX22M" type="button" id="collapse-button" onClick={this.handleCollapseButtonClick}>View full menu</button>;
      menuContainerClassName = 'menus-container-collapsed__wHgxK8Fc';
    } else {
      collapseButton = <button className="button-floats__TXcpIDKw button-static__33d7U9QU ghost__3NHGenYo base__1FLAX22M" type="button" id="collapse-button" onClick={this.handleCollapseButtonClick}>Collapse menu</button>;
      menuContainerClassName = 'menu-container';
    }

    return (
      <div className="restaurant-menu">
        <h2 className="sectionHeader__ByIiO8gW">Menu</h2>
        <div>
          <div>
            <div className="menu-nav__1DnmIqFZ">
              <MenuCategoryButtons
                restaurants={menuCategory}
                currentSubMenu={currentSubMenu}
                handleMenuCategoryClick={this.handleMenuCategoryClick}
              />
            </div>
            <div className={menuContainerClassName} id="menu-container-id">
              <MenusByHeaders menuHeaders={menuHeaders} />
              <div className="gradient__1A38iyWn" />
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
