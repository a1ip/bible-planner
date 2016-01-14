import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Planner"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }
        />
        <List>
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          <ListItem primaryText="Starred" leftIcon={<ContentInbox />} />
          <ListItem primaryText="Sent mail" leftIcon={<ContentInbox />} />
          <ListItem primaryText="Drafts" leftIcon={<ContentInbox />} />
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        </List>
      </div>
    );
  }
}
