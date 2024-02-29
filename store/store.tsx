import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./roomsSlice";
import formReducer from "./formSlice";

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
