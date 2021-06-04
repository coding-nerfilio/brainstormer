import { configureStore } from "@reduxjs/toolkit";
import { editorSlice } from "./editor";

export default configureStore({
	reducer: {
		editor: editorSlice,
	},
});
