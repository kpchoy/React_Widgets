import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Wheather from './wheather';
import Tabs from './tabs';
import AutoComplete from './autocomplete';

const panes = [
  {title: "one", content: "i am first pane"},
  {title: "second", content: "i am second pane"},
  {title: "third", content: "i am third pane"}
];

function Root() {
  return(
    <div className="main">

      <Clock/>
      <Wheather/>
      <Tabs panes={panes}/>
      <AutoComplete />

    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
});