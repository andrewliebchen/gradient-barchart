'use strict';

import React from 'react/addons';

const BarChart = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    className: React.PropTypes.string,
    handleClick: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      width: 'auto',
      height: 'auto',
      className: 'bar-chart'
    };
  },

  render() {
    let total = 0;
    let colorStops = [];
    let runningTotal = 0;

    this.props.data.map((element, i) => {
      total += element.value;
    });

    this.props.data.map((element, i) => {
      colorStops.push(`${element.color} ${(runningTotal / total) * 100}%`, `${element.color} ${((element.value + runningTotal)/ total) * 100}%`);
      runningTotal += element.value;
    });

    let style = {
      backgroundImage: `linear-gradient(${this.props.width > this.props.height ? 'to right' : 'to bottom'}, ${colorStops.join(', ')})`,
      width: this.props.width,
      height: this.props.height
    };

    return (
      <div className={this.props.className} style={style} onClick={this.props.handleClick}/>
    );
  }
});

module.exports = BarChart;
