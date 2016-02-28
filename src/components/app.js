import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'

import ContactList from './ContactList'
import InputForm from '../containers/InputForm'

export default class App extends Component {
  render() {
    console.log("props on app: ", this.props)
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1>The React/Redux CRM</h1>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h2>Add a contact</h2>
              <InputForm dispatch={this.props.dispatch} />
            </div>
            <div className="col-md-6">
              <h2>View Your Contacts</h2>
              <ContactList contacts={this.props.contacts.all}/>
            </div>
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
