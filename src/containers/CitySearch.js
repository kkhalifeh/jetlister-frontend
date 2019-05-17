import React, { Component } from 'react'



class CitySearch extends Component {

  state = {
    city: [],
    country: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default CitySearch

