import React, { Component } from 'react'
import './App.css';
import NavBarContainer from './containers/NavBarContainer';
import ListFormContainer from './containers/ListFormContainer';

class App extends Component {
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