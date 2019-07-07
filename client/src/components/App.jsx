import React from 'react';
import menuCategoryButtons from './menuCategoryButtons.jsx';
import menuByHeaders from './menusByHeaders.jsx';
import menuCollapse from './menuCollapse.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu : '',
      menuHeaders: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Menu</h1>
        <menuCategoryButtons />
        <menuByHeaders />
        <menuCollapse />
      </div>
    );
  }
}

export default App;
