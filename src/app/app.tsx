import { useEffect } from "react";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";
import bgCircleLeft from "../assets/bg-circle-left.svg";
import bgCircleRight from "../assets/bg-circle-right.svg";
import bgLeft from "../assets/bg-left.svg";
import bgRight from "../assets/bg-right.svg";
import { API_END_POINTS, CONSTANTS, formatDate } from "../helper";
import {
  TimeSlot,
  onChangeDate,
  onFetchTimeSlotError,
  onFetchTimeSlots,
  onSlotLoading,
} from "../redux/appointmentBookingSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "../style/app.css";
import "../style/calender.css";
import "../style/slot.css";
import "../style/slotSkeletonLoading.css";
import { AppointmentBookingFooter } from "./appointmentBookingFooter";
import { CalendarTitle } from "./calenderTitle";
import { Slots } from "./slots";
import { TimeVariantSelector } from "./timeVariantSelector";

function App() {
  const { date } = useAppSelector((state) => state.appointmentBooking);

  useEffect(() => {
    fetchTimeSlots(date);
  }, []);

  const fetchTimeSlots = (fetchedDate: Date) => {
    const startDate = formatDate(fetchedDate);
    const endDate = formatDate(
      new Date(fetchedDate.getTime() + CONSTANTS.ONE_DAY_IN_MS)
    );
    dispatch(onSlotLoading());
    fetch(
      `${API_END_POINTS.TIME_SLOTS}?start_date=${startDate}&end_date=${endDate}`
    )
      .then((res) => res.json())
      .catch(() => {
        alert("something went wrong");
        dispatch(onFetchTimeSlotError());
      })
      .then((data) => {
        dispatch(onFetchTimeSlots(data as TimeSlot[]));
        console.log("data", data);
      });
  };

  const dispatch = useAppDispatch();

  return (
    <div className="app">
      <div className="apt-booking-wrapper">
        <div className="apt-booking-form">
          <div className="apt-booking">
            <div className="calender-wrapper">
              <CalendarTitle />
              <Calendar
                value={date}
                onChange={(e: Value) => {
                  fetchTimeSlots(e as Date);
                  dispatch(onChangeDate(e as Date));
                }}
              />
            </div>

            <div className="slot-selection-wrapper">
              <TimeVariantSelector />
              <Slots />
            </div>
          </div>
          <AppointmentBookingFooter />
        </div>
        <BgImages />
      </div>
    </div>
  );
}

const BgImages = () => {
  return (
    <>
      <img className="bg-circle-left" src={bgCircleLeft} alt="sidepanda-bg" />
      <img className="bg-circle-right" src={bgCircleRight} alt="sidepanda-bg" />
      <img className="bg-left" src={bgLeft} alt="sidepanda-bg" />
      <img className="bg-right" src={bgRight} alt="sidepanda-bg" />
    </>
  );
};

export default App;
