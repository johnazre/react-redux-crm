import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeContact } from '../actions/actions';


class ContactList extends Component {

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
          this.props.contacts.all.map((contact, index) => {
            return (

              <li key={contact.id} style={styles.listItem}>
                <p>First name: {contact.text.firstName}</p>
                <p>Last name: {contact.text.lastName}</p>
                <p>Email: {contact.text.email}</p>
                <button className="btn btn-default" onClick={() => this.props.removeContact(index)}>
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
  console.log('mapStateToProps', state)
  return state;
}

// Anything reutrned form this function will end up as props
// to all of our reducers
function mapDispatchToProps(dispatch){

  return bindActionCreators({ removeContact }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
