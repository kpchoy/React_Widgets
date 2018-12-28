import React, { Component } from 'react'

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: 0};
  }

  render() {
    return (
      <div>
        <h1>Tabs Widget!</h1>
      </div>
    )
  }
}
