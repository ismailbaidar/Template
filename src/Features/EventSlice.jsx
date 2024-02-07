import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  events: [],
  event: {},
  loading: false,
}

export const getAllEvents = createAsyncThunk(
  "events/getAllEvents",
  async () => {
    return axios
      .get("https://mmc-event-session.azurewebsites.net/api/v1/Event/GetEvents")
      .then((res) => res.data)
      .catch((err) => console.log(err))
  }
)

export const getEventById = createAsyncThunk(
  "events/getEventbyId",
  async (data) => {
    return axios
      .get(
        "https://mmc-event-session.azurewebsites.net/api/v1/Event/GetById/" +
          data
      )
      .then((res) => res.data)
      .catch((err) => console.log(err))
  }
)

export const addEvent = createAsyncThunk("events/addEvent", async (data) => {
  return axios
    .post(
      "https://mmc-event-session.azurewebsites.net/api/v1/Event/CreateEvent",
      data
    )
    .then((res) => res.data)
    .catch((err) => console.log(err))
})

export const deleteEvent = createAsyncThunk(
  "events/deleteEvent",
  async (data) => {
    return axios
      .delete(
        "https://mmc-event-session.azurewebsites.net/api/v1/Event/Romove/" +
          data,
        data
      )
      .then((res) => res.data)
      .catch((err) => console.log(err))
  }
)

export const updateEvent = createAsyncThunk(
  "events/updateEvent",
  async ({ id, formData }) => {
    return axios
      .put(
        "https://mmc-event-session.azurewebsites.net/api/v1/Event/Update/" + id,
        formData
      )
      .then((res) => res.data)
      .catch((err) => console.log(err))
  }
)

export const getThisWeekEvents = createAsyncThunk(
  "events/getThisWeekEvents",
  async () => {
    return axios
      .get("https://mmc-event-session.azurewebsites.net/api/v1/Event/thisweek")
      .then((res) => res.data)
      .catch((err) => console.log(err))
  }
)

const EventSlice = createSlice({
  name: "event",
  initialState,
  extraReducers: ({ addCase }) => {
    addCase(getAllEvents.fulfilled, (state, { payload }) => {
      state.events = payload
      state.loading = false
    })
    addCase(getAllEvents.pending, (state, { payload }) => {
      state.events = payload
      state.loading = true
      console.log(payload, "events")
    })
    addCase(getAllEvents.rejected, (state, { payload }) => {
      state.loading = false
    })
    addCase(getEventById.fulfilled, (state, { payload }) => {
      state.event = payload
      console.log(payload)
      state.loading = false
    })
    addCase(getThisWeekEvents.fulfilled, (state, { payload }) => {
      state.events = payload
      console.log(payload)
    })
    addCase(deleteEvent.fulfilled, (state, { payload }) => {
      state.events = payload
      // state.loading = false
    })
    addCase(deleteEvent.pending, (state, { payload }) => {
      // state.loading = true
    })
    addCase(deleteEvent.rejected, (state, { payload }) => {
      // state.loading = false
    })
  },
})

export default EventSlice.reducer
