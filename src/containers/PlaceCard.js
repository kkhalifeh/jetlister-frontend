import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

class PlaceCard extends Component {

  renderPhoto = () => {
    return "https://lh3.googleusercontent.com/p/AF1QipNwyvPIiqUfEAe-LUdn_v1IgDrzv448A4qWpztk=s1600-w400"
  }


  render() {
    const { name, formatted_address, formatted_phone_number, website } = this.props.place
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.renderPhoto()} />
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
          <Card.Link href="#">Remove</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}

export default PlaceCard
