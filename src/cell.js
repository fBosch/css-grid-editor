import './style.css'

import React, { Component } from 'react'

export default class extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="css-grid-editor__cell">
        {this.props.children}
      </div>
    )
  }
}
