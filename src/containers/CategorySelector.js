import React, { Component } from 'react'
import Select from 'react-select';

class CategorySelector extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/categories')
      .then(res => res.json())
      .then(data => {
        this.setState({ categories: data })
      })
  }

  render() {
    return (
      <Select
        defaultValue=''
        options={this.state.categories}
        onChange={(e) => this.props.selectCategory(e)}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.id}
      />
    )
  }
}

export default CategorySelector

