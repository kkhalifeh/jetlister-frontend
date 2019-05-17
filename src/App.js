import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarContainer from './containers/NavBarContainer';
import ListFormContainer from './containers/ListFormContainer';
import MenuBarContainer from './containers/MenuBarContainer';

class App extends Component {

  state = {
    currentuser: null
  }
  render() {
    return (
      <div>
        <NavBarContainer />
        {/* Search */}
        <ListFormContainer />
        {/* ListPreview
        Banner
        CitiesContainer */}
      </div>
    )
  }
}

export default App