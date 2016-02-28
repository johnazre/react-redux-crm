import React, { Component, PropTypes } from 'react';

class ContactList extends Component {

  static propTypes = {
    contacts: React.PropTypes.array.isRequired
  };

  render() {
    const styles = {
      listItem : {
        padding: 20,
        border: "1px solid black",
        listStyleType: 'none'
      }
    }
    // console.log('this is props in CL: ', this.props);
    return (
      <ul>
        {
          this.props.contacts.map(function(contact){
            return <li key={contact.id} style={styles.listItem}>
              <p>First name: {contact.text.firstName}</p>
              <p>Last name: {contact.text.lastName}</p>
              <p>Email: {contact.text.email}</p>
            </li>
          })
        }
      </ul>
    );
  }
}

export default ContactList;
