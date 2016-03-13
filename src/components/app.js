import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
          <AppBar
            className="menu-bar"
            title="The React/Redux CRM"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </div>
        <div className="container">
            <div className="flex-item-app">
              <h2>Add a contact</h2>
              <InputForm />
            </div>
            <div className="flex-item-app">
              <h2>View Your Contacts</h2>
              <ContactList dispatch={this.props.dispatch} contacts={this.props.contacts.all}/>
            </div>
        </div>
        <div className="container">
            <div className="flex-item-app">
              <h2>Add a task</h2>
              <TaskForm />
            </div>
            <div className="flex-item-app">
              <h2>View Your Contacts</h2>
              <TaskList List dispatch={this.props.dispatch} tasks={this.props.tasks.all}/>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state: ", state);
  return state;
}

export default connect(mapStateToProps)(App)
