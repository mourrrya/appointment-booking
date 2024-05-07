import { TimeSlot } from "./redux/appointmentBookingSlice";

interface Constants {
  ONE_DAY_IN_MS: number;
}

export const formatDate = (date: Date) => {
  return istDateFormat(date).toISOString().slice(0, 10);
};

const istDateFormat = (date: Date) => {
  // Adjust the date for IST (UTC+5:30)
  const istOffset = 5.5; // IST offset in hours
  const istDate = new Date(date.getTime() + istOffset * 60 * 60 * 1000);
  return istDate;
};

export const displayDateFormat = (dateString: string) => {
  const date = new Date(dateString);

  const dayOfWeek = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();

  return `${dayOfWeek}, ${month} ${dayOfMonth}`;
};
export const displayTimeFormat = (dateString: string) => {
  const date = new Date(dateString);

  const hours = date.getUTCHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 || 12;
  const formattedMin = minutes < 10 ? `0${minutes}` : minutes;
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedTime = `${formattedHours}:${formattedMin} ${ampm}`;
  return formattedTime;
};

export const isTimeSlotSelected = (
  slot: {
    start_time: string;
    end_time: string;
  },
  selectedTimeSlot?: TimeSlot
) => {
  if (!selectedTimeSlot) return false;

  const selectedSlot = selectedTimeSlot.slots[0];
  if (
    selectedSlot.start_time !== slot.start_time ||
    selectedSlot.end_time !== slot.end_time
  ) {
    return false;
  }

  return true;
};

export const CONSTANTS: Constants = {
  ONE_DAY_IN_MS: 86400000,
};

export const API_END_POINTS = {
  TIME_SLOTS: "https://app.appointo.me/scripttag/mock_timeslots",
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
