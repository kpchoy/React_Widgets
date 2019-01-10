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

const names = [
  "Abba",
  "Barney",
  "Barbara",
  "Jeff",
  "Jenny",
  "Sarah",
  "Sally",
  "Xander"
];

function Root() {
  return(
    <div className="main">

      <Clock/>
      <Wheather/>

      <div className="interactive">
        <Tabs panes={panes}/>
        <AutoComplete names={names}/>
      </div>

    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
});