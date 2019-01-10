import React, { Component } from 'react';

export default class AutoComplete extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputVal: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.selectName = this.selectName.bind(this);
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
      // slices each name to length of input val
      const sub = name.slice(0, this.state.inputVal.length);
      // if sliced name matches input val, then push name into matches
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No Matches');
    }

    return matches; 
  }

  selectName(event) {

    const name = event.currentTarget.innerText;
    this.setState({inputVal:name});
  }

  render() {
    let listNames = this.matches().map((person, index) => {
      return (
        <li key={index} onClick={this.selectName}>
          {person}
        </li>
      );      
    });


    return (
      <div>
        <h1>AutoComplete</h1>

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
