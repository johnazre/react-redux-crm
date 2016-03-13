import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

import { addContact } from '../actions/actions';

class InputForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
  };

  onSubmit(props) {
    console.log('on submit props: ', props)
    this.props.addContact(props)
  }

  render() {
    const { fields: {firstName, lastName, occupation, organization, email, phone, website, address, notes}, handleSubmit } = this.props;

    const styles = {
      submitButton : {
        marginTop : 15
      },
      inputFields: {
        width: '50%'
      }
    }

    return (
      <form className="form-group">

        <TextField
          floatingLabelText="First Name"
          style={styles.inputFields}
          {...firstName}
        /><br />
        <TextField
          floatingLabelText="Last Name"
          style={styles.inputFields}
          {...lastName}
        /><br />
        <TextField
          floatingLabelText="Occupation"
          style={styles.inputFields}
          {...occupation}
        /><br />
        <TextField
          floatingLabelText="Organization"
          style={styles.inputFields}
          {...organization}
        /><br />
        <TextField
          floatingLabelText="Email"
          style={styles.inputFields}
          {...email}
        /><br />
        <TextField
          floatingLabelText="Phone"
          style={styles.inputFields}
          {...phone}
        /><br />
        <TextField
          floatingLabelText="Website"
          style={styles.inputFields}
          {...website}
        /><br />
        <TextField
          floatingLabelText="Address"
          style={styles.inputFields}
          {...address}
        /><br />
        <TextField
          floatingLabelText="Notes"
          style={styles.inputFields}
          {...notes}
        /><br />
      <RaisedButton label="Submit" style={styles.submitButton} onMouseDown={this.onSubmit.bind(this)} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'contactForm',
  fields: ['firstName', 'lastName', 'occupation', 'organization', 'email', 'phone', 'website', 'address', 'notes']
}, null, { addContact })(InputForm);
