import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import MenuCategoryButtons from './MenuCategoryButtons.jsx';
// eslint-disable-next-line import/extensions
import MenusByHeaders from './MenusByHeaders.jsx';
// // eslint-disable-next-line import/extensions
// import MenuCollapse from './MenuCollapse.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantData: {},
      currentSubMenu: '',
      // menu : '',
      // menuHeaders: [],
    };
    this.handleMenuCategoryClick = this.handleMenuCategoryClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3002/api/menuData')
      .then((res) => {
        const restaurantsData = res.data;
        this.setState({ restaurantData: restaurantsData[0] });
      });
  }

  handleMenuCategoryClick(e) {
    console.log(e.target.id);
    this.setState({ currentSubMenu: e.target.id }, () => console.log(this.state.currentSubMenu));
  }

  render() {
    const { restaurantData } = this.state;
    const { currentSubMenu } = this.state;
    const menuCategory = restaurantData.menu_category || [];
    // const currentMenuItems = restaurantData.menu_category.headers || [];
    // let menuCategory = [];
    // if (restaurantData.menu_category) {
    //   menuCategory = restaurantData.menu_category;
    // }
    // const menuCategoryHeader = menuCategory[0].headers || [];
    let menuHeaders = [];
    for (let i = 0; i < menuCategory.length; i += 1) {
      if (menuCategory[i].submenu_name === currentSubMenu) {
        menuHeaders = menuCategory[i].headers || [];
        console.log(menuHeaders);
      }
    }
    return (
      <div className="restaurant-menu">
        <h2 className="section-header">Menu</h2>
        <div>
          <div className="buttom-menu-nav">
            <MenuCategoryButtons
              restaurants={menuCategory}
              handleMenuCategoryClick={this.handleMenuCategoryClick}
            />
          </div>
          <div className="menu-container">
            {/* conditional render of each header */}
            {/* each menusByHeaders has entries of menu sorted by their header */}
            {/* <MenusByHeaders /> */}
            <MenusByHeaders menuHeaders={menuHeaders} />
            {/* <MenusByHeaders currentSubMenu={currentSubMenu} /> */}
          </div>
          {/* <MenuCollapse /> */}
        </div>
      </div>
    );
  }
}

export default App;
