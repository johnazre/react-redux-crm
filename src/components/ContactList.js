import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeContact } from '../actions/actions';


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
    console.log('this is props in CL: ', this.props.contacts);
    return (
      <ul>
        {
          this.props.contacts.all.map((contact) => {
            return (

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

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  console.log('mapStateToProps', state)
  return state;
}

// Anything reutrned form this function will end up as props
// to all of our reducers
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ removeContact }, dispatch)
}

// Promote  BookList from a component to a container -
// it needs to know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
