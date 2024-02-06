import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  events: [],
};

export const getAllEvents = createAsyncThunk(
  "events/getAllEvents",
  async () => {
    return axios
      .get("https://mmc-event-session.azurewebsites.net/api/v1/Event/GetEvents")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
);

export const addEvent = createAsyncThunk("events/addEvent", async (data) => {
  return axios
    .post(
      "https://mmc-event-session.azurewebsites.net/api/v1/Event/CreateEvent",
      data
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

const EventSlice = createSlice({
  name: "event",
  initialState,
  extraReducers: ({ addCase }) => {
    addCase(getAllEvents.fulfilled, (state, { payload }) => {
      state.events = payload;
      console.log(payload, "events");
    });
  },
});

export default EventSlice.reducer;
