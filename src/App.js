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
import RaisedButton from 'material-ui/lib/raised-button';
// Parser
var bcv_parser = require("bible-passage-reference-parser/js/en_bcv_parser").bcv_parser;
var bcv = new bcv_parser;

export default class App extends Component {
  _handleTouchTap(event) {
    var clickedID = event.target.id;
    alert(clickedID);
  }
  render() {
    var items = [];
    var books = bcv.translation_info("").books;
    var chapters = bcv.translation_info("").chapters;
    for (var i=0; i<66; i++) {
      items.push({id: i, title: books[i], description: chapters[books[i]].length});
    }

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
          {
            items.map(function(item) {
              return <ListItem id={item.id} key={item.id} primaryText={item.title} secondaryText={item.description} leftIcon={<BookIcon />} onTouchTap={this._handleTouchTap}/>
            }.bind(this))
          }
        </List>
        <Link to={'book'} className="button button-primary">Book</Link>
        <RaisedButton label="Click" onTouchTap={this._handleTouchTap}/>
      </div>
    );
  }
}
