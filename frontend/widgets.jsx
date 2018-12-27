import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Wheather from './wheather';

function Root() {
  return(
    <div className="main">

      <Clock/>
      <Wheather/>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
});