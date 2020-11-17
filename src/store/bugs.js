//Action types
const BUG_ADDED = "bugAdded";
const DELETE_ADDED = "bugRemoved";
const UPDATE_ADDED = "update_added";

//Action creators
export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description,
  },
});

export const bugUpdate = (id) => ({
  type: UPDATE_ADDED,
  payload: {
    id,
  },
});

//Reducer
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case DELETE_ADDED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case UPDATE_ADDED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}
