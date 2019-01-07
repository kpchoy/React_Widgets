import React, { Component } from 'react';

class Headers extends Component {
  render() {
    const selected = this.props.selectedPane; 
    const headers = this.props.panes.map((pane, index) => {
      const title = pane.title;
      const klass = index === selected ? 'active' : '';

      return (
        <li
          key={index}
          className={klass}
          onClick={this.props.onTabChosen(index)}>
          {title} {' '}
        </li>
      );
    });

    return (
      <div>
        {headers}
      </div>
    );
  }
}


export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedPane: 0};
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({selectedPane: num});
  }

  render() {
    return (
      <div>
        <h1>Tabs Widget!</h1>
        <article>
          <ul>

          </ul>
        </article>
      </div>
    )
  }
}
