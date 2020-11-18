import { createAction, createReducer } from "@reduxjs/toolkit";

//Action creators
export const bugAdded = createAction("bugAdded");
export const bugUpdate = createAction("bugUpdate");
export const DELETE_ADDED = createAction("DELETE_ADDED");

//Reducer
let lastId = 0;

export default createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugUpdate.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index] = { resolved: true };
  },
});
