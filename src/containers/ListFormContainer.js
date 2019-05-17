import React, { Component } from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap';
import LocationSearchInput from './LocationSearchInput';
import CardContainer from './CardContainer';
import CitySearch from './CitySearch';
const API_KEY = "AIzaSyC2-olvvVJYlu-5DZZ-EGKMoQ_zZGI3qyg"

class ListFormContainer extends Component {

  state = {
    places: [],
    location: {}
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
            website: data.result.website
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
    console.log('here')
    console.log('state', this.state)
  }


  render() {
    return (
      <Card style={{ width: 'auto' }}>
        <h3>Create List</h3>
        <ListGroup variant="flush">
          <ListGroup.Item><CitySearch /></ListGroup.Item>
          <ListGroup.Item><LocationSearchInput addPlace={this.addPlace} /></ListGroup.Item>
          {this.state.places.length > 0 ? <ListGroup.Item><CardContainer
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
