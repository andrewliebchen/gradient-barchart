'use strict';

import React from 'react/addons';
import BarChart from '../barChart';

// CSS
require('normalize.css');
require('../styles/main.scss');

const DATA = [
  {name: "Trump", value: 32, color: 'indianRed'},
  {name: "Carson", value: 19, color: 'lightCoral'},
  {name: "Bush", value: 9, color: 'salmon'},
  {name: "Cruz", value: 7, color: 'darkSalmon'},
  {name: "Huckabee", value: 5, color: 'lightSalmon'},
  {name: "Walker", value: 5, color: 'crimson'},
  {name: "Fiorina", value: 3, color: 'red'},
  {name: "Paul", value: 3, color: 'fireBrick'},
  {name: "Rubio", value: 3, color: 'darkRed'},
  {name: "Christie", value: 2, color: 'pink'},
  {name: "Kasich", value: 2, color: 'lightPink'},
  {name: "Graham", value: 1, color: 'hotPink'},
  {name: "Jindal", value: 1, color: 'deepPink'},
  {name: "Santorum", value: 1, color: 'mediumVioletRed'},
  {name: "Someone else (vol.)", value: 3, color: 'paleVioletRed'},
  {name: "None/No one", value: 2, color: 'lavender'},
  {name: "No opinion", value: 2, color: 'thistle'},
];

const App = React.createClass({
  render() {
    return (
      <div className="main">
        <h1>Republican candidates for president poll results</h1>
        <h3>September 11, 2015</h3>
        <BarChart data={DATA} width={500} height={100}/>
        <small>Get it on <a href="https://www.npmjs.com/package/gradient-barchart">NPM</a>. Follow me on <a href="https://twitter.com/andrewliebchen">Twitter</a>.</small>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content')); // jshint ignore:line

module.exports = App;
