import { createSlice } from "@reduxjs/toolkit";

export const editorSlice = createSlice({
	name: "editor",
	initialState: {
		Data: {
			children: {},
			name: "",
		},
		Members: [],
	},
	reducers: {
		setEditor: (state, action) => {
			state.Data = action.payload.Data;
			state.Members = action.payload.Members;
		},
	},
});

export const { setEditor } = editorSlice.actions;

export default editorSlice.reducer;
