import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
	name: "event",
	initialState: {
		events: [],
	},
	reducers: {
		addEvent: (state, action) => {
			state.events = [...state.events, action.payload];
		},
		deleteEvent: (state, action) => {
			state.events = state.events.filter(({ id }) => id !== action.payload);
		},
	},
});

export const { addEvent, deleteEvent } = eventSlice.actions;

export default eventSlice.reducer;
