import { combineReducers } from "redux";
import messagesReducer from "./messages";
import usersReducer from "./users";

export const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer
})