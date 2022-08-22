import { configureStore } from "@reduxjs/toolkit";
import ninjaReducer from "./reducer";

export const store = configureStore({
  reducer: {
    ninja: ninjaReducer,
  },
});
