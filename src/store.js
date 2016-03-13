import { combineReducers } from 'redux';
import contactsReducer from './reducers/contactsReducer';
import taskReducer from './reducers/taskReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  tasks: taskReducer,
  contacts: contactsReducer,
  form: formReducer
});




export default rootReducer;
