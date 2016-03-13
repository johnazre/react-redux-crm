import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

import { addContact } from '../actions/actions';

class TaskForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
  };

  onSubmit(props) {
    console.log('on submit props: ', props)
    this.props.addTask(props)
  }

  render() {
    const { fields: {taskName, description, startDate, dueDate}, handleSubmit } = this.props;

    const styles = {
      submitButton : {
        marginTop : 15
      }
    }

    return (
      <form className="form-group" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <TextField
          floatingLabelText="Task Name"
          style={styles.inputFields}
          {...taskName}
        /><br />
        <TextField
          floatingLabelText="Description"
          style={styles.inputFields}
          {...description}
        /><br />
        <TextField
          floatingLabelText="Organization"
          style={styles.inputFields}
          {...organization}
        /><br />
        <TextField
          floatingLabelText="Start Date"
          style={styles.inputFields}
          {...startDate}
        /><br />
        <TextField
          floatingLabelText="Due Date"
          style={styles.inputFields}
          {...dueDate}
        /><br />
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
  fields: ['taskName', 'description', 'startDate', 'dueDate']
}, null, { addTask })(TaskForm);
