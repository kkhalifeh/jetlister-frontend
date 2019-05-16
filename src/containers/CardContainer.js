import React, { Component } from 'react'
import PlaceCard from './PlaceCard'


class CardContainer extends Component {

  render() {
    const places = [...this.props.places]
    return (
      places.map(place => {
        return (
          <PlaceCard place={place} key={place.place_id} removePlace={this.props.removePlace} />
        )
      })
    )
  }
}

export default CardContainer
