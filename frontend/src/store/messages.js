import jwtFetch from "./jwt";

const RECEIVE_USER_MESSAGES = "messages/RECEIVE_USER_MESSAGES";
const RECEIVE_MESSAGE = "messages/RECEIVE_MESSAGE";
const REMOVE_MESSAGE = "messages/REMOVE_MESSAGE";
const RECEIVE_MESSAGE_ERRORS = "messages/RECEIVE_MESSAGE_ERRORS";
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
    const res = await jwtFetch(`/api/messages/${message.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(message)
    });
  } catch (err) {

  }
};