import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/lib/raised-button';
import { Link } from 'react-router';


import ContactList from './ContactList'
import InputForm from '../containers/InputForm'

export default class Contacts extends Component {
  render() {
    console.log("props on app: ", this.props)
    return (
      <div>
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state: ", state);
  return state;
}

export default connect(mapStateToProps)(Contacts)
