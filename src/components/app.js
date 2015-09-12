'use strict';

import React from 'react/addons';
import _ from 'lodash';

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

const BarChart = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      width: 'auto',
      height: 'auto'
    };
  },

  render() {
    let total = 0;
    let colorStops = [];
    let runningTotal = 0;

    _.map(this.props.data, function(element) {
      total += element.value;
    });

    _.map(this.props.data, function(element, i) {
      colorStops.push(`${element.color} ${(runningTotal / total) * 100}%`, `${element.color} ${((element.value + runningTotal)/ total) * 100}%`);
      runningTotal += element.value;
    });

    let style = {
      backgroundImage: `linear-gradient(${this.props.width > this.props.height ? 'to right' : 'to bottom'}, ${colorStops.join(', ')})`,
      width: this.props.width,
      height: this.props.height
    };

    return (
      <div className="bar-chart" style={style}/>
    );
  }
});

const App = React.createClass({
  render() {
    return (
      <div className="main">
        <BarChart data={DATA} width={100} height={500}/>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content')); // jshint ignore:line

module.exports = App;
