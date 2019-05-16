import React, { Component } from 'react'
import PlaceCard from './PlaceCard'
import { CardDeck } from 'react-bootstrap';

class CardContainer extends Component {

  render() {
    const places = [...this.props.places]
    return (
      places.map(place => {
        return (
            <PlaceCard place={place} key={place.place_id} />
        )
      })
    )
  }
}

export default CardContainer
