const BarSizeInput = ({ label, name, value, checked, onChange }) => (
  <label for={label} className="pr-2">
    <input
      id={label}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
    />
    {value}mm{" "}
  </label>
);

export default BarSizeInput;
