import React, { Component } from 'react'
import '../App.css'

export default class Button extends Component {
    render() {
      return (
        <div
          onClick={this.props.onClick}
          className="Button"
          data-size={this.props.size}
          data-value={this.props.value}
        >
          {this.props.label}
        </div>
      )
    }
  }