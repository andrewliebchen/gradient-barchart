'use strict';

describe('GradientBarchartsApp', () => {
  let React = require('react/addons');
  let GradientBarchartsApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GradientBarchartsApp = require('components/GradientBarchartsApp.js');
    component = React.createElement(GradientBarchartsApp);
  });

  it('should create a new instance of GradientBarchartsApp', () => {
    expect(component).toBeDefined();
  });
});
