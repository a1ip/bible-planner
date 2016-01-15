import React, { Component } from 'react';
import { Link } from 'react-router'
// Material UI
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import BookIcon from 'material-ui/lib/svg-icons/action/book';

export default class App extends Component {
  _handleTouchTap(event) {
    var clickedID = event.target.id;
    alert(clickedID);
  }
  render() {
    var items = [
      {id: 1, title: 'Item 1'},
      {id: 2, title: 'Item 2'},
      {id: 3, title: 'Item 3'}
    ];

    return (
      <div>
        <AppBar
          title="Planner"
          iconElementLeft={<IconButton><BookIcon /></IconButton>}
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
          {items.map(function(item) {
            return <ListItem id={item.id} primaryText={item.title} leftIcon={<BookIcon />}/>
          })}
        </List>
        <Link to={'book'} className="button button-primary">Book</Link>
      </div>
    );
  }
}
