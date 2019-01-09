import React, { Component } from 'react';

export default class AutoComplete extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputVal: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
      // return the whole list of names
    }

    this.props.names.forEach(name => {
      const sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });
  }

  render() {
    let listNames = this.props.names.map((person, index) => {
      return (
        <li key={index}>
          {person}
        </li>
      );      
    });


    return (
      <div>
        Autocomplete

           <input
            onChange={(e) => this.handleInput(e)}
            value={this.state.inputVal}
            placeholder='Search...'/>
        
        <ul>
          {listNames}
        </ul> 
      </div>
    );
  }
}
