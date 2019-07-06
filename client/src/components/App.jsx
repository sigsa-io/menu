import React from 'react';
import menuCategoryButtons from './menuCategoryButtons.jsx';
import menuByHeaders from './menusByHeaders';
import menuCollapse from './menuCollapse';

class App extends React.Component {
    constructor(props) {
      super(props);
      
    }

    render() {
        return (
            <div>
                <h1>Menu</h1>
                <menuCategoryButtons />
                <menuByHeaders />
                <menuCollapse />
            </div>
        )
    }
}

export default App;