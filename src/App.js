import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Checkbox from 'material-ui/lib/checkbox';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <RaisedButton label="Default" />
        <Checkbox />
      </div>
    );
  }
}
