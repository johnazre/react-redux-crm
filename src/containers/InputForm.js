import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

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
    const { fields: {firstName, lastName, email, notes}, handleSubmit } = this.props;

    const styles = {
      submitButton : {
        marginTop : 15
      }
    }

    return (
      <form className="form-group" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label>First Name</label>
          <div>
            <input className="form-control" type="text" placeholder="First Name" {...firstName}/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input className="form-control" type="text" placeholder="Last Name" {...lastName}/>
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input className="form-control" type="email" placeholder="Email" {...email}/>
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <textarea className="form-control" {...notes} />
          </div>
        </div>
        <div>
          <button className="btn btn-default" type="submit" style={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'contactForm',
  fields: ['firstName', 'lastName', 'email', 'notes']
}, null, { addContact })(InputForm);
