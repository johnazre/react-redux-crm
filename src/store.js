import { combineReducers } from 'redux';
import contactsReducer from './reducers/reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  form: formReducer     
});




export default rootReducer;
