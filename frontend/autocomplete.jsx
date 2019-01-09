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
