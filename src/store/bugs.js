import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFeatch: null,
  },
  reducers: {
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = true;
      bugs.lastFeatch = Date.now();
    },
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },
    bugUpdate: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index] = { resolved: true };
    },
  },
});

export const { bugAdded, bugUpdate, bugsReceived } = slice.actions;
export default slice.reducer;

//Action Creators
const url = "/bugs";
export const loadBugs = () => (dispatch, getState) => {
  console.log("getState");
  getState();
  console.log(getState());
  const { lastFeatch } = getState().entities.bugs;
  console.log("lastFeatch" + lastFeatch);

  const diffInMinutes = moment().diff(moment(lastFeatch), "minutes");
  if (diffInMinutes < 10) return;
  console.log("diffInMinutes" + diffInMinutes);

  dispatch(
    apiCallBegan({
      url,
      onSuccess: bugsReceived.type,
    })
  );
};

//selector
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.list.filter((bug) => !bug.resolved)
);
