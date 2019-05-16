import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
const API_KEY = "AIzaSyC2-olvvVJYlu-5DZZ-EGKMoQ_zZGI3qyg"

class PlaceCard extends Component {

  state = {
    note: null
  }

  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${this.props.place.photo_ref}&maxwidth=400`, {
      method: 'GET',
    })
      .then(res => res.text())
      .then(text => this.setState({ imgUrl: text }))
  }


  render() {
    const { name, formatted_address, formatted_phone_number, website, photo_ref, place_id } = this.props.place
    return (
      <>
        <Card style={{ width: 'auto' }}>
          <Card.Img variant="top" src={`https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${this.props.place.photo_ref}&maxwidth=400`} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {formatted_address}
              <br />
              {formatted_phone_number}
              <br />
              {website}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Note</Card.Link>
            <Card.Link ><Button variant="primary" size="sm" onClick={(e) => this.props.removePlace(e, place_id)}>Remove</Button></Card.Link>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default PlaceCard
