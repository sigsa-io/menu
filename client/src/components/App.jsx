import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import MenuCategoryButtons from './MenuCategoryButtons.jsx';
// eslint-disable-next-line import/extensions
// import MenusByHeaders from './MenusByHeaders.jsx';
// // eslint-disable-next-line import/extensions
// import MenuCollapse from './MenuCollapse.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantData: {},
      // currentCategory: '',
      // menu : '',
      // menuHeaders: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3002/api/menuData')
      .then((res) => {
        const restaurantsData = res.data;
        this.setState({ restaurantData: restaurantsData[0] });
      });
  }

  render() {
    const { restaurantData } = this.state;
    const menuCategory = restaurantData.menu_category || [];
    // let menuCategory = [];
    // if (restaurantData.menu_category) {
    //   menuCategory = restaurantData.menu_category;
    // }
    return (
      <div>
        <h1>Menu</h1>
        <div className="buttom-menu-nav">
          <MenuCategoryButtons restaurants={menuCategory} />
        </div>
        <div className="menu-container">
          {/* conditional render of each header */}
          {/* each menusByHeaders has entries of menu sorted by their header */}
          {/* <MenusByHeaders /> */}
        </div>
        {/* <MenuCollapse /> */}
      </div>
    );
  }
}

export default App;
