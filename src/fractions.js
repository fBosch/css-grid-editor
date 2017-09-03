import './style.css'

import React, { Component } from 'react'

import Fraction from './fraction'

export default class extends Component {
  orientation = this.props.vertical ? 'css-grid-editor__fractions--vertical' : 'css-grid-editor__fractions--horizontal'

  getStyle = () => {
    if (this.props.value) {
      const styleProperty = this.props.vertical ? 'gridTemplateRows' : 'gridTemplateColumns'
      const style = {
        [styleProperty]: this.props.value.join(' ')
      }
      this.setState({ style })
    }
  }

  componentDidMount() {
    this.getStyle()
  }

  onFractionChange(fraction) {
    console.log(fraction)
    this.props.value[fraction.index] = fraction.value
    this.getStyle()
    this.props.onChange()
  }

  render() {

    if (this.state) {
      return (
        <div className={"css-grid-editor__fractions " + this.orientation} style={this.state.style}>
          {this.props.value.map((fraction, index) => <Fraction value={fraction} key={index} index={index} onChange={this.onFractionChange.bind(this)} />)}
        </div>
      )
    }
    return (
      <div></div>
    )
  }
}
