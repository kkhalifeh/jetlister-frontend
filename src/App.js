import React, { Component } from 'react'
import './App.css';
import NavBarContainer from './containers/NavBarContainer';
import ListFormContainer from './containers/ListFormContainer';
import UserListContainer from './containers/UserListContainer';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  state = {
    currentuser: 31,
    userlists: []
  }
  render() {
    return (
      <div>
        <NavBarContainer />
        {this.state.currentuser ? <UserListContainer /> : null}
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