import { configureStore } from "@reduxjs/toolkit";
import { appointmentBookingReducer } from "./appointmentBookingSlice";

export const store = configureStore({
  reducer: { appointmentBooking: appointmentBookingReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
