import React from 'react';
import axios from 'axios';
import menuCategoryButtons from './menuCategoryButtons.jsx';
import menusByHeaders from './menusByHeaders.jsx';
import menuCollapse from './menuCollapse.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants : [],
      // menu : '',
      // menuHeaders: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3002/api/menuData')
      .then((res) => {
        const restaurantsData = res.data;
        // console.log(restaurantsData[0]['menu']);
        this.setState({ restaurants: restaurantsData }, () => {
          console.log(this.state.restaurants);
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Menu</h1>
        <menuCategoryButtons />
        <menusByHeaders />
        <menuCollapse />
      </div>
    );
  }
}

export default App;
