import jwtFetch from "./jwt";

const RECEIVE_USER_MESSAGES = "messages/RECEIVE_USER_MESSAGES";
const RECEIVE_MESSAGE = "messages/RECEIVE_MESSAGE";
const REMOVE_MESSAGE = "messages/REMOVE_MESSAGE";
const RECEIVE_MESSAGE_ERRORS = "messages/RECEIVE_MESSAGE_ERRORS";
const RECEIVE_EDITED_MESSAGE_ERRORS = "messages/RECEIVE_EDITED_MESSAGE_ERRORS";
const CLEAR_MESSAGE_ERRORS = "messages/CLEAR_MESSAGE_ERRORS";

const receiveUserMessages = (messages) => ({
  type: RECEIVE_USER_MESSAGES,
  messages
});

const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

const removeMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  messageId
});

const receiveMessageErrors = (errors) => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});

const receiveEditedMessageErrors = (errors) => ({
  type: RECEIVE_EDITED_MESSAGE_ERRORS,
  errors
})

export const clearMessageErrors = (errors) => ({
  type: CLEAR_MESSAGE_ERRORS,
  errors
});

export const fetchUserMessages = (currentUserId, matchedUserId) => async dispatch => {
  try {
    const res = await jwtFetch(`/api/messages/user/${currentUserId}/match/${matchedUserId}`);
    const messages = await res.json();
    dispatch(receiveUserMessages(messages));
  } catch (err) {
    const resBody = await err.json();
    if(resBody.statusCode === 400) {
      return dispatch(receiveMessageErrors(resBody.errors));
    }
  }
};

export const createMessage = (data) => async dispatch => {
  try {
    const res = await jwtFetch(`/api/messages/`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const message = await res.json();
    dispatch(receiveMessage(message));
  } catch (err) {
    const resBody = await err.json();
    if(resBody.statusCode === 400) {
      return dispatch(receiveMessageErrors(resBody.errors));
    }
  }
};

export const updateMessage = (message) => async dispatch => {
  try {
    const res = await jwtFetch(`/api/messages/${message._id}`, {
      method: 'PATCH',
      body: JSON.stringify(message)
    })
    const updatedMessage = await res.json();
    dispatch(receiveMessage(updatedMessage));
  } catch (err) {
    const resBody = await err.json();
    // console.log('resbody is ', resBody)
    if(resBody.statusCode === 400) {
      return dispatch(receiveEditedMessageErrors(resBody.errors));
    }
  }
};

export const deleteMessage = (messageId) => async dispatch => {
  try {
    const res = await jwtFetch(`/api/messages/${messageId}`, {
      method: 'DELETE'
    })
    dispatch(removeMessage(messageId))
  } catch (err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400) {
      return dispatch(receiveMessageErrors(resBody.errors));
    }
  }
}

const nullErrors = null;
export const messageErrorsReducer = (state = nullErrors, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors;
    case CLEAR_MESSAGE_ERRORS:
      return nullErrors;
    default:
      return state;
  }
};

export const editedMessageErrorsReducer = (state = nullErrors, action) => {
  switch (action.type) {
    case RECEIVE_EDITED_MESSAGE_ERRORS:
      return action.errors;
    case CLEAR_MESSAGE_ERRORS:
      return nullErrors;
    default:
      return state;
  }
}

const messagesReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_USER_MESSAGES:
      return { ...action.messages };
    case RECEIVE_MESSAGE:
      return { ...state, [action.message._id]: action.message };
    case REMOVE_MESSAGE:
      let newState = {...state};
      delete newState[action.messageId];
      return newState;
    default:
      return state;
  }
}

export default messagesReducer;