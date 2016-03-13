import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';

import TaskForm from '../containers/TaskForm'
import TaskList from './TaskList'

export default class Tasks extends Component {
  render() {
    console.log("props on app: ", this.props)
    return (
      <div>
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

export default connect(mapStateToProps)(Tasks)
