import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";

export const momentSlice = createSlice({
	name: "moment",
	initialState: {
		momentValue: moment(),
	},
	reducers: {
		setMomentValue: (state, action) => {
			state.momentValue = action.payload;
		},
	},
});

export const { setMomentValue } = momentSlice.actions;

export default momentSlice.reducer;
