import { createSlice } from "@reduxjs/toolkit";
import data from "./stackline_frontend_assessment_data_2021.json";

const initialState = {
  details: {
    title: data[0].title,
    image: data[0].image,
    subtitle: data[0].subtitle,
    tags: data[0].tags,
  },
  sales: data[0].sales,
};

export const ninjaSlice = createSlice({
  name: "ninja",
  initialState,
  reducers: {
    update: (state, action) => {
      state = action.payload;
    },
    addtag: (state, action) => {
      state.details.tags.push(action.payload);
    },
  },
});

export const { addtag, update } = ninjaSlice.actions;
export default ninjaSlice.reducer;
