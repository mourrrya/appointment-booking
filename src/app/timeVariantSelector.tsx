export const TimeVariantSelector = () => {
  return (
    <div className="slot-selection">
      <label htmlFor="appointment-time" className="input-label">
        SELECT FROM VARIANTS
      </label>
      <br />
      <select id="appointment-time" className="appointment-time-select">
        <option className="appointment-time-select" value="">
          30 min
        </option>
        <option className="appointment-time-select" value="">
          60 min
        </option>
      </select>
    </div>
  );
};