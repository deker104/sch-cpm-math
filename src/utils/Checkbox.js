function Checkbox({ value, onChange, checked }) {
  function handleChange(event) {
    onChange({
      checked: event.target.checked,
      value,
    });
  }

  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
    </div>
  );
}

export default Checkbox;
