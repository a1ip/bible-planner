import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Checkbox from 'material-ui/lib/checkbox';
import AppBar from 'material-ui/lib/app-bar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Plan"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <List>
          <ListItem primaryText="Matthew" leftIcon={<ContentInbox />} />
          <ListItem primaryText="Mark" leftIcon={<ContentInbox />} />
          <ListItem primaryText="John" leftIcon={<ContentInbox />} />
          <ListItem primaryText="Luke" leftIcon={<ContentInbox />} />
        </List>
        <RaisedButton label="Save" />
      </div>
    );
  }
}
