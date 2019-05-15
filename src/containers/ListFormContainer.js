import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap';

class ListFormContainer extends Component {
  render() {
    return (
      <Card style={{ width: 'auto' }}>
        <h3>Create List</h3>
        <ListGroup variant="flush">
          <ListGroup.Item>CitySelector</ListGroup.Item>
          <ListGroup.Item>GoogleAutoComplete</ListGroup.Item>
          <ListGroup.Item>FormInfo</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}

export default ListFormContainer
