const DimensionsInput = ({ label, value, onChange }) => (
  <div className="p-2">
    <label for={label}>{label}: </label>
    <input
      id={label}
      type="number"
      step="any"
      value={value}
      onChange={(e) => {
        onChange(e.target.value === "" ? null : parseFloat(e.target.value));
      }}
      min={0}
      max={9999}
      className="border w-24"
    />
  </div>
);

export default DimensionsInput;
