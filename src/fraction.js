import './style.css'

import React, { Component } from 'react'

import debounce from 'lodash.debounce'

export default class extends Component {


  componentDidMount() {
    if (this.props.value) {
      this.setState({ value: parseFloat(this.props.value) })
    }
  }

  decrease = () => {
    let value = this.state.value - 0.5
    if (value < 0) {
      value = this.state.value
    }
    this.setState({ value })
    this.props.onChange({ value: value + 'fr', index: this.props.index })
  }

  increase = () => {
    let value = this.state.value + 0.5
    this.setState({ value })
    this.props.onChange({ value: value + 'fr', index: this.props.index })
  }


  render() {
    return (
      <div className="css-grid-editor__fraction" >
        <button name="decrease" onClick={this.decrease}>-</button>
        <button name="increase" onClick={this.increase}>+</button>
      </div>
    )
  }
}
