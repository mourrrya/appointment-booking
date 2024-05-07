import checkIcon from "../assets/checkIcon.svg";
import {
  displayDateFormat,
  displayTimeFormat,
  isTimeSlotSelected,
} from "../helper";
import { TimeSlot, onSelectSlot } from "../redux/appointmentBookingSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "../style/app.css";
import "../style/calender.css";
import "../style/slot.css";
import "../style/slotSkeletonLoading.css";
import { SlotsSkeletonLoading } from "./slotsSkeletonLoading";

export const Slots = () => {
  const { timeSlots, selectedTimeSlot, slotLoading } = useAppSelector(
    (state) => state.appointmentBooking
  );
  const dispatch = useAppDispatch();

  const handleSlotSelection = (
    timeSlot: TimeSlot,
    slot: {
      start_time: string;
      end_time: string;
    }
  ) => {
    const selectedTimeSlot: TimeSlot = {
      date: timeSlot.date,
      slots: [slot],
    };
    dispatch(onSelectSlot(selectedTimeSlot));
  };

  if (slotLoading) return <SlotsSkeletonLoading />;

  return (
    <div>
      {timeSlots.map((timeSlot) => (
        <div key={timeSlot.date.toString()}>
          <label className="input-label">
            {displayDateFormat(timeSlot.date)} - Available Slots
          </label>
          <div className="time-slots-wrapper">
            {timeSlot.slots.map((slot) => {
              const selectedSlot = isTimeSlotSelected(slot, selectedTimeSlot);
              return (
                <button
                  onClick={() => handleSlotSelection(timeSlot, slot)}
                  className={`time-slot ${
                    selectedSlot ? "time-slot--active" : ""
                  }`}
                  key={slot.start_time.toString()}
                >
                  <span className="time-slot-format">
                    <span>{displayTimeFormat(slot.start_time)}</span>
                    <span>-</span>
                    <span>{displayTimeFormat(slot.end_time)}</span>
                  </span>
                  <span className="animation-span" />
                  <img
                    className="check-icon"
                    src={checkIcon}
                    alt="sidepanda-check"
                  />
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
