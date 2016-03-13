import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router';


import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';


injectTapEventPlugin();

import ContactList from './ContactList'
import InputForm from '../containers/InputForm'
import TaskForm from '../containers/TaskForm'
import TaskList from './TaskList'

export default class App extends Component {
  render() {
    console.log("props on app: ", this.props)
    return (
      <div>
        <div className="container">
          <Toolbar>
            <ToolbarGroup firstChild={true} float="left">
              <ToolbarTitle text="ReactReduxCRM" />

              <DropDownMenu value={7}>
                <MenuItem value={1}>
                  <Link to='/'>
                    <h4> Contacts </h4>
                  </Link>
                </MenuItem>
                <MenuItem value={2}>
                  <Link to='/tasks'>
                    <h4> Tasks </h4>
                  </Link>
                </MenuItem>
                <MenuItem value={7} primaryText="Menu" />
              </DropDownMenu>
            </ToolbarGroup>
            <ToolbarGroup float="right">
              <ToolbarTitle text="Options" />
              <FontIcon className="muidocs-icon-custom-sort" />
              <IconMenu
                iconButtonElement={
                  <IconButton touch={true}>
                    <NavigationExpandMoreIcon />
                  </IconButton>
                }
              >
                <MenuItem primaryText="Download" />
                <MenuItem primaryText="More Info" />
              </IconMenu>
              <ToolbarSeparator />
              <RaisedButton label="Create Broadcast" primary={true} />
            </ToolbarGroup>
          </Toolbar>
        </div>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state: ", state);
  return state;
}

export default connect(mapStateToProps)(App)
