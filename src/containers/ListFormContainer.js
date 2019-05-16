import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import LocationSearchInput from './LocationSearchInput';
import CardContainer from './CardContainer';
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
            photos: data.result.photos,
            location: data.result.geometry.location,
            website: data.result.website
          }]
        })
      });
  }

  render() {
    return (
      <Card style={{ width: 'auto' }}>
        <h3>Create List</h3>
        <ListGroup variant="flush">
          <ListGroup.Item>CitySelector</ListGroup.Item>
          <ListGroup.Item><LocationSearchInput addPlace={this.addPlace} /></ListGroup.Item>
          {this.state.places.length > 0 ? <ListGroup.Item><CardContainer places={this.state.places}/></ListGroup.Item> : null}
        </ListGroup>
      </Card>
    )
  }
}

export default ListFormContainer
