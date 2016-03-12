import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeContact } from '../actions/actions'


class ContactList extends Component {

  onRemoveClick(some, contact) {
    console.log("onRemoveClick: ", this.props)
    this.props.removeContact(contact.id)
  }

  render() {
    const styles = {
      listItem : {
        padding: 20,
        border: "1px solid black",
        listStyleType: 'none'
      }
    }
    console.log('this is props in CL: ', this.props);
    return (
      <ul>
        {
          this.props.contacts.map((contact) => {
            return (
b
              <li key={contact.id} style={styles.listItem}>
                <p>First name: {contact.text.firstName}</p>
                <p>Last name: {contact.text.lastName}</p>
                <p>Email: {contact.text.email}</p>
                <button className="btn btn-default" onClick={this.onRemoveClick(this, contact)}>
                  Remove
                </button>
              </li>

            )
          })
        }

      </ul>
    );
  }
}



export default ContactList;
