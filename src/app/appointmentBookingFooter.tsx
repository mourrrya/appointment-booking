import nextIcon from "../assets/nextIcon.svg";
import { displayDateFormat, displayTimeFormat } from "../helper";
import {
  onBookingAppointment,
  onModalClose,
} from "../redux/appointmentBookingSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Modal } from "./modal";

export const AppointmentBookingFooter = () => {
  const { selectedTimeSlot, modalVisible } = useAppSelector(
    (state) => state.appointmentBooking
  );

  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(onBookingAppointment());
  };

  const modalMsg = () => {
    if (!selectedTimeSlot) {
      return "Please select the slot!";
    }

    const successMsg = `Thanks \n\n Your appointment is confirmed for ${displayDateFormat(
      selectedTimeSlot.date
    )}\n  From ${displayTimeFormat(
      selectedTimeSlot.slots[0].start_time
    )} To ${displayTimeFormat(selectedTimeSlot.slots[0].end_time)}`;

    return successMsg;
  };

  return (
    <div className="appointment-footer">
      <div className="powered-by-wrapper">
        <span>Powered By</span>
        <span className="powered-by-name">Appointo</span>
      </div>

      <button className="btn" onClick={handleNext}>
        <span>Next</span>
        <img src={nextIcon} alt="next" />
      </button>
      {modalVisible && (
        <Modal message={modalMsg()} onClose={() => dispatch(onModalClose())} />
      )}
    </div>
  );
};
