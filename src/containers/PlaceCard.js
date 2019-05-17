import React, { Component } from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import CategorySelector from './CategorySelector';
const API_KEY = "AIzaSyC2-olvvVJYlu-5DZZ-EGKMoQ_zZGI3qyg"

class PlaceCard extends Component {

  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${this.props.place.photo_ref}&maxwidth=400`, {
      method: 'GET',
    })
      .then(res => res.text())
      .then(text => this.setState({ imgUrl: text }))
  }

  render() {
    const { name, formatted_address, formatted_phone_number, website, place_id } = this.props.place
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
            <Card.Body>
              <CategorySelector selectCategory={(e) => this.props.selectCategory(e, place_id)} />
            </Card.Body>
            <Form.Label column sm="0">
              Comments
            </Form.Label>

            <Form.Control
              size="sm"
              type="text"
              placeholder="Whats good?"
              onChange={(e) => this.props.addNote(e, place_id)} />
            <br />
            <Card.Link ><Button variant="danger" size="sm" onClick={(e) => this.props.removePlace(e, place_id)}>Remove</Button></Card.Link>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default PlaceCard
