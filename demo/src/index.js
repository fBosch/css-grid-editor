import './style.css'

import React, {Component} from 'react'

import Example from '../../src'
import {render} from 'react-dom'

class Demo extends Component {
  render() {
    return <div className="demo">
      <h1>react-css-grid-editor</h1>
      <Example/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
