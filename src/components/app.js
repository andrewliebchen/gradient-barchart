'use strict';

import React from 'react/addons';
import _ from 'lodash';

// CSS
require('normalize.css');
require('../styles/main.scss');

const DATA = [
  {name: "Trump", value: 32},
  {name: "Carson", value: 19},
  {name: "Bush", value: 9},
  {name: "Cruz", value: 7},
  {name: "Huckabee", value: 5},
  {name: "Walker", value: 5},
  {name: "Fiorina", value: 3},
  {name: "Paul", value: 3},
  {name: "Rubio", value: 3},
  {name: "Christie", value: 2},
  {name: "Kasich", value: 2},
  {name: "Graham", value: 1},
  {name: "Jindal", value: 1},
  {name: "Santorum", value: 1},
  {name: "Someone else (vol.)", value: 3},
  {name: "None/No one", value: 2},
  {name: "No opinion", value: 2},
];

const BarChart = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render() {
    let values = [];
    let total = 0;
    let colorStops = [];

    _.map(this.props.data, function(element) {
      values.push(element.value);
      total += element.value;
    });

    _.map(values, function(value, i) {
      let prevValue = i > 0 ? values[i - 1] : 0;
      let currentValue = (value / total) * 100;
      colorStops.push(prevValue / total, value / total);
    });

    console.log(values);
    console.log(total);
    console.log(colorStops);

    let gradientStyle = {
      backgroundImage: `linear-gradient(to bottom, )`
    };

    return (
      <div className="bar-chart"/>
    );
  }
});

const App = React.createClass({
  render() {
    return (
      <div className="main">
        <BarChart data={DATA}/>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content')); // jshint ignore:line

module.exports = App;
