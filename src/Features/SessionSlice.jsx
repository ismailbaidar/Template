import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  sessions: [],
};

export const getAllSession = createAsyncThunk(
  "session/getAllSessions",
  async () => {
    return axios
      .get(
        "https://mmc-event-session.azurewebsites.net/api/v1/Session/GetSessions"
      )
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
);
const SessionSlice = createSlice({
  name: "session",
  initialState,
  extraReducers: ({ addCase }) => {
    addCase(getAllSession.fulfilled, (state, { payload }) => {
      state.sessions = payload;
      console.log(payload);
    });
  },
});

export default SessionSlice.reducer;
