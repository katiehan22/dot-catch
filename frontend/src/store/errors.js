import { combineReducers } from 'redux';
import { editedMessageErrorsReducer, messageErrorsReducer } from './messages';
import { sessionErrorsReducer } from './session';
import { userErrorsReducer } from './users';

export default combineReducers({
  session: sessionErrorsReducer,
  users: userErrorsReducer,
  messages: messageErrorsReducer,
  editedMessages: editedMessageErrorsReducer
});
