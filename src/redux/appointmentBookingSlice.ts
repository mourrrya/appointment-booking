import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { isTimeSlotSelected } from "../helper";

export interface TimeSlot {
  date: string;
  slots: { start_time: string; end_time: string }[];
}

interface AppointmentBookingState {
  date: Date;
  timeSlots: TimeSlot[];
  selectedTimeSlot?: TimeSlot;
  slotLoading: boolean;
  modalVisible: boolean;
}

const initialState: AppointmentBookingState = {
  date: new Date(),
  timeSlots: [],
  slotLoading: true,
  modalVisible: false,
};

export const appointmentBookingSlice = createSlice({
  name: "appointmentBooking",
  initialState,
  reducers: {
    onFetchTimeSlots: (state, actions: PayloadAction<TimeSlot[]>) => {
      state.timeSlots = actions.payload;
      state.slotLoading = false;
      state.selectedTimeSlot = undefined;
    },
    onSlotLoading: (state) => {
      state.slotLoading = true;
    },
    onFetchTimeSlotError: (state) => {
      state.slotLoading = false;
    },
    onChangeDate: (state, actions: PayloadAction<Date>) => {
      state.date = actions.payload;
    },
    onSelectSlot: (state, actions: PayloadAction<TimeSlot>) => {
      state.selectedTimeSlot = isTimeSlotSelected(
        actions.payload.slots[0],
        state.selectedTimeSlot
      )
        ? undefined
        : actions.payload;
    },

    onBookingAppointment: (state) => {
      state.modalVisible = true;
    },
    onModalClose: (state) => {
      state.modalVisible = false;
      state.selectedTimeSlot = undefined;
    },
  },
});

export const {
  onFetchTimeSlots,
  onSlotLoading,
  onFetchTimeSlotError,
  onChangeDate,
  onSelectSlot,
  onBookingAppointment,
  onModalClose,
} = appointmentBookingSlice.actions;

export const appointmentBookingReducer = appointmentBookingSlice.reducer;
