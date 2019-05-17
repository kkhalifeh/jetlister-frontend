import React, { Component } from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap';
import LocationSearchInput from './LocationSearchInput';
import CardContainer from './CardContainer';
import CitySearch from './CitySearch';
const API_KEY = "AIzaSyC2-olvvVJYlu-5DZZ-EGKMoQ_zZGI3qyg"

class ListFormContainer extends Component {

  state = {
    places: [],
    location: {},
    currentuser: 31
  }

  addPlace = (id) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          places: [...this.state.places, {
            place_id: data.result.place_id,
            formatted_address: data.result.formatted_address,
            formatted_phone_number: data.result.formatted_phone_number,
            name: data.result.name,
            photo_ref: data.result.photos[0].photo_reference,
            location: data.result.geometry.location,
            website: data.result.website,
            category_id: null,
            note: ''
          }]
        })
      });
  }

  removePlace = (e, id) => {
    e.preventDefault()
    const places = [...this.state.places]
    const idx = places.findIndex(place => place.place_id === id)
    this.setState((prevState) => ({
      places: [...prevState.places.slice(0, idx), ...prevState.places.slice(idx + 1)]
    }))
  }

  saveList = (e) => {
    e.preventDefault()
    console.log('state', this.state)
    const list = { ...this.state }
    e.preventDefault()
    fetch("http://localhost:3000/lists/create", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(list), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
  }


  citySelector = (e) => {
    console.log(e.id)
    this.setState({ location_id: e.id })
  }

  addNote = (e, id) => {
    const places = [...this.state.places]
    const foundPlace = places.find(place => place.place_id === id)
    const placeIdx = places.findIndex(place => place.place_id === id)
    foundPlace.note = e.target.value
    places[placeIdx] = foundPlace
    this.setState({ places: places })
  }

  selectCategory = (e, id) => {
    const places = [...this.state.places]
    const foundPlace = places.find(place => place.place_id === id)
    const placeIdx = places.findIndex(place => place.place_id === id)
    foundPlace.category_id = e.id
    places[placeIdx] = foundPlace
    this.setState({ places: places })
  }


  render() {
    return (
      <Card style={{ width: 'auto' }}>
        <h3>Create List</h3>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <CitySearch
              citySelector={this.citySelector} />
          </ListGroup.Item>
          <ListGroup.Item>
            <LocationSearchInput addPlace={this.addPlace} />
          </ListGroup.Item>
          {this.state.places.length > 0 ? <ListGroup.Item>
            <CardContainer
              selectCategory={this.selectCategory}
              addNote={this.addNote}
              places={this.state.places}
              removePlace={this.removePlace} />
          </ListGroup.Item> : null}
        </ListGroup>
        <ListGroup.Item>
          <div>
            <Button
              onClick={(e) => this.saveList(e)}
              variant="success"
              size="md" block>
              Save
            </Button>
          </div>
        </ListGroup.Item>
      </Card>
    )
  }
}

export default ListFormContainer
