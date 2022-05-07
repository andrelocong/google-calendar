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
			// state.events = state.events.filter(
			// 	(item) => !item.value.includes(action.payload)
			// );
			state.events = state.events.filter(
				({ newDate }) => newDate !== action.payload
			);
		},
	},
});

export const { addEvent, deleteEvent } = eventSlice.actions;

export default eventSlice.reducer;
