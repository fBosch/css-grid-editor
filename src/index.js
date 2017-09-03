import './style.css'

import React, { Component } from 'react'

import Cell from './cell'
import Fractions from './fractions'

export default class extends Component {

  state = {
    matrix: [
      ['header', 'header', 'header'],
      ['sidebar', 'content', 'content'],
      ['footer', 'footer', 'footer']
    ],
    rows: ['1fr', '1fr', '1fr'],
    columns: ['1fr', '1fr', '1fr']
  }

  getStyle = () => {
    const gridTemplateRows = this.state.rows.join(' ')
    const gridTemplateColumns = this.state.columns.join(' ')
    const style = {
      gridTemplateRows,
      gridTemplateColumns
    }
    this.setState({ style })
  }

  componentDidMount() {
    this.getStyle()
  }

  render() {

    if (this.state.style) {
      return (
        <div className="css-grid-editor">
          <Fractions horizontal value={this.state.columns} onChange={this.getStyle}/>
          <Fractions vertical value={this.state.rows} onChange={this.getStyle}/>
          <div className="css-grid-editor__grid" style={this.state.style}>
            {this.state.matrix.map(row => row.map(cell => <Cell>{cell}</Cell>))}
          </div>
        </div>
      )
    }
    return (
      <div></div>
    )

  }
}
