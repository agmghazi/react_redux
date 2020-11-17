import * as actions from "./actionType";

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});

export const bugUpdate = (id) => ({
  type: actions.UPDATE_ADDED,
  payload: {
    id,
  },
});
